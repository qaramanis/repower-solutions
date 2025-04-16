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
  FileCheck,
  Clock,
  Upload,
  Database,
} from "lucide-react";

export default function HlektronikTaytothtaPage() {
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
                Ηλεκτρονική Ταυτότητα Κτιρίου στη Θεσσαλονίκη
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
                Άμεση Έκδοση Ηλεκτρονικής Ταυτότητας για Ακίνητα κάθε τύπου
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
                  Η RePower Solutions, τεχνική και κατασκευαστική εταιρεία με
                  έδρα τη Θεσσαλονίκη, προσφέρει ολοκληρωμένες υπηρεσίες για την
                  έκδοση Ηλεκτρονικής Ταυτότητας Κτιρίου ή Αυτοτελούς Διηρημένης
                  Ιδιοκτησίας, όπως ορίζει η σύγχρονη πολεοδομική νομοθεσία.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Η Ηλεκτρονική Ταυτότητα Κτιρίου αποτελεί υποχρεωτικό έγγραφο
                  για μεταβίβαση ακινήτου, καθώς και για νομικές ή τεχνικές
                  διαδικασίες που αφορούν το ακίνητο (όπως τακτοποίηση
                  αυθαιρέτων, έκδοση οικοδομικής άδειας, ενεργειακή αναβάθμιση
                  κ.ά.).
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
                src="https://images.unsplash.com/vector-1739805925567-c19c8860e69d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ηλεκτρονική Ταυτότητα Κτιρίου"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-indigo-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Τι είναι η Ηλεκτρονική Ταυτότητα Κτιρίου;
            </h2>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg mb-6">
                Η Ηλεκτρονική Ταυτότητα είναι ένας ψηφιακός φάκελος που
                καταχωρίζεται στο σύστημα του ΤΕΕ και περιλαμβάνει όλα τα βασικά
                στοιχεία του ακινήτου:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-indigo-600"
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
                    <span>Οικοδομική Άδεια</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-indigo-600"
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
                    <span>Κατόψεις και Σχέδια του Κτιρίου</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-indigo-600"
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
                    <span>
                      Βεβαιώσεις Τακτοποίησης Αυθαιρέτων (αν υπάρχουν)
                    </span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-indigo-600"
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
                    <span>Ενεργειακό Πιστοποιητικό (ΠΕΑ)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-indigo-600"
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
                    <span>Πίνακας Χιλιοστών και Κανονισμός Πολυκατοικίας</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-indigo-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-indigo-600"
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
                    <span>Στοιχεία ΔΕΗ (ηλεκτρολογικό σχέδιο κ.ά.)</span>
                  </li>
                </ul>
              </div>

              <p className="mt-6 text-indigo-700">
                Η σύνταξή της γίνεται αποκλειστικά από διπλωματούχο μηχανικό και
                απαιτείται σε κάθε νέα μεταβίβαση από 1η Ιανουαρίου 2021 και
                εξής.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Πότε Είναι Υποχρεωτική;
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-indigo-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Building className="text-indigo-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Αγοραπωλησία Ακινήτου
                  </h3>
                </div>
                <p className="text-center">
                  Απαιτείται για κάθε αγοραπωλησία ακινήτου, διασφαλίζοντας τη
                  διαφάνεια στη μεταβίβαση.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-indigo-100"
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
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Κληρονομιές — Γονικές Παροχές
                  </h3>
                </div>
                <p className="text-center">
                  Απαραίτητη για την ομαλή μεταβίβαση ακινήτων μέσω κληρονομιάς
                  ή γονικής παροχής.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-indigo-100"
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
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FileText className="text-indigo-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Έκδοση Οικοδομικής Άδειας
                  </h3>
                </div>
                <p className="text-center">
                  Προαπαιτούμενο για την έκδοση νέας οικοδομικής άδειας ή άδειας
                  προσθήκης/μετατροπής.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-indigo-100"
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
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <FileText className="text-indigo-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Έλεγχος Νομιμότητας
                  </h3>
                </div>
                <p className="text-center">
                  Πρέπει να υπάρχει ώστε να μπορεί να διεξαθεί ενιαίος έλεγχος
                  νομιμότητας κτιρίου
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-indigo-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.3,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Home className="text-indigo-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Ρύθμιση / Τακτοποίηση Αυθαιρέτων
                  </h3>
                </div>
                <p className="text-center">
                  Απαραίτητη για τη διαδικασία τακτοποίησης αυθαίρετων
                  κατασκευών και χρήσεων.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-indigo-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.4,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Συμμετοχή σε προγράμματα «Εξοικονομώ»
                  </h3>
                </div>
                <p className="text-center">
                  Προαπαιτούμενο για την ένταξη σε προγράμματα επιδοτήσεων
                  ενεργειακής αναβάθμισης.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-indigo-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Η Διαδικασία Έκδοσης με τη RePower Solutions
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
                  <Building className="text-indigo-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Αυτοψία & Έλεγχος</h3>
                </div>
                <p className="text-lg">
                  Αυτοψία στο ακίνητο και έλεγχος νομιμότητας κτιρίου,
                  εντοπισμός τυχόν αυθαιρεσιών και πλήρης έλεγχος των
                  υφιστάμενων εγγράφων.
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
                  <Database className="text-indigo-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Συγκέντρωση Εγγράφων
                  </h3>
                </div>
                <p className="text-lg">
                  Συγκέντρωση και ψηφιοποίηση των απαραίτητων εγγράφων, όπως
                  άδειες, σχέδια, βεβαιώσεις, πιστοποιητικά και κάθε σχετικό
                  έγγραφο.
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
                  <FileText className="text-indigo-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Σύνταξη Φακέλου</h3>
                </div>
                <p className="text-lg">
                  Σύνταξη του φακέλου Ηλεκτρονικής Ταυτότητας Κτιρίου με όλες
                  τις απαραίτητες τεχνικές λεπτομέρειες και υποστηρικτικά
                  έγγραφα.
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
                  <Upload className="text-indigo-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Υποβολή & Έκδοση</h3>
                </div>
                <p className="text-lg">
                  Υποβολή στο ΤΕΕ από διπλωματούχο μηχανικό και έκδοση της
                  βεβαίωσης Ηλεκτρονικής Ταυτότητας Ιδιοκτησίας.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.4,
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-lg text-center font-medium">
                  Αναλαμβάνουμε και περιπτώσεις χωρίς πλήρη φάκελο ή με
                  πολεοδομικές παραβάσεις, δίνοντάς σας λύση με τακτοποίηση
                  αυθαιρέτων πριν την υποβολή.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Γιατί να μας Επιλέξετε
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="inline-flex justify-center items-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600"
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
                  Έμπειρη ομάδα μηχανικών
                </h3>
                <p>
                  Διαθέτουμε εξειδικευμένους μηχανικούς στη Θεσσαλονίκη με
                  εμπειρία στην έκδοση Ηλεκτρονικής Ταυτότητας Κτιρίου.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <ClipboardCheck className="text-indigo-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Πλήρης διαχείριση φακέλου
                </h3>
                <p>
                  Αναλαμβάνουμε την πλήρη διαχείριση του φακέλου χωρίς
                  καθυστερήσεις και περιττή γραφειοκρατία.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <Clock className="text-indigo-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Άμεση έκδοση</h3>
                <p>
                  Έκδοση σε 3-5 εργάσιμες ημέρες όπου υπάρχει πληρότητα
                  στοιχείων και νομιμότητα κατασκευής.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Προσιτό κόστος</h3>
                <p>
                  Ανταγωνιστικές τιμές με ξεκάθαρη κοστολόγηση χωρίς κρυφές
                  χρεώσεις για όλες τις υπηρεσίες μας.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-indigo-50">
          <div className="max-w-[70%] mx-auto">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Συνδυαστικά πακέτα με επιπλέον υπηρεσίες
              </h3>

              <p className="text-lg mb-6">
                Η RePower Solutions προσφέρει συνδυαστικά πακέτα υπηρεσιών για
                πλήρη κάλυψη των αναγκών του ακινήτου σας:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">
                    Ηλεκτρονική Ταυτότητα + Τακτοποίηση αυθαιρέτων
                  </h4>
                  <p>
                    Ολοκληρωμένη τακτοποίηση τυχόν αυθαίρετων κατασκευών και
                    έκδοση της Ηλεκτρονικής Ταυτότητας με ενιαία διαδικασία.
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">
                    Ηλεκτρονική Ταυτότητα + Ενεργειακό Πιστοποιητικό (ΠΕΑ)
                  </h4>
                  <p>
                    Συνδυαστική έκδοση Ηλεκτρονικής Ταυτότητας και Ενεργειακού
                    Πιστοποιητικού με προνομιακές τιμές.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-lg font-medium">
                  Επικοινωνήστε μαζί μας σήμερα για να λάβετε προσφορά για την
                  έκδοση της Ηλεκτρονικής Ταυτότητας του ακινήτου σας!
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
