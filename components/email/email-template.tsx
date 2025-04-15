import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  content: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  content,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
    }}
  >
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "#4361ee",
          padding: "20px",
          textAlign: "center" as const,
        }}
      >
        <h2
          style={{
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          Νέο Μήνυμα
        </h2>
      </div>

      <div style={{ padding: "24px" }}>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333333",
            marginBottom: "16px",
          }}
        >
          Ο/Η {fullName} σας έστειλε μήνυμα:
        </h3>

        <div
          style={{
            backgroundColor: "#f5f7ff",
            borderLeft: "4px solid #4361ee",
            padding: "16px",
            marginBottom: "24px",
            borderRadius: "4px",
          }}
        >
          <p
            style={{
              color: "#4a4a4a",
              margin: "0",
              lineHeight: "1.6",
            }}
          >
            {content}
          </p>
        </div>

        <div
          style={{
            borderTop: "1px solid #e0e0e0",
            paddingTop: "16px",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#4361ee",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="Email Icon"
              width="20"
              height="20"
              style={{ marginRight: "8px" }}
            />
            <span style={{ fontWeight: "500" }}>{email}</span>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "16px 24px",
          borderTop: "1px solid #e0e0e0",
          textAlign: "center" as const,
          fontSize: "14px",
          color: "#666666",
        }}
      >
        <p style={{ margin: "0" }}>
          Ημερομηνία: {new Date().toLocaleDateString("el-GR")}
        </p>
      </div>
    </div>
  </div>
);
