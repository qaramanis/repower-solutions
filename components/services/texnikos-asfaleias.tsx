"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import FooterNav from "@/components/footer/footer";
import Contact from "../home/contact/contact";
import PageTransition from "../page-transition";
import BackButton from "./back-button";
import {
  HardHat,
  AlertCircle,
  ClipboardCheck,
  Book,
  Users,
  Building,
  Factory,
  School,
} from "lucide-react";

export default function TexnikosAsfaleiasPage() {
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
                Τεχνικός Ασφαλείας στη Θεσσαλονίκη
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
                Υποστήριξη για Επιχειρήσεις
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
                  Ο Τεχνικός Ασφαλείας αποτελεί βασικό σύμμαχο κάθε επιχείρησης
                  για τη διασφάλιση της ασφάλειας και υγείας στον χώρο εργασίας.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Η ομάδα μας, με έδρα τη Θεσσαλονίκη, προσφέρει αξιόπιστες
                  συμβουλευτικές και υποστηρικτικές υπηρεσίες σε μικρές και
                  μεγάλες επιχειρήσεις, ανεξαρτήτως κλάδου.
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
                src="/images/texnikos-asfaleias.jpg"
                alt="Τεχνικός Ασφαλείας"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-yellow-100">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Αρμοδιότητες Τεχνικού Ασφαλείας
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
                  <ClipboardCheck className="text-yellow-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Συμβουλευτικός ρόλος
                  </h3>
                </div>
                <p className="text-lg">
                  Συμβουλεύει την επιχείρηση για ασφαλείς συνθήκες εργασίας,
                  προτείνοντας μέτρα και διαδικασίες που διασφαλίζουν την υγεία
                  και ασφάλεια των εργαζομένων.
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
                  <AlertCircle className="text-red-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Εντοπισμός κινδύνων
                  </h3>
                </div>
                <p className="text-lg">
                  Εντοπίζει πιθανούς κινδύνους στον εργασιακό χώρο και προτείνει
                  μέτρα πρόληψης για την αποφυγή ατυχημάτων και επαγγελματικών
                  ασθενειών.
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
                  <Book className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">Έλεγχος νομοθεσίας</h3>
                </div>
                <p className="text-lg">
                  Ελέγχει την εφαρμογή της εργατικής νομοθεσίας σχετικά με την
                  υγεία και την ασφάλεια, εξασφαλίζοντας τη συμμόρφωση της
                  επιχείρησης με τις νομικές της υποχρεώσεις.
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
                  <Users className="text-green-600 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Εκπαίδευση προσωπικού
                  </h3>
                </div>
                <p className="text-lg">
                  Εκπαιδεύει τους εργαζομένους σε θέματα προστασίας και
                  ασφάλειας, ώστε να αναγνωρίζουν τους κινδύνους και να
                  εφαρμόζουν τα κατάλληλα μέτρα προστασίας.
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
              <p className="text-lg font-medium text-center">
                Η παρουσία του είναι υποχρεωτική για όλες τις επιχειρήσεις που
                απασχολούν τουλάχιστον έναν εργαζόμενο.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Κατηγορίες Επικινδυνότητας Επιχειρήσεων
            </h2>

            <p className="text-lg mb-8">
              Η διάρκεια και ένταση απασχόλησης του τεχνικού ασφαλείας εξαρτάται
              από την κατηγορία επικινδυνότητας της επιχείρησης:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">A</span>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Κατηγορία A : Υψηλή Επικινδυνότητα
                  </h3>
                </div>
                <p className="mb-4">Περιλαμβάνει:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Factory className="text-gray-600 mr-2" size={18} />
                    <span>Ορυχεία, λατομεία</span>
                  </li>
                  <li className="flex items-center">
                    <Factory className="text-gray-600 mr-2" size={18} />
                    <span>Βιομηχανίες με επικίνδυνα υλικά</span>
                  </li>
                </ul>
                <p className="mt-4 text-red-700">
                  Απαιτούνται συχνές παρεμβάσεις και αυστηρά μέτρα ασφαλείας
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500"
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
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <span className="text-orange-600 font-bold">B</span>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Κατηγορία B : Μέση Επικινδυνότητα
                  </h3>
                </div>
                <p className="mb-4">Περιλαμβάνει:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Factory className="text-gray-600 mr-2" size={18} />
                    <span>Βιομηχανίες τροφίμων</span>
                  </li>
                  <li className="flex items-center">
                    <Building className="text-gray-600 mr-2" size={18} />
                    <span>Βιοτεχνίες, αλιεία</span>
                  </li>
                </ul>
                <p className="mt-4 text-orange-700">
                  Χρειάζεται τακτική παρακολούθηση και συμμόρφωση
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500"
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
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">Γ</span>
                  </div>
                  <h3 className="text-xl font-semibold">
                    Κατηγορία Γ : Χαμηλή Επικινδυνότητα
                  </h3>
                </div>
                <p className="mb-4">Περιλαμβάνει:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Building className="text-gray-600 mr-2" size={18} />
                    <span>Ξενοδοχεία</span>
                  </li>
                  <li className="flex items-center">
                    <School className="text-gray-600 mr-2" size={18} />
                    <span>Εκπαιδευτικά ιδρύματα</span>
                  </li>
                  <li className="flex items-center">
                    <Building className="text-gray-600 mr-2" size={18} />
                    <span>Εμπορικά καταστήματα</span>
                  </li>
                </ul>
                <p className="mt-4 text-green-700">
                  Κυρίως συμβουλευτικός ρόλος, εστίαση στη βελτίωση των συνθηκών
                  εργασίας
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-yellow-100 p-6 rounded-lg shadow-md mt-8"
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
                Αν μια επιχείρηση εντάσσεται σε περισσότερες κατηγορίες, ισχύει
                η υψηλότερη επικινδυνότητα ή η κύρια δραστηριότητά της. Για
                αμφιβολίες, συνιστούμε επικοινωνία με αρμόδια Υπηρεσία ή το
                γραφείο μας.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-yellow-100">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ποιοι Οφείλουν να Διαθέτουν Τεχνικό Ασφαλείας;
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="text-yellow-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Όλες οι επιχειρήσεις με έστω έναν εργαζόμενο
                </h3>
                <p className="text-center">
                  Ανεξάρτητα από το μέγεθος, κάθε επιχείρηση με τουλάχιστον έναν
                  εργαζόμενο οφείλει να διαθέτει τεχνικό ασφαλείας.
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
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck className="text-yellow-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Ανεξαρτήτως αντικειμένου ή νομικής μορφής
                </h3>
                <p className="text-center">
                  Η υποχρέωση ισχύει για όλους τους κλάδους και όλες τις νομικές
                  μορφές επιχειρήσεων, από ατομικές επιχειρήσεις μέχρι ανώνυμες
                  εταιρείες.
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
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardHat className="text-yellow-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Διαφορετικές απαιτήσεις ανά επικινδυνότητα
                </h3>
                <p className="text-center">
                  Ο χρόνος απασχόλησης και οι ειδικές απαιτήσεις διαφέρουν
                  ανάλογα με την κατηγορία επικινδυνότητας της επιχείρησης.
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
                delay: 0.3,
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg text-center">
                Η συνεργασία με εξειδικευμένο τεχνικό ασφαλείας αποτελεί όχι
                μόνο νομική υποχρέωση αλλά και επένδυση στην πρόληψη και
                προστασία.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Τεχνικό Γραφείο στη Θεσσαλονίκη
            </h2>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md border border-yellow-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg mb-6">
                Το γραφείο μας βρίσκεται στο κέντρο της Θεσσαλονίκης και
                προσφέρει άμεση εξυπηρέτηση σε όλο τον νομό. Είμαστε δίπλα σας
                για:
              </p>

              <ul className="list-none space-y-4 mt-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <span className="text-lg">
                    Εκτίμηση αναγκών και κατηγοριοποίηση επικινδυνότητας
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <span className="text-lg">
                    Ανάθεση τεχνικού ασφαλείας βάσει προδιαγραφών
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <span className="text-lg">
                    Συνεργασία με γιατρό εργασίας (όπου απαιτείται)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <span className="text-lg">
                    Υλοποίηση όλων των νομικών υποχρεώσεων
                  </span>
                </li>
              </ul>

              <div className="bg-yellow-100 p-4 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-3">
                  Επικοινωνήστε Μαζί Μας
                </h3>
                <p className="text-lg">
                  Για περαιτέρω πληροφορίες σχετικά με τη διαδικασία ανάθεσης
                  καθηκόντων τεχνικού ασφαλείας της επιχείρησής σας,
                  συμβουλευτείτε το τεχνικό μας γραφείο που βρίσκεται στο κέντρο
                  της Θεσσαλονίκης.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          className="py-16 px-4 md:px-8 bg-yellow-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Γιατί να επιλέξετε τη RePower Solutions;
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Πιστοποιημένοι Σύμβουλοι</h4>
                      <p className="text-gray-700">
                        Διαθέτουμε πιστοποιημένους συμβούλους με υψηλό επίπεδο
                        τεχνικής κατάρτισης και εμπειρίας στον τομέα της
                        ασφάλειας.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Εξατομικευμένη Προσέγγιση</h4>
                      <p className="text-gray-700">
                        Κάθε επιχείρηση έχει διαφορετικές ανάγκες -
                        προσαρμόζουμε τις υπηρεσίες μας στις ιδιαιτερότητες κάθε
                        επιχείρησης.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Συμμόρφωση με τη Νομοθεσία
                      </h4>
                      <p className="text-gray-700">
                        Παρακολουθούμε συνεχώς τις αλλαγές στη νομοθεσία και
                        εξασφαλίζουμε την πλήρη συμμόρφωση της επιχείρησής σας.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Ολοκληρωμένες Λύσεις</h4>
                      <p className="text-gray-700">
                        Προσφέρουμε ολοκληρωμένες λύσεις που περιλαμβάνουν
                        εκτίμηση κινδύνου, εκπαίδευση προσωπικού και συνεχή
                        παρακολούθηση.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <Contact />
        <FooterNav />
      </div>
    </PageTransition>
  );
}
