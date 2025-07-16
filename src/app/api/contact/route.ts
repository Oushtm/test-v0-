import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using the provided SMTP settings
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
});

// Email template function
const createEmailTemplate = (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const { firstName, lastName, email, phone, message } = data;
  const date = new Date().toLocaleString('fr-FR', { timeZone: 'Africa/Casablanca' });
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Nouveau Contact - Rentabilio</title>
        <style>
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background: #ffffff;
          }
          .header {
            background: #1a1a1a;
            color: white;
            padding: 30px 20px;
            text-align: center;
            border-radius: 15px 15px 0 0;
          }
          .logo {
            margin-bottom: 20px;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            color: #0fc28b;
          }
          .header p {
            margin: 10px 0 0;
            color: #888;
          }
          .content {
            background-color: #ffffff;
            padding: 30px 20px;
            border: 1px solid #eee;
            border-top: none;
            border-radius: 0 0 15px 15px;
          }
          .field {
            margin-bottom: 20px;
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #0fc28b;
          }
          .label {
            color: #0fc28b;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
          }
          .value {
            color: #333;
            font-size: 16px;
          }
          .message-box {
            background-color: #f8f9fa;
            padding: 25px;
            border-radius: 10px;
            margin-top: 20px;
            border: 1px solid #eee;
          }
          .message-box .label {
            color: #0fc28b;
            font-size: 16px;
            margin-bottom: 15px;
          }
          .message-box .value {
            white-space: pre-wrap;
            line-height: 1.8;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding: 20px;
            color: #888;
            font-size: 13px;
            border-top: 1px solid #eee;
          }
          .contact-info {
            margin-top: 20px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
            font-size: 14px;
            color: #666;
          }
        </style>
      </head>
      <body style="background-color: #f5f5f5; padding: 20px;">
        <div class="email-container">
          <div class="header">
            <div class="logo">
              <!-- You can add your logo here -->
              🏠 RENTABILIO
            </div>
            <h1>Nouveau Message</h1>
            <p>Reçu le ${date}</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Contact</div>
              <div class="value">${firstName} ${lastName}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">Téléphone</div>
              <div class="value">${phone || 'Non fourni'}</div>
            </div>
            <div class="message-box">
              <div class="label">Message</div>
              <div class="value">${message}</div>
            </div>
            
            <div class="contact-info">
              <strong>Informations de contact:</strong><br>
              📞 Téléphone: (+212) 660-408470<br>
              ✉️ Email: contact@rentabilio.com<br>
              📍 Adresse: Maroc, Casablanca
            </div>
          </div>
            <div class="footer">
              <p>Ce message a été envoyé via le formulaire de contact de Rentabilio</p>
              <p>© ${new Date().getFullYear()} Rentabilio. Tous droits réservés.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Verify transporter
    await transporter.verify();

    // Send email with the new template
    await transporter.sendMail({
      from: `"Rentabilio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `✉️ Nouveau message de ${firstName} ${lastName}`,
      html: createEmailTemplate({ firstName, lastName, email, phone, message })
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 