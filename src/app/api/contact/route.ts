import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { fullName, email, address, projectType, message } = await request.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Create a transporter using SMTP
    // You should use environment variables to store your email credentials
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail', // Use your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Can be an App Password if using Gmail
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // The admin email who receives inquiries
      subject: `New Inquiry from ${fullName} - ${projectType || 'General'}`,
      text: `
            Name: ${fullName}
            Email: ${email}
            Address: ${address || 'N/A'}
            Project Type: ${projectType || 'N/A'}
            Message:
            ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address || 'N/A'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please check your configuration or try again.' },
      { status: 500 }
    );
  }
}
