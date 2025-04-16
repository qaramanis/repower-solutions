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
  Coffee,
  Store,
  Dumbbell,
  Building,
  Hotel,
  Utensils,
  Activity,
  FileSearch,
} from "lucide-react";

export default function AdeiesLeitourgiasPage() {
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
                Εκδοση Αδειας Λειτουργίας
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
                Νόμιμη και Αμεση Εναρξη της Επιχείρησής σας
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
                  Στη RePower Solutions, εξειδικευόμαστε στην έκδοση άδειας
                  λειτουργίας για επιχειρήσεις στη Θεσσαλονίκη, αναλαμβάνοντας
                  όλη τη διαδικασία από το μηδέν μέχρι την τελική έγκριση.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Με γνώση της νομοθεσίας, των τοπικών ιδιαιτεροτήτων και με
                  πολυετή εμπειρία στον χώρο των κατασκευών και των
                  αδειοδοτήσεων, εξασφαλίζουμε έγκυρα, γρήγορα και χωρίς
                  ταλαιπωρία την αδειοδότηση της επιχείρησής σας.
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
                src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Άδειες Λειτουργίας"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-purple-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ποιες Επιχειρήσεις Απαιτούν Αδεια Λειτουργίας;
            </h2>

            {/* First grid with 3 cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Utensils className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Καταστήματα Υγειονομικού Ενδιαφέροντος
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Εστιατόρια, ταβέρνες</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Καφέ, μπαρ</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Αρτοποιεία, ζαχαροπλαστεία</span>
                  </li>
                </ul>
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
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Dumbbell className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Χώροι Άθλησης & Ευεξίας
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Γυμναστήρια</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Κέντρα ευεξίας</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Χώροι άθλησης</span>
                  </li>
                </ul>
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
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Hotel className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Τουριστικά Καταλύματα
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Ξενοδοχεία</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Ενοικιαζόμενα δωμάτια</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>AirBnB</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Second grid with 4 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
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
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Store className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Εμπορικά Καταστήματα
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Σούπερ μάρκετ</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Καταστήματα λιανικής</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Εμπορικά κέντρα</span>
                  </li>
                </ul>
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
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Building className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Βιοτεχνίες & Εργαστήρια
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Βιοτεχνικές μονάδες</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Εργαστήρια παραγωγής</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Συνεργεία</span>
                  </li>
                </ul>
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
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Activity className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Ιατρικοί Χώροι</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Ιατρεία</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Διαγνωστικά κέντρα</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Φυσικοθεραπευτήρια</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.6,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Ινστιτούτα Αισθητικής
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Κομμωτήρια</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Ινστιτούτα αισθητικής</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-purple-500 mt-1 mr-2"
                      size={16}
                    />
                    <span>Κέντρα περιποίησης νυχιών</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.6,
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg">
                Εάν δεν είστε σίγουροι αν χρειάζεστε άδεια λειτουργίας,
                επικοινωνήστε μαζί μας για άμεση καθοδήγηση.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
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
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <FileSearch className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">Έλεγχος Νομιμότητας</h3>
                </div>
                <p className="text-lg">
                  Έλεγχος νομιμότητας χώρου και χρήσης γης, διερεύνηση
                  πολεοδομικών θεμάτων και νομοθετικών περιορισμών.
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
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <FileText className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Σύνταξη & Υποβολή Φακέλου
                  </h3>
                </div>
                <p className="text-lg">
                  Σύνταξη και υποβολή φακέλου στην αρμόδια αρχή, με όλα τα
                  απαραίτητα δικαιολογητικά και τεχνικές εκθέσεις.
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
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <svg
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Πιστοποιητικά & Εγκρίσεις
                  </h3>
                </div>
                <p className="text-lg">
                  Έκδοση πιστοποιητικών πυρασφάλειας, υγειονομικής
                  καταλληλότητας και άλλων απαραίτητων εγκρίσεων.
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
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <ClipboardCheck className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Διαχείριση & Παρακολούθηση
                  </h3>
                </div>
                <p className="text-lg">
                  Διαχείριση επικοινωνίας με αρμόδιους φορείς (Δήμο,
                  Πυροσβεστική, ΕΦΕΤ κλπ.) και παρακολούθηση του φακέλου έως την
                  έκδοση της άδειας.
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
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 15l-5 5-5-5m10-5l-5 5-5-5m10-5l-5 5-5-5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">
                  Πιστοποιητικά Πυρασφάλειας & Υγειονομικής Καταλληλότητας
                </h3>
              </div>
              <p className="text-lg">
                Σύνταξη μελετών πυρασφάλειας, έκδοση πιστοποιητικών
                πυροπροστασίας και υγειονομικής καταλληλότητας για τη νόμιμη
                λειτουργία της επιχείρησής σας. Διαχείριση επικοινωνίας με την
                Πυροσβεστική και τις υγειονομικές υπηρεσίες.
              </p>
            </motion.div>
          </div>
        </section>

        {/* <section className="py-16 px-4 md:px-8 bg-purple-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Η Διαδικασία Έκδοσης Άδειας Λειτουργίας
            </h2>

            <div className="grid md:grid-cols-5 gap-6 mt-12">
              <div className="hidden md:block"></div>
              <motion.div
                className="md:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="relative">
                  <div className="absolute left-4 top-0 w-0.5 h-full bg-purple-200 hidden md:block"></div>

                  <div className="mb-12 flex">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 z-10">
                      <span className="text-xl font-bold text-purple-700">
                        1
                      </span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        Αρχική Συμβουλευτική
                      </h3>
                      <p className="text-lg">
                        Συνάντηση για αναγνώριση των αναγκών και των απαιτήσεων
                        της επιχείρησής σας. Έλεγχος της καταλληλότητας του
                        χώρου και προσδιορισμός των απαιτούμενων εγκρίσεων.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12 flex">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 z-10">
                      <span className="text-xl font-bold text-purple-700">
                        2
                      </span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        Προετοιμασία Φακέλου
                      </h3>
                      <p className="text-lg">
                        Σύνταξη όλων των απαραίτητων μελετών και συλλογή των
                        απαιτούμενων δικαιολογητικών. Προετοιμασία των τεχνικών
                        εκθέσεων και διαγραμμάτων.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12 flex">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 z-10">
                      <span className="text-xl font-bold text-purple-700">
                        3
                      </span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        Υποβολή & Διαχείριση
                      </h3>
                      <p className="text-lg">
                        Υποβολή του φακέλου στις αρμόδιες αρχές και διαχείριση
                        της επικοινωνίας με όλους τους εμπλεκόμενους φορείς.
                        Παρακολούθηση της διαδικασίας και διεκπεραίωση
                        αιτημάτων.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 z-10">
                      <span className="text-xl font-bold text-purple-700">
                        4
                      </span>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        Έκδοση Άδειας & Παράδοση
                      </h3>
                      <p className="text-lg">
                        Παραλαβή της άδειας λειτουργίας και παράδοση στον πελάτη
                        μαζί με όλα τα σχετικά έγγραφα. Παροχή οδηγιών για τη
                        νόμιμη λειτουργία και μελλοντικές υποχρεώσεις.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="hidden md:block"></div>
            </div>
          </div>
        </section> */}

        <section className="py-16 px-4 md:px-8 bg-purple-50">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Γιατί να Επιλέξετε την RePower Solutions;
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="inline-flex justify-center items-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Εδρα στη Θεσσαλονίκη
                </h3>
                <p>
                  Με έδρα τη Θεσσαλονίκη, έχουμε άριστη γνώση των τοπικών
                  υπηρεσιών και φορέων.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600"
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
                  Αμεση και αξιόπιστη έκδοση
                </h3>
                <p>
                  Επιταχύνουμε τις διαδικασίες και ελαχιστοποιούμε την αναμονή
                  και τη γραφειοκρατία.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600"
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
                  Ολοκληρωμένη υποστήριξη
                </h3>
                <p>
                  Υποστήριξη από μηχανικούς όλων των ειδικοτήτων που
                  συνεργάζονται άψογα.
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
                <div className="inline-flex justify-center items-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-600"
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
                <h3 className="text-xl font-semibold mb-2">
                  Διαφάνεια & προσιτές τιμές
                </h3>
                <p>
                  Ξεκάθαρη κοστολόγηση χωρίς κρυφές χρεώσεις και ανταγωνιστικές
                  τιμές.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 px-4 md:px-8 bg-purple-50">
          <div className="max-w-[70%] mx-auto">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Ξεκινήστε τη Λειτουργία της Επιχείρησής σας Σήμερα
              </h2>

              <p className="text-lg text-center mb-8">
                Αναλαμβάνουμε την ευθύνη της αδειοδότησης, για να εστιάσετε στην
                επιτυχία της επιχείρησής σας.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-600"
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
                  <h3 className="font-semibold mb-1">Καλέστε μας</h3>
                  <p>Για δωρεάν αρχική συμβουλευτική</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-600"
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
                  <p>Στείλτε μας τις απαιτήσεις σας</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex justify-center items-center w-16 h-16 bg-purple-100 rounded-full mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Δωρεάν Προσφορά</h3>
                  <p>Λάβετε προσφορά εντός 24 ωρών</p>
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
