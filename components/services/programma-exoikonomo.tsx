"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FooterNav from "@/components/footer/footer";
import ScrollReveal from "@/components/scroll-reveal";
import Contact from "../home/contact/contact";
import PageTransition from "../page-transition";
import { useRouter } from "next/navigation";

export default function ProgrammaExoikonomoPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isNavigatingBack, setIsNavigatingBack] = useState(false);
  const router = useRouter();

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

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsNavigatingBack(true);

    setTimeout(() => {
      router.push("/");
    }, 100);
  };

  return (
    <PageTransition toService={false}>
      <div className="relative min-h-screen bg-white">
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-[80%] mx-auto relative">
          <div className="mb-8">
            <Link href="/">
              <Button
                variant="ghost"
                className="flex items-center gap-2 p-0 hover:bg-transparent"
                onClick={handleBackToHome}
              >
                <ArrowLeft size={20} />
                <span>Επιστροφή στην αρχική</span>
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              >
                Προγράμματα Εξοικονομώ στη Θεσσαλονίκη
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
                Ολοκληρωμένες Λύσεις Ενεργειακής Αναβάθμισης
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
                  Η εταιρεία μας, με πολυετή εμπειρία και συνεχή δραστηριότητα
                  στα Προγράμματα Εξοικονομώ στη Θεσσαλονίκη, προσφέρει
                  ολοκληρωμένες λύσεις για την ενεργειακή αναβάθμιση κατοικιών
                  και επαγγελματικών χώρων.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Αναλαμβάνουμε όλες τις διαδικασίες ένταξης στο πρόγραμμα, από
                  την αρχική αξιολόγηση μέχρι την τελική υλοποίηση των
                  παρεμβάσεων.
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
                src="/images/exoikonomo.jpg"
                alt="Πρόγραμμα Εξοικονομώ"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-gray-300">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Υπηρεσίες Ενεργειακής Αναβάθμισης
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-green-600 mr-2 text-3xl">✓</span>
                  Αντικατάσταση κουφωμάτων
                </h3>
                <p className="text-lg">
                  Προσφέρουμε αντικατάσταση κουφωμάτων με ενεργειακά αποδοτικά
                  θερμοδιακοπτόμενα αλουμινίου ή συνθετικών PVC, εξασφαλίζοντας
                  βέλτιστη θερμομόνωση και ηχομόνωση.
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
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-green-600 mr-2 text-3xl">✓</span>
                  Αντλίες θερμότητας
                </h3>
                <p className="text-lg">
                  Προμήθεια & εγκατάσταση αντλιών θερμότητας υψηλής απόδοσης που
                  μειώνουν δραστικά το κόστος θέρμανσης και ψύξης, προσφέροντας
                  σημαντική εξοικονόμηση ενέργειας.
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
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-green-600 mr-2 text-3xl">✓</span>
                  Ηλιακά συστήματα
                </h3>
                <p className="text-lg">
                  Εγκαθιστούμε ηλιακά συστήματα για παραγωγή ζεστού νερού χρήσης
                  (ηλιακοί θερμοσίφωνες) με στόχο τη μείωση της κατανάλωσης
                  ηλεκτρικής ενέργειας.
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
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="text-green-600 mr-2 text-3xl">✓</span>
                  Θερμομόνωση
                </h3>
                <p className="text-lg">
                  Εφαρμόζουμε θερμομόνωση για μείωση απωλειών και βελτίωση της
                  ενεργειακής απόδοσης του κτιρίου, προσφέροντας μεγαλύτερη
                  άνεση και οικονομία στη θέρμανση και ψύξη.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Η Διαδικασία Ένταξης στο Πρόγραμμα Εξοικονομώ
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Αξιολόγηση</h3>
                <p>
                  Αρχική επίσκεψη και αξιολόγηση του χώρου για προσδιορισμό των
                  απαιτούμενων παρεμβάσεων.
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
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Προετοιμασία Φακέλου
                </h3>
                <p>
                  Συγκέντρωση των απαραίτητων δικαιολογητικών και προετοιμασία
                  του φακέλου υποβολής.
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
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Υποβολή & Έγκριση
                </h3>
                <p>
                  Υποβολή αίτησης στο πρόγραμμα και διαχείριση της διαδικασίας
                  μέχρι την έγκριση.
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
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Υλοποίηση</h3>
                <p>
                  Εκτέλεση των εγκεκριμένων παρεμβάσεων και ολοκλήρωση του έργου
                  με υψηλή ποιότητα.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Οφέλη Ενεργειακής Αναβάθμισης
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Εξοικονόμηση Ενέργειας
                </h3>
                <p className="text-lg">
                  Μείωση της κατανάλωσης ενέργειας έως και 60%, με αντίστοιχη
                  μείωση των λογαριασμών θέρμανσης και ψύξης.
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
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4">Βελτίωση Άνεσης</h3>
                <p className="text-lg">
                  Αναβάθμιση της θερμικής και ακουστικής άνεσης, για καλύτερες
                  συνθήκες διαβίωσης και εργασίας.
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
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Αύξηση Αξίας Ακινήτου
                </h3>
                <p className="text-lg">
                  Τα ενεργειακά αναβαθμισμένα ακίνητα έχουν υψηλότερη αξία
                  πώλησης και μίσθωσης στην αγορά.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Contact />
        <FooterNav />
      </div>
    </PageTransition>
  );
}
