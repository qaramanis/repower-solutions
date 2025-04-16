"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import FooterNav from "@/components/footer/footer";
import Contact from "../home/contact/contact";
import PageTransition from "../page-transition";
import BackButton from "./back-button";
import {
  Thermometer,
  DollarSign,
  Wrench,
  Leaf,
  Snowflake,
  Zap,
  Droplets,
  Shield,
} from "lucide-react";

export default function AntliesThermothtasPage() {
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
                Αντλίες Θερμότητας στη Θεσσαλονίκη
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
                Οικονομική & Αποδοτική Λύση για Θέρμανση και Ψύξη
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
                  Αναζητάτε μια αποδοτική και οικονομική λύση για τη θέρμανση
                  και την ψύξη του χώρου σας; Η αντλία θερμότητας είναι η
                  ιδανική επιλογή!
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Η RePower Solutions, με έδρα τη Θεσσαλονίκη, εξειδικεύεται
                  στην εγκατάσταση αντλιών θερμότητας, προσφέροντας αξιόπιστες
                  και βιώσιμες λύσεις για κάθε τύπο κατοικίας ή επαγγελματικού
                  χώρου.
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
                src="/images/antlies-thermothtas.jpg"
                alt="Αντλίες Θερμότητας"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-sky-100">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Τι είναι η Αντλία Θερμότητας;
            </h2>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg md:text-xl mb-6">
                Η αντλία θερμότητας είναι ένα ολοκληρωμένο σύστημα που προσφέρει
                θέρμανση, ψύξη και ζεστό νερό χρήσης. Χρησιμοποιεί την
                τεχνολογία αέρα-πηγής, αντλώντας ανανεώσιμη ενέργεια από τον
                αέρα του περιβάλλοντος, γεγονός που την καθιστά φιλική προς το
                περιβάλλον και ιδιαίτερα οικονομική.
              </p>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold my-8">
              Πώς Λειτουργεί η Αντλία Θερμότητας
            </h2>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg mb-4">
                Η λειτουργία της βασίζεται στη μεταφορά θερμότητας από τον
                εξωτερικό αέρα στο εσωτερικό του κτιρίου μέσω θερμοδυναμικού
                κύκλου. Η παραγόμενη θερμότητα διοχετεύεται στο δίκτυο διανομής,
                όπως:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-sky-50 rounded-lg">
                  <div className="inline-flex justify-center items-center w-12 h-12 bg-sky-100 rounded-full mb-3">
                    <Thermometer className="text-sky-600" size={24} />
                  </div>
                  <p className="font-medium">Ενδοδαπέδια θέρμανση</p>
                </div>
                <div className="text-center p-4 bg-sky-50 rounded-lg">
                  <div className="inline-flex justify-center items-center w-12 h-12 bg-sky-100 rounded-full mb-3">
                    <Thermometer className="text-sky-600" size={24} />
                  </div>
                  <p className="font-medium">
                    Καλοριφέρ (υψηλών/χαμηλών θερμοκρασιών)
                  </p>
                </div>
                <div className="text-center p-4 bg-sky-50 rounded-lg">
                  <div className="inline-flex justify-center items-center w-12 h-12 bg-sky-100 rounded-full mb-3">
                    <Snowflake className="text-sky-600" size={24} />
                  </div>
                  <p className="font-medium">Fan coil για ψύξη και θέρμανση</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mt-6">
                <p className="text-lg font-medium text-green-800">
                  Μέχρι και 75% της ενέργειας προέρχεται από το περιβάλλον, ενώ
                  μόνο 25% απαιτείται από ηλεκτρική ενέργεια, προσφέροντας έως
                  80% εξοικονόμηση!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Πλεονεκτήματα της Αντλίας Θερμότητας
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Οικονομία έως 80%
                </h3>
                <p>
                  Σημαντική μείωση στο κόστος θέρμανσης και ψύξης σε σύγκριση με
                  συμβατικά συστήματα.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.1,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="text-sky-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Χαμηλό κόστος συντήρησης
                </h3>
                <p>
                  Ελάχιστες απαιτήσεις συντήρησης και μεγάλη διάρκεια ζωής του
                  συστήματος.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.2,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Φιλική προς το περιβάλλον
                </h3>
                <p>
                  Χρήση ανανεώσιμων πηγών ενέργειας και σημαντική μείωση
                  εκπομπών διοξειδίου του άνθρακα.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.3,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Zap className="text-amber-500" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Γρήγορη απόσβεση</h3>
                <p>
                  Η εξοικονόμηση ενέργειας οδηγεί σε γρήγορη απόσβεση της
                  αρχικής επένδυσης.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.4,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Snowflake className="text-sky-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Ιδανική για όλες τις καιρικές συνθήκες
                </h3>
                <p>
                  Λειτουργεί αποτελεσματικά ακόμα και σε ακραίες θερμοκρασίες
                  περιβάλλοντος.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.5,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Συνεχής παροχή ζεστού νερού
                </h3>
                <p>
                  Εξασφαλίζει συνεχή παροχή ζεστού νερού χρήσης για όλες τις
                  ανάγκες του σπιτιού.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.6,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-sky-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Υψηλό επίπεδο ασφάλειας
                </h3>
                <p>
                  Λειτουργία χωρίς καύσιμα και φλόγα, εξαλείφοντας τους
                  κινδύνους που σχετίζονται με αυτά.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-sky-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.7,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Thermometer className="text-red-500" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Συμβατότητα</h3>
                <p>
                  Συμβατότητα με υπάρχον σύστημα καλοριφέρ, ενδοδαπέδια θέρμανση
                  ή fan coil.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-sky-100">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Εγκατάσταση Αντλίας Θερμότητας στη Θεσσαλονίκη
            </h2>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <p className="text-lg mb-6">
                Η RePower Solutions αναλαμβάνει μελέτη, προμήθεια και
                εγκατάσταση αντλιών θερμότητας με εγγυημένη απόδοση και
                ποιότητα. Οι έμπειροι μηχανικοί μας εξασφαλίζουν τη βέλτιστη
                λειτουργία του συστήματος από την πρώτη ημέρα.
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                Το Πακέτο Εγκατάστασης Περιλαμβάνει:
              </h3>

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
                    Προμήθεια & τοποθέτηση αντλίας θερμότητας
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
                    Σύνδεση με θερμαντικά σώματα ή fan coil
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
                    Υδραυλικές & ηλεκτρολογικές εργασίες
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
                  <span className="text-lg">Ρύθμιση & δοκιμή συστήματος</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-sky-700 text-white p-8 rounded-lg shadow-md mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.2,
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                Γιατί να επιλέξετε τη RePower Solutions;
              </h3>
              <p className="text-lg mb-4">
                Με πολυετή εμπειρία και δεκάδες εγκαταστάσεις σε όλη τη
                Θεσσαλονίκη, η RePower Solutions προσφέρει εξατομικευμένες
                λύσεις με γνώμονα την ενεργειακή απόδοση, την οικονομία και τη
                βιωσιμότητα.
              </p>
              <p className="text-lg font-medium">
                Επικοινωνήστε μαζί μας σήμερα και κάντε το πρώτο βήμα για μια
                οικονομική, αποδοτική και πράσινη θέρμανση στο σπίτι ή την
                επιχείρησή σας!
              </p>
            </motion.div>
          </div>
        </section>

        <Contact />
        <FooterNav />
      </div>
    </PageTransition>
  );
}
