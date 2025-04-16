"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import FooterNav from "@/components/footer/footer";
import Contact from "../home/contact/contact";
import PageTransition from "../page-transition";
import BackButton from "./back-button";
import {
  Flame,
  FileCheck,
  ClipboardCheck,
  FileText,
  Building,
  Store,
  Hotel,
  Coffee,
  Home,
  Dumbbell,
} from "lucide-react";

export default function MeletesPyrasfaleiasPage() {
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
                Μελέτες Πυρασφάλειας
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
                Έγκυρες, Εγκεκριμένες Μελέτες από Εξειδικευμένους Μηχανικούς
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
                  Η RePower Solutions, τεχνική και κατασκευαστική εταιρεία με έδρα τη Θεσσαλονίκη, παρέχει ολοκληρωμένες υπηρεσίες μελέτης και έκδοσης πιστοποιητικών πυρασφάλειας για επαγγελματικούς και ιδιωτικούς χώρους.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Η μελέτη πυρασφάλειας αποτελεί υποχρεωτικό έγγραφο για τη νόμιμη λειτουργία πολλών επιχειρήσεων, αλλά και απαραίτητο στοιχείο για την έκδοση άδειας λειτουργίας.
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
                src="https://images.unsplash.com/photo-1583683402528-8b6e3002ffda?q=80&w=1320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Μελέτες Πυρασφάλειας"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-red-100">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Τι είναι η Μελέτη Πυρασφάλειας;
            </h2>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg mb-6">
                Η μελέτη πυρασφάλειας είναι ένα τεχνικό έγγραφο που περιγράφει τα μέτρα και τα μέσα πυροπροστασίας ενός κτιρίου (ενεργητικά & παθητικά) σύμφωνα με τον Κανονισμό Πυροπροστασίας και την κείμενη νομοθεσία. Η έγκρισή της γίνεται από την Πυροσβεστική Υπηρεσία και είναι προαπαιτούμενο για:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-red-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-red-600"
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
                    <span>Έκδοση Άδειας Λειτουργίας</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-red-600"
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
                    <span>Αδειοδότηση Καταστημάτων Υγειονομικού Ενδιαφέροντος</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-red-600"
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
                    <span>Νομιμοποιήσεις — Τακτοποιήσεις Χώρων</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-red-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-red-600"
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
                    <span>Κοινόχρηστους Χώρους Πολυκατοικιών</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-red-600"
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
                    <span>Ξενοδοχεία, AirBnB, Ενοικιαζόμενα</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 p-1 rounded-full mr-3">
                      <svg
                        className="w-4 h-4 text-red-600"
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
                    <span>Επαγγελματικούς και Βιομηχανικούς χώρους</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Η Διαδικασία που Ακολουθούμε
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
                  <Building className="text-red-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Αυτοψία του Χώρου</h3>
                </div>
                <p className="text-lg">
                  Πραγματοποιούμε αυτοψία του χώρου, συλλέγουμε στοιχεία και αξιολογούμε τις ανάγκες πυροπροστασίας με βάση τη χρήση και το μέγεθος του χώρου.
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
                  <FileText className="text-red-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Σύνταξη Μελέτης</h3>
                </div>
                <p className="text-lg">
                  Σύνταξη μελέτης πυροπροστασίας σύμφωνα με τις ισχύουσες προδιαγραφές, καθορισμός ενεργητικών και παθητικών μέτρων πυροπροστασίας.
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
                  <Flame className="text-red-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Σχεδίαση Κατόψεων</h3>
                </div>
                <p className="text-lg">
                  Σχεδίαση κατόψεων με πυροσβεστικά μέσα, εξόδους κινδύνου και όλα τα απαραίτητα στοιχεία για τη μελέτη πυρασφάλειας.
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
                  <ClipboardCheck className="text-red-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Κατάθεση & Έγκριση</h3>
                </div>
                <p className="text-lg">
                  Κατάθεση του φακέλου στην Πυροσβεστική Υπηρεσία, παρακολούθηση της διαδικασίας και διεκπεραίωση έως την έκδοση του πιστοποιητικού.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-red-100">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Επιχειρήσεις που μας εμπιστεύονται
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Coffee className="text-red-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Εστιατόρια, Καφέ, Bar
                  </h3>
                </div>
                <p className="text-center">
                  Ολοκληρωμένες μελέτες για χώρους εστίασης και διασκέδασης σύμφωνα με τις ειδικές προδιαγραφές.
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
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Store className="text-red-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Super Market, Μίνι Μάρκετ
                  </h3>
                </div>
                <p className="text-center">
                  Εξειδικευμένες μελέτες πυρασφάλειας για χώρους λιανικής πώλησης με υψηλές απαιτήσεις ασφαλείας.
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
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Hotel className="text-red-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Ξενοδοχεία & Τουριστικά Καταλύματα
                  </h3>
                </div>
                <p className="text-center">
                  Ολοκληρωμένες μελέτες πυρασφάλειας για ξενοδοχεία και τουριστικά καταλύματα όλων των κατηγοριών.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
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
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Building className="text-red-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Αποθήκες, Εργαστήρια, Βιοτεχνίες
                  </h3>
                </div>
                <p className="text-center">
                  Εξειδικευμένες μελέτες για επαγγελματικούς χώρους με ιδιαίτερες απαιτήσεις πυρασφάλειας.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
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
                  <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Dumbbell className="text-red-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Γυμναστήρια & Χώροι Ευεξίας
                  </h3>
                </div>
                <p className="text-center">
                  Μελέτες πυρασφάλειας για χώρους άθλησης και ευεξίας με εξειδικευμένα συστήματα πυροπροστασίας.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.5,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Home className="text-red-600" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Πολυκατοικίες
                  </h3>
                </div>
                <p className="text-center">
                  Πιστοποιητικό πυρασφάλειας κοινοχρήστων χώρων πολυκατοικιών και κτιρίων κατοικιών.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <FileCheck className="text-red-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Πιστοποιημένοι Μηχανικοί
                </h3>
                <p>
                  Διαθέτουμε πιστοποιημένους, διπλωματούχους μηχανικούς με εμπειρία στις μελέτες πυρασφάλειας.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600"
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
                  Γνώση Τοπικής Πυροσβεστικής
                </h3>
                <p>
                  Άριστη γνώση της Πυροσβεστικής Θεσσαλονίκης και των απαιτήσεων για γρήγορη έγκριση.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Γρήγορη και αξιόπιστη έκδοση
                </h3>
                <p>
                  Ταχύτατη διεκπεραίωση και έκδοση του πιστοποιητικού πυρασφάλειας χωρίς καθυστερήσεις.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Ολοκληρωμένες τεχνικές λύσεις
                </h3>
                <p>
                  Παρέχουμε τόσο τη μελέτη όσο και τη δυνατότητα προμήθειας και εγκατάστασης μέσων πυρόσβεσης.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-red-100">
          <div className="max-w-[70%] mx-auto">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Ζητήστε Μελέτη Πυρασφάλειας
              </h3>

              <p className="text-lg text-center mb-6">
                Αναλαμβάνουμε τη μελέτη πυρασφάλειας για κάθε επιχείρηση και κτίριο
              </p>
              <p className="text-lg text-center mb-6">
              , εξασφαλίζοντας την πλήρη συμμόρφωση με τις απαιτήσεις της Πυροσβεστικής Υπηρεσίας.</p>

              <div className="text-center mt-6">
                <p className="text-lg font-medium">
                  Επικοινωνήστε μαζί μας σήμερα και λάβετε προσφορά για τη μελέτη πυρασφάλειας του χώρου σας!
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