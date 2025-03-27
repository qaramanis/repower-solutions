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
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <h1
      style={{
        color: "#77B254",
        borderBottom: "1px solid #eee",
        paddingBottom: "10px",
      }}
    >
      Νέα επικοινωνία από τον ιστότοπο
    </h1>

    <div style={{ marginBottom: "20px" }}>
      <h2 style={{ fontSize: "16px", color: "#333" }}>
        Στοιχεία επικοινωνίας:
      </h2>
      <p>
        <strong>Όνομα:</strong> {fullName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>

    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "15px",
        borderRadius: "4px",
      }}
    >
      <h2 style={{ fontSize: "16px", color: "#333", marginTop: "0" }}>
        Μήνυμα:
      </h2>
      <p style={{ whiteSpace: "pre-wrap" }}>{contents}</p>
    </div>

    <div
      style={{
        marginTop: "30px",
        fontSize: "12px",
        color: "#666",
        borderTop: "1px solid #eee",
        paddingTop: "10px",
      }}
    >
      <p>
        Αυτό το email στάλθηκε από τη φόρμα επικοινωνίας στον ιστότοπο της
        Repower Solutions.
      </p>
    </div>
  </div>
);
