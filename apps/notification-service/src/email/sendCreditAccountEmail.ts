import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendGiftAccountEmail = async (
  to: string,
  creditCode: string,
  type: string,
  originalCredits: number,
  amount: number,
  expiresAt: string
) => {
  const readableDate = new Date(expiresAt).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  await resend.emails.send({
    from: "Gavekort <onboarding@resend.dev>",
    to,
    subject: "Tak for din bestilling – her er dit gavekort",
    html: `
        <h2>Her er dit gavekort</h2>
        <p><strong>Kreditkode:</strong> ${creditCode}</p>
        <p><strong>Kreditter:</strong> ${originalCredits}</p>
        <p><strong>Beløb:</strong> ${amount} kr.</p>
        <p><strong>Gyldig til:</strong> ${readableDate}</p>
        <p>Brug kreditkoden under betaling.</p>
      `,
  });
};

export const sendPrepaidAccountEmail = async (
  to: string,
  creditCode: string,
  type: string,
  originalCredits: number,
  amount: number,
  treatmentCount: number,
  expiresAt: string
) => {
  const readableDate = new Date(expiresAt).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  await resend.emails.send({
    from: "Gavekort <onboarding@resend.dev>",
    to,
    subject: "Tak for din bestilling – her er dit klippekort",
    html: `
          <h2>Her er dit klippekort</h2>
          <p><strong>Kreditkode:</strong> ${creditCode}</p>
          <p><strong>Kreditter:</strong> ${originalCredits}</p>
          <p><strong>Beløb:</strong> ${amount} kr.</p>
          <p><strong>Gyldig til:</strong> ${readableDate}</p>
          <p>Brug kreditkoden under betaling.</p>
        `,
  });
};
