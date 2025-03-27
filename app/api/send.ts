import { EmailTemplate } from "@/components/email/email-template";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <apostkaram@gmail.com>",
    to: ["apostkaram@gmail.com"],
    subject: "Hello world",
    react: typeof EmailTemplate({
      fullName: "John Doe",
      email: "apostkaram@gmail.com",
      contents: "John Does message",
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
