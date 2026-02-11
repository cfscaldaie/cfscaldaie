
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Verifica reCAPTCHA
    const recaptchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${body.recaptchaToken}`,
      }
    ).then((r) => r.json());

    if (!recaptchaRes.success) {
      return new Response("Invalid reCAPTCHA", { status: 400 });
    }

    // 2. INVIO EMAIL CON RESEND
    const { data, error } = await resend.emails.send({
      from: `Sito Web <${process.env.MAIL_FROM}>`,  
      to: process.env.MAIL_TO!,
      subject: "Nuovo messaggio dal form di contatto",
      html: `
        <h2>Hai ricevuto un nuovo messaggio</h2>
        <p><strong>Nome:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Messaggio:</strong><br>${body.message}</p>
      `,
    });

    if (error) {
      console.error(error);
      return new Response("Error sending email", { status: 500 });
    }

    return Response.json({ success: true });

  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
