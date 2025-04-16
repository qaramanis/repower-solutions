"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  isVisible: boolean;
}

export default function ContactForm({ isVisible }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.content) {
      alert("Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          contents: formData.content,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ fullName: "", email: "", phone: "", content: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: 20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.3,
        }}
      >
        <label htmlFor="fullName" className="text-lg font-medium">
          Ονοματεπώνυμο<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 bg-white/90 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </motion.div>

      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: 20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.4,
        }}
      >
        <label htmlFor="email" className="text-lg font-medium">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-white/90 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </motion.div>

      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: 20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.45,
        }}
      >
        <label htmlFor="phone" className="text-lg font-medium">
          Τηλέφωνο
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 bg-white/90 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </motion.div>

      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: 20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.5,
        }}
      >
        <label htmlFor="content" className="text-lg font-medium">
          Μήνυμα<span className="text-red-500">*</span>
        </label>
        <textarea
          id="content"
          rows={5}
          value={formData.content}
          onChange={handleChange}
          className="w-full p-3 bg-white/90 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        ></textarea>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.6,
        }}
      >
        <Button
          type="submit"
          className="px-8 py-2.5 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Αποστολή..." : "Αποστολή"}
        </Button>

        {submitStatus === "success" && (
          <p className="mt-3 text-green-600">Το μήνυμά σας εστάλη επιτυχώς!</p>
        )}

        {submitStatus === "error" && (
          <p className="mt-3 text-red-600">
            Υπήρξε πρόβλημα. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε με κάποιον
            άλλον τρόπο
          </p>
        )}
      </motion.div>
    </form>
  );
}
