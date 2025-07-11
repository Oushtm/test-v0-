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
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            line-height: 1.6;
          }
          .header {
            background: linear-gradient(to right, #0fc28b, #0fc28b80);
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 15px;
            background-color: white;
            padding: 15px;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          .label {
            color: #666;
            font-size: 14px;
            margin-bottom: 5px;
          }
          .value {
            color: #333;
            font-size: 16px;
          }
          .message-box {
            background-color: white;
            padding: 20px;
            border-radius: 6px;
            margin-top: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Nouveau Message de Contact</h1>
            <p>Reçu le ${new Date().toLocaleDateString('fr-FR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Nom Complet</div>
              <div class="value">${firstName} ${lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email</div>
              <div class="value">
                <a href="mailto:${email}" style="color: #0fc28b; text-decoration: none;">
                  ${email}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">Téléphone</div>
              <div class="value">
                <a href="tel:${phone}" style="color: #0fc28b; text-decoration: none;">
                  ${phone}
                </a>
              </div>
            </div>
            
            <div class="message-box">
              <div class="label">Message</div>
              <div class="value" style="white-space: pre-wrap;">${message}</div>
            </div>
            
            <div class="footer">
              <p>Ce message a été envoyé via le formulaire de contact de Rentabilio</p>
              <p>© ${new Date().getFullYear()} Rentabilio. Tous droits réservés.</p>
            </div>
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
      from: process.env.EMAIL_USER,
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