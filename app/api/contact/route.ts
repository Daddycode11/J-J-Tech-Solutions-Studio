import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,           // eutech253@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from:    `"J&J Tech Studio" <${process.env.GMAIL_USER}>`,
      to:      process.env.CONTACT_RECEIVER,    // jowelpana44@gmail.com
      replyTo: email,                           // reply goes to the client
      subject: `[J&J Contact] New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#1a1a2e;">New Contact Message</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px;color:#666;width:80px;"><strong>Name</strong></td>
              <td style="padding:8px;">${name}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding:8px;color:#666;"><strong>Email</strong></td>
              <td style="padding:8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px;color:#666;vertical-align:top;"><strong>Message</strong></td>
              <td style="padding:8px;white-space:pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color:#999;font-size:12px;margin-top:24px;">
            Sent from J&amp;J Tech Solutions contact form
          </p>
        </div>
      `,
    });
// Auto-reply to client
await transporter.sendMail({
  from:    `"J&J Tech Studio" <${process.env.GMAIL_USER}>`,
  to:      email,                               // client's email
  subject: `We received your message, ${name}!`,
  html: `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#1a1a2e;">Thanks for reaching out, ${name}!</h2>
      <p style="color:#444;line-height:1.7;">
        We received your message and will get back to you within 
        <strong>24 hours</strong>.
      </p>
      <div style="margin:24px 0;padding:16px;background:#f5f5f5;border-radius:8px;color:#666;">
        <strong>Your message:</strong><br/>
        <p style="white-space:pre-wrap;margin-top:8px;">${message}</p>
      </div>
      <p style="color:#444;">
        In the meantime, feel free to check our work on 
        <a href="https://github.com/Daddycode11">GitHub</a>.
      </p>
      <p style="color:#999;font-size:12px;margin-top:32px;">
        — Jowel | J&amp;J Tech Solutions
      </p>
    </div>
  `,
});
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}