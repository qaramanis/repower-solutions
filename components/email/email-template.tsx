import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  contents: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  contents,
}) => (
  <div>
    <h1>Welcome, {fullName}!</h1>
    <h2>This is an email sent by {email}</h2>
    <h3>The message is: {contents}</h3>
  </div>
);
