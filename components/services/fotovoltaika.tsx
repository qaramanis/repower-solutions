"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import FooterNav from "@/components/footer/footer";
import Contact from "../home/contact/contact";
import PageTransition from "../page-transition";
import BackButton from "./back-button";
import {
  Sun,
  Battery,
  CloudLightning,
  Leaf,
  Sprout,
  Receipt,
  Wrench,
  CheckCircle,
} from "lucide-react";

export default function FotovoltaikaPage() {
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
                Φωτοβολταϊκά Συστήματα
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
                για Οικίες & Επιχειρήσεις – Θεσσαλονίκη
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
                  Η εταιρεία μας, με έδρα την Θεσσαλονίκη, προσφέρει
                  ολοκληρωμένες λύσεις φωτοβολταϊκών συστημάτων "με το κλειδί
                  στο χέρι" για οικιακές και επαγγελματικές εγκαταστάσεις.
                </p>
                <p className="text-lg md:text-xl mb-4">
                  Εξασφαλίζοντας εξοικονόμηση, αυτονομία και πράσινη ενέργεια,
                  τα φωτοβολταϊκά συστήματα αποτελούν μια αποδοτική επένδυση με
                  σημαντικά οφέλη για το περιβάλλον και την τσέπη σας.
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
                src="/images/fotovoltaika.jpg"
                alt="Φωτοβολταϊκά Συστήματα"
                className="rounded-lg shadow-lg object-cover w-full max-w-[500px] h-auto"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-green-200">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Με την εγκατάσταση ενός φωτοβολταϊκού συστήματος επιτυγχάνετε:
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Sun className="text-yellow-500 mr-2" size={28} />
                  Αυτοπαραγωγή ενέργειας
                </h3>
                <p className="text-lg">
                  Παράγετε τη δική σας ηλεκτρική ενέργεια από τον ήλιο,
                  μειώνοντας σημαντικά ή και μηδενίζοντας τον λογαριασμό
                  ρεύματος.
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
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Battery className="text-green-600 mr-2" size={28} />
                  Ενεργειακή αυτονομία
                </h3>
                <p className="text-lg">
                  Με τη χρήση συστημάτων αποθήκευσης (μπαταρίες), εξασφαλίζετε
                  ενεργειακή αυτονομία ακόμη και σε περιπτώσεις διακοπών
                  ρεύματος.
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
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Receipt className="text-blue-600 mr-2" size={28} />
                  Εξοικονόμηση μέσω Net-Billing
                </h3>
                <p className="text-lg">
                  Το σύστημα Net-Billing επιτρέπει τον συμψηφισμό της
                  παραγόμενης με την καταναλισκόμενη ενέργεια, προσφέροντας
                  σημαντική εξοικονόμηση κόστους.
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
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Leaf className="text-green-600 mr-2" size={28} />
                  Επιδοτήσεις έως 100%
                </h3>
                <p className="text-lg">
                  Εκμεταλλευτείτε επιδοτήσεις έως και 100% μέσω προγραμμάτων
                  όπως το "Εξοικονομώ" και το "Φωτοβολταϊκά στη Στέγη".
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Τι περιλαμβάνει το πακέτο "Φωτοβολταϊκά με το Κλειδί στο Χέρι"
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Τεχνική Μελέτη</h3>
                <p>
                  Αυτοψία και τεχνική μελέτη για τη βέλτιστη απόδοση του
                  συστήματος στο χώρο σας.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.1,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CloudLightning className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Επιδοτήσεις & Αδειοδοτήσεις
                </h3>
                <p>
                  Υποβολή φακέλου για επιδοτήσεις και διεκπεραίωση όλων των
                  αδειοδοτήσεων.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.2,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Εγκατάσταση</h3>
                <p>
                  Επαγγελματική εγκατάσταση από εξειδικευμένο συνεργείο με
                  πιστοποιημένα υλικά.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-center border border-green-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.3,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sprout className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Υποστήριξη</h3>
                <p>
                  Διασύνδεση με τον πάροχο ηλεκτρικής ενέργειας και after-sales
                  τεχνική υποστήριξη.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 px-4 md:px-8 bg-green-100">
          <div className="max-w-[70%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Τύποι Φωτοβολταϊκών Συστημάτων
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  Οικιακά Φωτοβολταϊκά
                </h3>
                <p className="text-lg">
                  Συστήματα για κατοικίες που μειώνουν το κόστος ηλεκτρικής
                  ενέργειας και αυξάνουν την ενεργειακή αυτονομία του σπιτιού
                  σας.
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
                <h3 className="text-xl font-semibold mb-4">
                  Επαγγελματικά Συστήματα
                </h3>
                <p className="text-lg">
                  Μεγαλύτερης κλίμακας συστήματα για επιχειρήσεις που μειώνουν
                  το λειτουργικό κόστος και ενισχύουν το πράσινο προφίλ της
                  εταιρείας.
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
                <h3 className="text-xl font-semibold mb-4">
                  Συστήματα με Μπαταρίες
                </h3>
                <p className="text-lg">
                  Ολοκληρωμένες λύσεις με αποθήκευση ενέργειας για μέγιστη
                  αυτονομία, κατάλληλες για περιοχές με συχνές διακοπές
                  ρεύματος.
                </p>
              </motion.div>
            </div>
          </div>
        </section> */}

        <Contact />
        <FooterNav />
      </div>
    </PageTransition>
  );
}
