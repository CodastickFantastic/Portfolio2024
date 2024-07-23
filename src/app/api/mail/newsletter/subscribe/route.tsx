"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export async function POST(request: Request) {
    const REQUEST_BODY = await request.json();

    const { email } = REQUEST_BODY;

    try {
        if (!email) throw new Error("Adres email jest wymagany");

        const MESSAGE = `
            <h1>Nowa Osoba w Newsletter - IT Jakub Wojtysiak</h1>
            <p><strong>Adres email:</strong> ${email}</p>
        `;

        const SEND_EMAIL = await transporter.sendMail({
            from: "Admin <admin@jakubwojtysiak.online>",
            to: "it.jakub.wojtysiak@gmail.com",
            subject: "Newsletter - IT Jakub Wojtysiak",
            html: MESSAGE,
        });

        return new Response(JSON.stringify({ success: "Wiadomośćw wysłana poprawnie" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: unknown) {
        if (typeof err === "string") {
            throw new Error(err);
        } else if (err instanceof Error) {
            return new Response(JSON.stringify({ error: err.message }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
    }
}
