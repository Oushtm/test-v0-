import { pdf, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#1e3a8a',
    padding: 40,
    color: 'white',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#0fc28b',
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
    color: 'white',
  },
  header: {
    fontSize: 18,
    marginBottom: 15,
    color: '#0fc28b',
  },
  propertyInfo: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
  },
  priceInfo: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(15, 194, 139, 0.1)',
    borderRadius: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
  },
});

interface ReportData {
  propertyType: string;
  rooms: string;
  district: string;
  fullName: string;
  phone: string;
  email: string;
  hauteSaison: string;
  saisonModeree: string;
  basseSaison: string;
}

function createReport(data: ReportData) {
  return React.createElement(Document, {}, 
    React.createElement(Page, { size: "A4", style: styles.page },
      React.createElement(View, { style: styles.section }, [
        React.createElement(Text, { style: styles.title }, "Rapport d'Estimation Rentabilio"),
        
        React.createElement(View, { style: styles.propertyInfo }, [
          React.createElement(Text, { style: styles.header }, "Informations du Bien"),
          React.createElement(Text, { style: styles.content }, `Type de bien: ${data.propertyType}`),
          React.createElement(Text, { style: styles.content }, 
            `Nombre de ${data.propertyType === 'Villa' ? 'suites' : 'chambres'}: ${data.rooms}`
          ),
          React.createElement(Text, { style: styles.content }, `Quartier: ${data.district}`)
        ]),

        React.createElement(View, { style: styles.propertyInfo }, [
          React.createElement(Text, { style: styles.header }, "Informations du Propriétaire"),
          React.createElement(Text, { style: styles.content }, `Nom: ${data.fullName}`),
          React.createElement(Text, { style: styles.content }, `Email: ${data.email}`),
          React.createElement(Text, { style: styles.content }, `Téléphone: ${data.phone}`)
        ]),

        React.createElement(View, { style: styles.priceInfo }, [
          React.createElement(Text, { style: styles.header }, "Estimation des Prix"),
          React.createElement(Text, { style: styles.content },
            `Haute Saison (Juin - Septembre): ${data.hauteSaison} DH`
          ),
          React.createElement(Text, { style: styles.content },
            `Saison Modérée (Oct, Jan-Mai): ${data.saisonModeree} DH`
          ),
          React.createElement(Text, { style: styles.content },
            `Basse Saison (Nov - Déc): ${data.basseSaison} DH`
          )
        ]),

        React.createElement(Text, { style: styles.footer },
          `© ${new Date().getFullYear()} Rentabilio - www.rentabilio.com\nPour plus d'informations, contactez-nous au +212 660-408470`
        )
      ])
    )
  );
}

export async function generatePDF(data: ReportData): Promise<Buffer> {
  try {
    console.log('Starting PDF generation...');
    const doc = createReport(data);
    console.log('PDF document created, generating buffer...');
    const buffer = await pdf(doc).toBuffer();
    console.log('PDF buffer generated successfully');
    return buffer;
  } catch (error) {
    console.error('Error in generatePDF:', error);
    throw new Error(`Erreur lors de la génération du PDF: ${error.message}`);
  }
} 