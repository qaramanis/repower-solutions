"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Παρακαλώ συμπληρώστε όλα τα πεδία");
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
          fullName: formData.name,
          email: formData.email,
          contents: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full min-h-[90vh] bg-transparent text-black py-20"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-6xl font-bold mb-8">Επικοινωνία</h2>
          <p className="text-2xl max-w-3xl">
            Επικοινωνήστε μαζί μας για να αξιολογήσουμε τις ανάγκες του έργου
            σας και να σας προτείνουμε την καλύτερη λύση!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.h3
              className="text-3xl font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{
                duration: 1.5,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.2,
              }}
            >
              Στοιχεία Επικοινωνίας
            </motion.h3>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{
                duration: 1.5,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.3,
              }}
            >
              <Phone size={24} />
              <div>
                <h4 className="text-xl font-medium">Τηλέφωνο</h4>
                <p className="text-lg">gr +30 694 856 8652</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{
                duration: 1.5,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.4,
              }}
            >
              <Mail size={24} />
              <div>
                <h4 className="text-xl font-medium">Email</h4>
                <p className="text-lg">info.repowersolutions@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{
                duration: 1.5,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.5,
              }}
            >
              <MapPin size={24} className="mt-1" />
              <div>
                <h4 className="text-xl font-medium">Διεύθυνση</h4>
                <p className="text-lg">Θεσσαλονίκης 4, Πυλαία 55535</p>
              </div>
            </motion.div>
          </div>

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
              <label htmlFor="name" className="text-lg font-medium">
                Ονοματεπώνυμο
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-white/90 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-white/90 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
              <label htmlFor="message" className="text-lg font-medium">
                Μήνυμα
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-white/90 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                <p className="mt-3 text-green-600">
                  Το μήνυμά σας εστάλη επιτυχώς!
                </p>
              )}

              {submitStatus === "error" && (
                <p className="mt-3 text-red-600">
                  Υπήρξε πρόβλημα. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε με
                  κάποιον άλλον τρόπο
                </p>
              )}
            </motion.div>
          </form>
        </div>
        {/* Map Section - Added below the contact form and contact info
        <motion.div
          className="w-full mt-16 p-6 "
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.8 }}
        >
          <div className="w-full h-96 md:h-[450px] rounded-lg overflow-hidden shadow-lg border-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.9537859966735!2d22.992945!3d40.576935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838fcf146b0b5%3A0x5acf8dbea98eba56!2zzpjOtc-Dz4POsc67zr_Ovc6vzrrOt8-CIDA0LCDOoM-FzrvOsc6vzrEgNTU1IDM1!5e0!3m2!1sel!2sgr!4v1711644855414!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div> */}
      </div>
      {/* Map Section - Added below the contact form and contact info */}
      <motion.div
        className="w-full mt-16 p-6 "
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.8 }}
      >
        <div className="w-full h-96 md:h-[450px] rounded-lg overflow-hidden shadow-lg border-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.9537859966735!2d22.992945!3d40.576935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838fcf146b0b5%3A0x5acf8dbea98eba56!2zzpjOtc-Dz4POsc67zr_Ovc6vzrrOt8-CIDA0LCDOoM-FzrvOsc6vzrEgNTU1IDM1!5e0!3m2!1sel!2sgr!4v1711644855414!5m2!1sel!2sgr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
