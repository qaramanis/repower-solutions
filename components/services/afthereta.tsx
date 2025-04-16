"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import FooterNav from "@/components/footer/footer";
import Contact from "../home/contact/contact";
import PageTransition from "../page-transition";
import BackButton from "./back-button";
import {
  Building,
  FileText,
  ClipboardCheck,
  CheckCircle,
  Home,
  Calculator,
  BarChart4,
  Clock,
} from "lucide-react";

export default function AftheretaPage() {
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
                Τακτοποίηση Αυθαιρέτων
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
                Νόμιμη Ρύθμιση Αυθαίρετων Κατασκευών & Χρήσεων από
                Εξειδικευμένους Μηχανικούς
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
                  Αναλαμβάνουμε υπεύθυνα και με απόλυτη νομιμότητα τη διαδικασία
                  τακτοποίησης αυθαιρέτων για ιδιώτες, επαγγελματίες και
                  επιχειρήσεις.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Η τακτοποίηση αυθαιρέτων είναι απαραίτητη για τη μεταβίβαση
                  ακινήτων, την έκδοση οικοδομικών αδειών, την αδειοδότηση
                  επιχειρήσεων ή τη νομιμοποίηση αλλαγών που έχουν γίνει χωρίς
                  άδεια.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Αναλαμβάνουμε εξολοκλήρου τη διαδικασία, με αξιοπιστία και
                  πλήρη συμμόρφωση με τον Ν.4495/2017 και τις πρόσφατες
                  τροποποιήσεις.
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
                src="https://images.unsplash.com/photo-1730473313094-dc277964d872?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Τακτοποίηση Αυθαιρέτων"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-blue-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Τι περιλαμβάνει η Τακτοποίηση Αυθαιρέτου;
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex items-center mb-4">
                  <Building className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Αυτοψία στο χώρο</h3>
                </div>
                <p className="text-lg">
                  Αυτοψία στον χώρο από εξειδικευμένο μηχανικό, εξέταση των
                  αυθαίρετων κατασκευών και συλλογή των απαραίτητων στοιχείων.
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
                <div className="flex items-center mb-4">
                  <ClipboardCheck className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Καταγραφή & αποτύπωση
                  </h3>
                </div>
                <p className="text-lg">
                  Καταγραφή και αποτύπωση των αυθαίρετων κατασκευών ή χρήσεων,
                  μετρήσεις και τεκμηρίωση των παραβάσεων.
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
                <div className="flex items-center mb-4">
                  <FileText className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Έλεγχος</h3>
                </div>
                <p className="text-lg">
                  Έλεγχος επιλεξιμότητας υπαγωγής στον νόμο Ν.4495/2017
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
                <div className="flex items-center mb-4">
                  <FileText className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Σύνταξη σχεδίων & εκθέσεων
                  </h3>
                </div>
                <p className="text-lg">
                  Σύνταξη αρχιτεκτονικών σχεδίων και τεχνικών εκθέσεων που
                  τεκμηριώνουν τις αυθαίρετες κατασκευές.
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
                <div className="flex items-center mb-4">
                  <BarChart4 className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Υποβολή & ολοκλήρωση
                  </h3>
                </div>
                <p className="text-lg">
                  Υποβολή φακέλου στο σύστημα ΤΕΕ e-Αυθαίρετα οριστική υπαγωγή
                  και έκδοση βεβαίωσης τακτοποίησης.
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
                <div className="flex items-center mb-4">
                  <BarChart4 className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Υπολογισμός Προστίμων
                  </h3>
                </div>
                <p className="text-lg">
                  Υπολογισμός προστίμων και δόσεων απαραίτητα για την τελική
                  τακτοποίηση
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ποια Αυθαίρετα Μπορούν να Τακτοποιηθούν;
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Building className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Υπερβάσεις Δόμησης - Κάλυψης - Ύψους
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Επιπλέον χώροι κύριας χρήσης</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Αυθαίρετες προσθήκες</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Υπέρβαση επιτρεπόμενου ύψους</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.1,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Home className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Προσθήκες & βοηθητικοί χώροι
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Ημιυπαίθριοι χώροι</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Σοφίτες, pilotis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Αποθήκες, στέγαστρα</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.2,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Αλλαγές χρήσης
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Από κατοικία σε κατάστημα</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Βοηθητικοί σε κύριους χώρους</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Επαγγελματικοί χώροι</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="bg-blue-50 p-6 rounded-lg shadow-md mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.3,
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg">
                Αν έχετε απορίες για την περίπτωσή σας, επικοινωνήστε μαζί μας
                για δωρεάν προέλεγχο.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-blue-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Γιατί να Επιλέξετε την RePower Solutions
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Έδρα στη Θεσσαλονίκη
                </h3>
                <p>
                  Γνώση τοπικών πολεοδομικών δεδομένων και άμεση επικοινωνία με
                  τις αρμόδιες υπηρεσίες.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Clock className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Άμεση εξυπηρέτηση
                </h3>
                <p>
                  Άμεση εξυπηρέτηση και παρακολούθηση κάθε φακέλου μέχρι την
                  ολοκλήρωσή του.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Έμπειροι μηχανικοί
                </h3>
                <p>
                  Ομάδα έμπειρων μηχανικών όλων των ειδικοτήτων για την κάλυψη
                  κάθε τεχνικής απαίτησης.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Calculator className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Σαφής κοστολόγηση
                </h3>
                <p>
                  Σαφής κοστολόγηση και αναλυτικός υπολογισμός προστίμων πριν
                  την υπαγωγή χωρίς κρυφές χρεώσεις.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Νόμιμες Λύσεις για Αυθαίρετες Κατασκευές
              </h2>

              <p className="text-lg text-center mb-6">
                Η RePower Solutions σας προσφέρει νόμιμες και αξιόπιστες λύσεις
                για την τακτοποίηση των αυθαίρετων κατασκευών σας.
              </p>

              <div className="text-center mb-4">
                <p className="text-lg font-medium">
                  Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε την περίπτωσή
                  σας και να λάβετε προσφορά!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Contact />
        <FooterNav />
      </div>
    </PageTransition>
  );
}
