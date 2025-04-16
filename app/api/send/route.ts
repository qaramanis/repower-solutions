import { EmailTemplate } from "@/components/email/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { fullName, email, phone, contents } = await request.json();

    if (!fullName || !email || !contents) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Repower Solutions <onboarding@resend.dev>",
      to: ["info.repowersolutions@gmail.com"],
      subject: `Μήνυμα από: ${fullName}`,
      react: await EmailTemplate({
        fullName,
        email,
        phone,
        content: contents,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
