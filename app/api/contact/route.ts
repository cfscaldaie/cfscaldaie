import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try{
    const body = await req.json();

  const recaptchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.recaptchaToken}`,
    }
  ).then(r => r.json());
    if (!recaptchaRes.success) {
      return new Response("Invalid reCAPTCHA", { status: 400 });
    }
    // 2. CONFIGURAZIONE EMAIL
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS, // password per app
    },
  });
    // 3. INVIO EMAIL
    await transporter.sendMail({
      from: `"${body.name}" <${body.email}>`,
      to: process.env.MAIL_TO, // indirizzo che riceve la mail
      subject: "Nuovo messaggio dal form di contatto",
      text: body.message,
      html: `
        <h2>Hai ricevuto un nuovo messaggio</h2>
        <p><strong>Nome:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Messaggio:</strong><br>${body.message}</p>
      `,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
