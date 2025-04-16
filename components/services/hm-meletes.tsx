"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import FooterNav from "@/components/footer/footer";
import Contact from "../home/contact/contact";
import PageTransition from "../page-transition";
import BackButton from "./back-button";
import {
  Zap,
  Gauge,
  Wrench,
  Lightbulb,
  Droplets,
  Fan,
  Flame,
  GanttChartSquare,
} from "lucide-react";

export default function HmMeletesPage() {
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
                Ηλεκτρομηχανολογικές Μελέτες (Η/Μ)
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
                Ολοκληρωμένες Τεχνικές Μελέτες στη Θεσσαλονίκη
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
                  Η εταιρεία μας, με έδρα τη Θεσσαλονίκη, εξειδικεύεται στην
                  εκπόνηση Ηλεκτρομηχανολογικών Μελετών (Η/Μ) για κάθε τύπο
                  κτιριακής ή βιομηχανικής εγκατάστασης.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Στόχος μας είναι η παροχή ολοκληρωμένων, κατασκευαστικά και
                  ενεργειακά βέλτιστων λύσεων, προσαρμοσμένων στις ανάγκες κάθε
                  έργου.
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
                src="/images/hm-meletes.jpg"
                alt="Ηλεκτρομηχανολογικές Μελέτες"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-blue-50">
          <div className="max-w-[70%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: false, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Γιατί να μας επιλέξετε
              </h2>
              <p className="text-xl max-w-3xl mx-auto">
                Οι μελέτες εκπονούνται από διπλωματούχους μηχανικούς με πολυετή
                εμπειρία σε ένα ευρύ φάσμα Η/Μ έργων. Παρέχουμε:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <GanttChartSquare className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Μελέτες εφαρμογής</h3>
                </div>
                <p className="text-lg">
                  Ολοκληρωμένες μελέτες εφαρμογής που περιλαμβάνουν λεπτομερή
                  σχέδια και τεχνικές προδιαγραφές για την άρτια υλοποίηση του
                  έργου.
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
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Προμελέτες</h3>
                </div>
                <p className="text-lg">
                  Αξιολόγηση των αναγκών του έργου και σχεδιασμός των βασικών
                  παραμέτρων πριν την τελική μελέτη εφαρμογής.
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
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Αποτυπώσεις</h3>
                </div>
                <p className="text-lg">
                  Ακριβείς αποτυπώσεις υφιστάμενων εγκαταστάσεων για την
                  καλύτερη αποτύπωση της υπάρχουσας κατάστασης.
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
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Οικονομοτεχνικές μελέτες
                  </h3>
                </div>
                <p className="text-lg">
                  Υποστήριξη σε οικονομοτεχνικές προσφορές για διαχείριση και
                  ανάληψη έργων με βέλτιστο οικονομικό αποτέλεσμα.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Κατηγορίες Ηλεκτρομηχανολογικών Μελετών
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Zap className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Ηλεκτρολογικές Μελέτες
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Ισχυρά Ρεύματα</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Ασθενή Ρεύματα</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Φωτισμός, κίνηση, πίνακες</span>
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
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Gauge className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Μελέτη Υποσταθμών
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Υποσταθμοί Μέσης Τάσης</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Ηλεκτρικά πεδία</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Ηλεκτροπαραγωγά ζεύγη</span>
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
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Droplets className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Υδραυλικές Μελέτες
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Ύδρευση - Αποχέτευση</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Όμβρια ύδατα</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Πυρόσβεση</span>
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
                  delay: 0.3,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Flame className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Φυσικό Αέριο
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Οικιακές εγκαταστάσεις</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Επαγγελματικές εγκαταστάσεις</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Βιομηχανικές εφαρμογές</span>
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
                  delay: 0.4,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Fan className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Μελέτες Κλιματισμού
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Οικιακός κλιματισμός</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Επαγγελματικά συστήματα (VRV)</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Βιομηχανικά συστήματα</span>
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
                  delay: 0.5,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Lightbulb className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Ηλιοθερμικά Συστήματα
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Θερμικά ηλιακά</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Φωτοβολταικά συστήματα</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Υβριδικά συστήματα</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 px-4 md:px-8 bg-blue-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Η Διαδικασία Συνεργασίας
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Αρχική Συνάντηση</h3>
                <p>
                  Συζήτηση για τις ανάγκες και απαιτήσεις του έργου σας και
                  καταγραφή των βασικών παραμέτρων.
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
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Προμελέτη & Προσφορά
                </h3>
                <p>
                  Σύνταξη προμελέτης και οικονομικής προσφοράς με βάση τις
                  προδιαγραφές του έργου.
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
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Εκπόνηση Μελέτης</h3>
                <p>
                  Σχεδιασμός και εκπόνηση της πλήρους μελέτης με όλες τις
                  τεχνικές λεπτομέρειες.
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
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-700">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Παράδοση & Υποστήριξη
                </h3>
                <p>
                  Παράδοση της μελέτης και συνεχής υποστήριξη κατά την υλοποίηση
                  του έργου.
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
              <h2 className="text-3xl font-bold mb-6 text-center">
                Επικοινωνήστε Μαζί Μας
              </h2>
              <p className="text-lg text-center mb-8">
                Εάν αναζητάτε αξιόπιστο συνεργάτη για Η/Μ μελέτες στη
                Θεσσαλονίκη, είμαστε εδώ για να σας προσφέρουμε λύσεις υψηλής
                ποιότητας, με συνέπεια και επαγγελματισμό.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-3">
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
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Τηλεφωνική Επικοινωνία</h3>
                  <p>Άμεση ανταπόκριση στις ερωτήσεις σας</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-3">
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
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p>Αποστολή αναλυτικού αιτήματος</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-blue-100 rounded-full mb-3">
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
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Επίσκεψη στο Γραφείο</h3>
                  <p>Συνάντηση με τους μηχανικούς μας</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section> */}

        <Contact />
        <FooterNav />
      </div>
    </PageTransition>
  );
}
