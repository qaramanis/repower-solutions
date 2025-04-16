"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import FooterNav from "@/components/footer/footer";
import Contact from "../home/contact/contact";
import PageTransition from "../page-transition";
import BackButton from "./back-button";
import {
  Badge,
  ClipboardList,
  BarChart4,
  House,
  Building,
  ActivitySquare,
  Clock,
  FileCheck,
} from "lucide-react";

export default function PistopoihtikoPage() {
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
                Πιστοποιητικό Ενεργειακής Απόδοσης (ΠΕΑ)
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
                Ενεργειακός Επιθεωρητής Θεσσαλονίκη
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
                  Το Πιστοποιητικό Ενεργειακής Απόδοσης (ΠΕΑ) είναι το επίσημο
                  έγγραφο που αξιολογεί την ενεργειακή κατανάλωση ενός ακινήτου
                  και το κατατάσσει σε ενεργειακή κατηγορία, από Α+ (υψηλή
                  απόδοση) έως Η (χαμηλή απόδοση).
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Παράλληλα, περιλαμβάνει προτάσεις ενεργειακής αναβάθμισης για
                  μείωση της κατανάλωσης και εξοικονόμηση κόστους.αποτελώντας
                  την ενεργειακή ταυτότητα κάθε κτιρίου.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Αποτελεί την ενεργειακή ταυτότητα κάθε κτιρίου και η έκδοσή
                  του είναι υποχρεωτική σε πολλές περιπτώσεις.
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
                src="/images/pistopoihtiko.jpg"
                alt="Πιστοποιητικό Ενεργειακής Απόδοσης"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-emerald-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Πότε είναι Υποχρεωτικό το ΠΕΑ;
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
                  <House className="text-emerald-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Αγοραπωλησία ακινήτου
                  </h3>
                </div>
                <p className="text-lg">
                  Κατά την αγοραπωλησία διαμερίσματος, μονοκατοικίας ή κτιρίου,
                  οι συμβολαιογράφοι απαιτούν το ΠΕΑ ως συνημμένο έγγραφο στο
                  συμβόλαιο.
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
                  <Building className="text-emerald-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Νέα μίσθωση</h3>
                </div>
                <p className="text-lg">
                  Για κάθε νέα μίσθωση κατοικίας ή επαγγελματικού χώρου, ο
                  αριθμός ΠΕΑ πρέπει να καταχωρείται υποχρεωτικά στο μισθωτήριο.
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
                  <ActivitySquare className="text-emerald-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Ενεργειακή αναβάθμιση
                  </h3>
                </div>
                <p className="text-lg">
                  Μετά την ολοκλήρωση εργασιών ενεργειακής αναβάθμισης,
                  απαιτείται έκδοση νέου Πιστοποιητικού Ενεργειακής Απόδοσης.
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
                  <BarChart4 className="text-emerald-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Προγράμματα επιδότησης
                  </h3>
                </div>
                <p className="text-lg">
                  Για συμμετοχή σε προγράμματα όπως το "Εξοικονομώ", το ΠΕΑ
                  είναι απαραίτητο τόσο πριν όσο και μετά τις παρεμβάσεις.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Τι Προσφέρει το ΠΕΑ;
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-emerald-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardList className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Αναλυτική αξιολόγηση
                </h3>
                <p className="text-center">
                  Λεπτομερής αξιολόγηση της ενεργειακής κατάστασης του ακινήτου
                  σας.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-emerald-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.1,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Badge className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Ενεργειακή κατάταξη
                </h3>
                <p className="text-center">
                  Κατάταξη του ακινήτου σε ενεργειακή κατηγορία από Α+ έως Η.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-emerald-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.2,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart4 className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Προτάσεις αναβάθμισης
                </h3>
                <p className="text-center">
                  Συστάσεις για ενεργειακή αναβάθμιση με εκτίμηση κόστους και
                  οφέλους.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-emerald-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.3,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Νομική κάλυψη
                </h3>
                <p className="text-center">
                  Εξασφάλιση νομικής κάλυψης για αγοραπωλησίες, μισθώσεις και
                  προγράμματα επιδότησης.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-emerald-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ενεργειακός Επιθεωρητής στη Θεσσαλονίκη
            </h2>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg mb-6">
                Η εταιρεία μας, με έδρα τη Θεσσαλονίκη, παρέχει υπηρεσίες
                έκδοσης ΠΕΑ από πιστοποιημένο ενεργειακό επιθεωρητή, με
                αξιοπιστία και ταχύτητα.
              </p>

              <div className="grid md:grid-cols-4 gap-6 my-8">
                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-emerald-100 rounded-full mb-3">
                    <Clock className="text-emerald-600" size={32} />
                  </div>
                  <h3 className="font-medium text-lg mb-1">
                    Άμεση εξυπηρέτηση
                  </h3>
                  <p className="text-gray-700">
                    Έκδοση ΠΕΑ εντός 1-2 εργάσιμων ημερών
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-emerald-100 rounded-full mb-3">
                    <svg
                      className="w-8 h-8 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-lg mb-1">
                    Ανταγωνιστικές τιμές
                  </h3>
                  <p className="text-gray-700">
                    Οικονομικές λύσεις χωρίς κρυφές χρεώσεις
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-emerald-100 rounded-full mb-3">
                    <svg
                      className="w-8 h-8 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-lg mb-1">
                    Πιστοποιημένοι Μηχανικοί
                  </h3>
                  <p className="text-gray-700">
                    Έκδοση από διαπιστευμένους ενεργειακούς επιθεωρητές
                  </p>
                </div>

                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-emerald-100 rounded-full mb-3">
                    <svg
                      className="w-8 h-8 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-lg mb-1">
                    Εξυπηρέτηση πανελλαδικά
                  </h3>
                  <p className="text-gray-700">
                    Κάλυψη αναγκών σε όλη την Ελλάδα
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-3">
                  Διαδικασία Έκδοσης ΠΕΑ
                </h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-lg">
                      Επικοινωνία και προγραμματισμός αυτοψίας στο ακίνητο
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-lg">
                      Επίσκεψη στο ακίνητο και συλλογή των απαραίτητων στοιχείων
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-lg">
                      Επεξεργασία δεδομένων και ενεργειακή ανάλυση
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-emerald-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-lg">
                      Έκδοση και παράδοση του Πιστοποιητικού Ενεργειακής
                      Απόδοσης
                    </p>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <p className="text-lg font-medium text-emerald-700">
                  Επικοινωνήστε μαζί μας σήμερα για έκδοση ή ανανέωση
                  Πιστοποιητικού Ενεργειακής Απόδοσης εύκολα και χωρίς
                  καθυστερήσεις!
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
