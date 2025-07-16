import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generatePDF } from '@/lib/generatePDF';

// Create a transporter using the provided SMTP settings
const transporter = nodemailer.createTransport({
  host: 'mail.rentabilio.com',
  port: 465,
  secure: true,
  auth: {
    user: 'contact@rentabilio.com',
    pass: 'MyStayZair123%@'
  },
  tls: {
    rejectUnauthorized: false,
    ciphers: 'SSLv3'
  },
  debug: true
});

export async function POST(request: Request) {
  try {
    console.log('Starting report generation process...');
    
    // Parse request body
    let body;
    try {
      body = await request.json();
      console.log('Received request body:', body);
    } catch (error) {
      console.error('Error parsing request body:', error);
      return NextResponse.json(
        { error: 'Format de requête invalide' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!body.email || !body.fullName) {
      console.error('Missing required fields:', { email: body.email, fullName: body.fullName });
      return NextResponse.json(
        { error: 'Email et nom complet sont requis' },
        { status: 400 }
      );
    }

    // Generate PDF
    let pdfBuffer: Buffer;
    try {
      console.log('Generating PDF...');
      pdfBuffer = await generatePDF({
        propertyType: body.propertyType,
        rooms: body.rooms,
        district: body.district,
        fullName: body.fullName,
        phone: body.phone || 'Non fourni',
        email: body.email,
        hauteSaison: body.hauteSaison,
        saisonModeree: body.saisonModeree,
        basseSaison: body.basseSaison
      });
      console.log('PDF generated successfully');
    } catch (error: any) {
      console.error('PDF generation error:', error);
      return NextResponse.json(
        { error: `Erreur lors de la génération du PDF: ${error.message}` },
        { status: 500 }
      );
    }

    // Verify SMTP connection
    try {
      console.log('Verifying SMTP connection...');
      await new Promise((resolve, reject) => {
        transporter.verify((error, success) => {
          if (error) {
            console.error('SMTP verification failed:', error);
            reject(error);
          } else {
            console.log('SMTP connection verified');
            resolve(success);
          }
        });
      });
    } catch (error: any) {
      console.error('SMTP connection error:', error);
      return NextResponse.json(
        { error: `Erreur de connexion au serveur mail: ${error.message}` },
        { status: 500 }
      );
    }

    // Send emails
    try {
      // Send to user
      console.log('Sending email to user:', body.email);
      await transporter.sendMail({
        from: '"Rentabilio" <contact@rentabilio.com>',
        to: body.email,
        subject: "Votre Rapport Personnalisé Rentabilio",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0fc28b; color: white; padding: 20px; text-align: center; border-radius: 5px;">
              <h1>Votre Rapport est Prêt!</h1>
            </div>
            <div style="padding: 20px;">
              <p>Bonjour ${body.fullName},</p>
              <p>Nous vous remercions d'avoir utilisé Rentabilio pour l'estimation de votre bien. Votre rapport personnalisé est joint à cet email.</p>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3>Détails de votre bien :</h3>
                <ul>
                  <li>Type : ${body.propertyType}</li>
                  <li>${body.propertyType === 'Villa' ? 'Suites' : 'Chambres'} : ${body.rooms}</li>
                  <li>Quartier : ${body.district}</li>
                </ul>
              </div>
              <p>Pour toute question, n'hésitez pas à nous contacter :</p>
              <ul>
                <li>Téléphone : (+212) 660-408470</li>
                <li>Email : contact@rentabilio.com</li>
              </ul>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #666;">
              <p>© ${new Date().getFullYear()} Rentabilio. Tous droits réservés.</p>
            </div>
          </div>
        `,
        attachments: [{
          filename: `Rapport_Rentabilio_${body.fullName.replace(/\s+/g, '_')}.pdf`,
          content: pdfBuffer
        }]
      });
      console.log('Email sent to user successfully');

      // Send to admin
      console.log('Sending notification to admin');
      await transporter.sendMail({
        from: '"Rentabilio System" <contact@rentabilio.com>',
        to: 'contact@rentabilio.com',
        subject: `Nouveau Rapport Généré - ${body.fullName}`,
        html: `
          <h2>Nouveau rapport généré</h2>
          <p><strong>Client:</strong> ${body.fullName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Téléphone:</strong> ${body.phone || 'Non fourni'}</p>
          <p><strong>Type de bien:</strong> ${body.propertyType}</p>
          <p><strong>Chambres/Suites:</strong> ${body.rooms}</p>
          <p><strong>Quartier:</strong> ${body.district}</p>
          <p><strong>Prix Haute Saison:</strong> ${body.hauteSaison}</p>
          <p><strong>Prix Saison Modérée:</strong> ${body.saisonModeree}</p>
          <p><strong>Prix Basse Saison:</strong> ${body.basseSaison}</p>
        `,
        attachments: [{
          filename: `Rapport_Rentabilio_${body.fullName.replace(/\s+/g, '_')}.pdf`,
          content: pdfBuffer
        }]
      });
      console.log('Notification sent to admin successfully');

      return NextResponse.json(
        { message: 'Rapport envoyé avec succès' },
        { status: 200 }
      );
    } catch (error: any) {
      console.error('Email sending error:', error);
      return NextResponse.json(
        { error: `Erreur lors de l'envoi de l'email: ${error.message}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('General error:', error);
    return NextResponse.json(
      { error: `Une erreur est survenue: ${error.message}` },
      { status: 500 }
    );
  }
} 