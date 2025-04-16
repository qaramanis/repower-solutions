"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import FooterNav from "@/components/footer/footer";
import Contact from "../home/contact/contact";
import PageTransition from "../page-transition";
import BackButton from "./back-button";

export default function AnakainiseisPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [toService, setToService] = useState(true);

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
    <PageTransition toService={toService}>
      <div className="relative min-h-screen bg-white">
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-[70%] mx-auto relative">
          <BackButton />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              >
                Ανακαινίσεις στη Θεσσαλονίκη
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.1,
                }}
              >
                Ολοκληρωμένες Λύσεις για Κατοικίες & Επαγγελματικούς Χώρους
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.2,
                }}
              >
                <Separator className="mb-8" />
              </motion.div>

              <motion.div
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.3,
                }}
              >
                <p className="text-lg md:text-xl mb-4">
                  Αναζητάτε αξιόπιστη εταιρεία για ανακαινίσεις στη Θεσσαλονίκη;
                  Είτε πρόκειται για την ανακαίνιση της κατοικίας σας, την
                  αναδιαμόρφωση του επαγγελματικού σας χώρου ή την αισθητική και
                  λειτουργική αναβάθμιση ενός ακινήτου προς πώληση ή ενοικίαση,
                  η ομάδα μας είναι δίπλα σας με ολοκληρωμένες λύσεις.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Η τεχνική κατασκευαστική μας εταιρεία, με έδρα τη Θεσσαλονίκη,
                  διαθέτει εξειδικευμένους μηχανικούς, αρχιτέκτονες και
                  τεχνικούς, που αναλαμβάνουν κάθε έργο ανακαίνισης σπιτιού ή
                  επαγγελματικού χώρου από τη μελέτη μέχρι την παράδοση.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.4,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1634586648651-f1fb9ec10d90?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ανακαινίσεις"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-amber-100">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Τι σας προσφέρουμε
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-green-600 mr-2 text-3xl">✓</span>
                  Ολική ή μερική ανακαίνιση
                </h3>
                <p className="text-lg">
                  Αναλαμβάνουμε την ολική ή μερική ανακαίνιση εσωτερικών και
                  εξωτερικών χώρων, με σεβασμό στις ανάγκες και το budget του
                  έργου σας.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.1,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-green-600 mr-2 text-3xl">✓</span>
                  Διαμόρφωση εσωτερικών χώρων
                </h3>
                <p className="text-lg">
                  Εξειδικευόμαστε στη διαμόρφωση κουζίνας, μπάνιου, υπνοδωματίων
                  και σαλονιού, προσφέροντας λειτουργικές και αισθητικά άρτιες
                  λύσεις.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.2,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-green-600 mr-2 text-3xl">✓</span>
                  Εξειδικευμένες λύσεις
                </h3>
                <p className="text-lg">
                  Παρέχουμε εξειδικευμένες λύσεις για ανακαίνιση Airbnb ή
                  ακινήτων προς πώληση, με στόχο τη μεγιστοποίηση της αξίας και
                  της ελκυστικότητάς τους.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.3,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-green-600 mr-2 text-3xl">✓</span>
                  Αρχιτεκτονικός σχεδιασμός
                </h3>
                <p className="text-lg">
                  Προσφέρουμε αρχιτεκτονικό σχεδιασμό με έμφαση στη
                  λειτουργικότητα και την αισθητική, ώστε να αξιοποιήσετε στο
                  μέγιστο τον διαθέσιμο χώρο.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Η Διαδικασία Ανακαίνισης
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Αξιολόγηση Χώρου</h3>
                <p>
                  Αρχική επίσκεψη και αξιολόγηση του χώρου για προσδιορισμό των
                  αναγκών και των δυνατοτήτων.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.1,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Σχεδιασμός</h3>
                <p>
                  Αρχιτεκτονικός σχεδιασμός και πρόταση που συνδυάζει αισθητική,
                  λειτουργικότητα και προϋπολογισμό.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.2,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Κατασκευή</h3>
                <p>
                  Εκτέλεση των εργασιών ανακαίνισης με έμπειρο συνεργείο και
                  υλικά υψηλής ποιότητας.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.3,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Παράδοση</h3>
                <p>
                  Τελικός έλεγχος ποιότητας και παράδοση του χώρου έτοιμου προς
                  χρήση.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-amber-100">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Οφέλη Επαγγελματικής Ανακαίνισης
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4">Αύξηση Αξίας</h3>
                <p className="text-lg">
                  Η επαγγελματική ανακαίνιση αυξάνει σημαντικά την αξία πώλησης
                  ή μίσθωσης του ακινήτου σας.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.1,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Εξοικονόμηση Ενέργειας
                </h3>
                <p className="text-lg">
                  Σύγχρονες λύσεις και υλικά που συμβάλλουν στην ενεργειακή
                  αναβάθμιση και εξοικονόμηση πόρων μακροπρόθεσμα.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.2,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Βελτίωση Ποιότητας Ζωής
                </h3>
                <p className="text-lg">
                  Λειτουργικοί και αισθητικά αναβαθμισμένοι χώροι που προσφέρουν
                  καλύτερη ποιότητα καθημερινής ζωής.
                </p>
              </motion.div>
            </div>
          </div>
        </section> */}

        <Contact />
        <FooterNav />
      </div>
    </PageTransition>
  );
}
