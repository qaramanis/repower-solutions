import { EmailTemplate } from "@/components/email/email-template";
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullName, email, contents } = req.body;

    // Validate inputs
    if (!fullName || !email || !contents) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { data, error } = await resend.emails.send({
      from: "Repower Solutions <apostkaram@gmail.com>", // Update this with your verified sender
      to: ["apostkaram@gmail.com"], // Update with your destination email
      subject: `Νέο μήνυμα από ${fullName}`,
      react: typeof EmailTemplate({
        fullName,
        email,
        contents,
      }),
    });

    if (error) {
      console.error("Email sending error:", error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
