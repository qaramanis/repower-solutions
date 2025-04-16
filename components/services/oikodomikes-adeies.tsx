"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import FooterNav from "@/components/footer/footer";
import Contact from "../home/contact/contact";
import PageTransition from "../page-transition";
import BackButton from "./back-button";
import {
  ClipboardCheck,
  FileText,
  CheckCircle,
  Building,
  Home,
  Factory,
  BarChart4,
  ClipboardList,
} from "lucide-react";

export default function OikodomikesAdeiesPage() {
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
                Εκδοση Οικοδομικής Αδειας
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
                Ολοκληρωμένη Διαχείριση Οικοδομικών Αδειών από Μηχανικούς με
                Εμπειρία
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
                  Στη RePower Solutions, αναλαμβάνουμε την πλήρη διαδικασία
                  έκδοσης οικοδομικής άδειας στη Θεσσαλονίκη και σε όλη την
                  Ελλάδα, με συνέπεια, διαφάνεια και τεχνική αρτιότητα.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Η έκδοση οικοδομικής άδειας είναι το πρώτο και πιο κρίσιμο
                  βήμα για κάθε κατασκευαστικό έργο — από μια νέα κατοικία μέχρι
                  επαγγελματικά και βιομηχανικά ακίνητα. Με την εμπειρία μας
                  στον τεχνικό και κατασκευαστικό τομέα, εξασφαλίζουμε γρήγορη
                  και ορθή διεκπεραίωση, χωρίς καθυστερήσεις ή λάθη.
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
                src="https://images.unsplash.com/photo-1660594161043-28b49b363632?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Οικοδομικές Άδειες"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-indigo-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Τι περιλαμβάνει η Υπηρεσία μας:
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
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <ClipboardCheck className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Προέλεγχος Δομήσιμου
                  </h3>
                </div>
                <p className="text-lg">
                  Διερεύνηση των όρων δόμησης και των πολεοδομικών περιορισμών
                  που ισχύουν για το ακίνητό σας, ώστε να γνωρίζετε εκ των
                  προτέρων τις δυνατότητες αξιοποίησής του.
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
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <FileText className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Τοπογραφικά & Αρχιτεκτονικά Σχέδια
                  </h3>
                </div>
                <p className="text-lg">
                  Εκπόνηση τοπογραφικών διαγραμμάτων και αρχιτεκτονικών σχεδίων
                  από έμπειρους μηχανικούς, σύμφωνα με τις προδιαγραφές της
                  νομοθεσίας.
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
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <BarChart4 className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Μελέτες</h3>
                </div>
                <p className="text-lg">
                  Εκπόνηση όλων των απαραίτητων μελετών (Στατική, Η/Μ,
                  Ενεργειακή, Παθητική Πυροπροστασία) που απαιτούνται για την
                  έκδοση της οικοδομικής άδειας.
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
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <ClipboardList className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Υποβολή & Διαχείριση
                  </h3>
                </div>
                <p className="text-lg">
                  Υποβολή του φακέλου στο e-Άδειες του ΤΕΕ, συντονισμός με τις
                  Υπηρεσίες Δόμησης (ΥΔΟΜ) και παρακολούθηση της διαδικασίας
                  μέχρι την τελική έγκριση.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.4,
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg font-medium">
                Όλα τα βήματα αναλαμβάνονται από διπλωματούχους μηχανικούς, μέλη
                ΤΕΕ, με εξειδίκευση στον πολεοδομικό σχεδιασμό και τη νομοθεσία.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Τύποι Οικοδομικών Αδειών που εκδίδουμε
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-indigo-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Home className="text-indigo-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Άδεια Δόμησης για Κατοικίες
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Μονοκατοικίες</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Πολυκατοικίες</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Κτήρια κατοικιών</span>
                  </li>
                </ul>
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
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Building className="text-indigo-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Άδειες για Επαγγελματικούς Χώρους
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Καταστήματα</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Γραφεία</span>
                  </li>
                </ul>
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
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <Factory className="text-indigo-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Άδειες Βιομηχανικών Εγκαταστάσεων
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Βιομηχανικά κτίρια</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Αποθήκες</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Παραγωγικές μονάδες</span>
                  </li>
                </ul>
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
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
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
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Πρόσθετες Εργασίες
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Ανακαινίσεις</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Προσθήκες</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Αλλαγή χρήσης</span>
                  </li>
                </ul>
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
                  <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mb-3">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    Τακτοποιήσεις & Νομιμοποιήσεις
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Τακτοποιήσεις Αυθαιρέτων</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Νομιμοποιήσεις</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                    <span>Ενημέρωση φακέλου αδείας</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-indigo-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Γιατί RePower Solutions;
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
                  Άριστη γνώση της τοπικής πολεοδομίας και άμεση επικοινωνία με
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Πλήρης τεχνική κάλυψη
                </h3>
                <p>
                  Υποστήριξη από την ιδέα έως την υλοποίηση, με ολοκληρωμένες
                  μελέτες και διαχείριση.
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Εξειδικευμένοι συνεργάτες
                </h3>
                <p>
                  Συντονισμός με αρχιτέκτονες, πολιτικούς μηχανικούς και άλλους
                  επαγγελματίες για ολοκληρωμένες λύσεις.
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Υψηλή ταχύτητα έκδοσης
                </h3>
                <p>
                  Γρήγορη διεκπεραίωση της διαδικασίας και ανταγωνιστικές τιμές
                  για κάθε τύπο άδειας.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg border border-indigo-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Ενδιαφέρεστε για Έκδοση Οικοδομικής Άδειας;
              </h2>

              <div className="text-center mb-8">
                <p className="text-lg">
                  Η RePower Solutions είναι δίπλα σας σε κάθε βήμα της
                  διαδικασίας.
                </p>
                <p className="text-lg mt-2 font-medium">
                  Η άδειά σας, το πρώτο βήμα για την κατασκευή που ονειρεύεστε.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-indigo-100 rounded-full mb-3">
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
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Τηλεφωνική Επικοινωνία</h3>
                  <p>Καλέστε μας για μια αρχική συζήτηση</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-indigo-100 rounded-full mb-3">
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
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p>Στείλτε μας τις λεπτομέρειες του έργου σας</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-indigo-100 rounded-full mb-3">
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
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">
                    Προγραμματισμός Συνάντησης
                  </h3>
                  <p>Κλείστε ένα ραντεβού στο γραφείο μας</p>
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
