import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadEmail(
    name: string,
    email: string,
    source: string
) {
    const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "fluxopayofc@gmail.com",
        subject: "Novo Lead Recebido",
        html: `
            <h1>Novo Lead</h1>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Fonte:</strong> ${source}</p>
        `
    });

    if (error) {
        throw error;
    }

    return data;
}