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

    const { name, number, email, rodo } = REQUEST_BODY;

    try {
        if (!name) throw new Error("Imię i nazwisko jest wymagane");
        if (!number) throw new Error("Numer telefonu jest wymagany");
        if (!email) throw new Error("Adres email jest wymagany");
        if (!rodo) throw new Error("Zgoda RODO jest wymagana");

        const MESSAGE = `
      <h1>Nowy kontakt z formularza</h1>
      <p><strong>Imię i nazwisko:</strong> ${name}</p>
      <p><strong>Numer telefonu:</strong> ${number}</p>
      <p><strong>Adres email:</strong> ${email}</p>
      <p><strong>Akceptacja Regulaminu:</strong> ${rodo}</p>
    `;

        const SEND_EMAIL = await transporter.sendMail({
            from: "Admin <kontakt@kredyteo.info>",
            to: "it.jakub.wojtysiak@gmail.com",
            subject: "Nowy kontakt z formularza",
            html: MESSAGE,
        });

        return new Response(JSON.stringify({ success: "Wiadomośćw wysłana poprawnie" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
}
