import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const jobPosition = formData.get('jobPosition') as string;
    const portfolioLink = formData.get('portfolioLink') as string;
    const resumeLink = formData.get('resumeLink') as string;
    const resumeFile = formData.get('resumeFile') as File | null;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    if (!resumeLink && !resumeFile) {
      return NextResponse.json(
        { error: 'Please provide either a Resume Link or upload a Resume File.' },
        { status: 400 }
      );
    }

    // Prepare attachments if a file was uploaded
    const attachments = [];
    if (resumeFile) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type,
      });
    }

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // The admin email who receives applications
      subject: `New Job Application: ${fullName}`,
      text: `
            Name: ${fullName}
            Email: ${email}
            Job Position: ${jobPosition || 'N/A'}
            Profile/Portfolio Link: ${portfolioLink || 'N/A'}
            Resume Link: ${resumeLink || 'File Attached'}
      `,
      html: `
        <h3>New Job Application Received</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Job Position:</strong> ${jobPosition || 'N/A'}</p>
        <p><strong>LinkedIn / GitHub:</strong> ${
          portfolioLink ? `<a href="${portfolioLink}">${portfolioLink}</a>` : 'N/A'
        }</p>
        <p><strong>Resume Link:</strong> ${
          resumeLink ? `<a href="${resumeLink}">${resumeLink}</a>` : '<i>See attached file</i>'
        }</p>
      `,
      attachments: attachments,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Application sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending application:', error);
    return NextResponse.json(
      { error: 'Failed to send application. Please try again.' },
      { status: 500 }
    );
  }
}
