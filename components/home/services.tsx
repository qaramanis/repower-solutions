"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import ScrollReveal from "../scroll-reveal";

const SERVICES_DATA = [
  {
    id: "hm-erga",
    title: "Η/Μ Εργα",
    image_url: "/images/hm-erga.jpg",
    description: [
      "Σας προσφέρουμε εξειδικευμένες ηλεκτρομηχανικές μελέτες για κτιριακές και βιομηχανικές εγκαταστάσεις, με στόχο την παροχή της βέλτιστης κατασκευαστικής και ενεργειακής λύσης σε κάθε έργο.",
      "Οι μελέτες μας εκπονούνται από διπλωματούχους μηχανικούς με εκτεταμένη εμπειρία σε ένα ευρύ φάσμα ηλεκτρομηχανολογικών έργων. Αναλαμβάνουμε μελέτες εφαρμογής, αποτυπώσεις και προμελέτες.",
      "Οι μελέτες που αναλαμβάνουμε καλύπτουν κατηγορίες όπως ηλεκτρολογικά, υδραυλικά, κλιματισμό, εξαερισμό, θέρμανση, πυρασφάλεια και πολλά άλλα.",
    ],
  },
  {
    id: "texnikos-asfaleias",
    title: "Τεχνικός Ασφαλείας",
    image_url: "/images/texnikos-asfaleias.jpg",
    description: [
      "Ο τεχνικός ασφαλείας παρέχει συμβουλευτηκές και υποστηρικτικές υπηρεσίες σε επιχειρήσεις, εγκυόντας την ασφάλεια και την υγιεινή των εργαζομένων",
      "Σε εταιρείες με εώς 50 εργαζόμενους αναλαμβάνουμε εξ' ολοκλήρου τον ρόλο του τεχνικού ασφαλείας, ενώ σε μεγαλύτερες επιχειρήσεις απαιτείται η συνεργασία με γιατρό εργασίας",
      //TODO: complete
    ],
  },
  {
    id: "exoikonomo",
    title: "Πρόγραμμα Εξοικονομώ",
    image_url: "/images/exoikonomo.jpg",
    description: [
      "Η εταιρεία μας, με συνεχή δραστηριότητα στα προγράμματα Εξοικονομώ, παρέχει ολοκληρωμένες υπηρεσίες για την επιτυχή υλοποίηση κάθε έργου. Αναλαμβάνουμε όλες τις απαραίτητες διαδικασίες για, προσφέροντας λύσεις που βελτιώνουν την ενεργειακή απόδοση του χώρου σας",
      "Αναλαμβάνουμε όλες τις διαδικασίες για την ένταξή σας στο πρόγραμμα Εξοικονομώ, από την αρχική αίτηση έως την ολοκλήρωση του έργου. Η ομάδα μας έχει μεγάλη εμπειρία στη διαχείριση τέτοιων επιδοτούμενων προγραμμάτων.",
      "Προσφέρουμε ολοκληρωμένες λύσεις όπως αντικατάσταση κουφωμάτων, προμήθεια και εγκατάσταση συστημάτων θέρμανσης-ψύξης, συστήματα παραγωγής ζεστού νερού, και θερμοπροσόψεις.",
      "Επικοινωνήστε μαζί μας σήμερα για να αξιολογήσουμε τις ανάγκες του έργου σας και να σας προτείνουμε την καλύτερη λύση!",
    ],
  },
  {
    id: "pistopoihtiko",
    title: "Πιστ. Ενέργειακής Απόδοσης / ΠΕΑ",
    image_url: "/images/pistopoihtiko.jpg",
    description: [
      "Το Πιστοποιητικό Ενέργειακης Απόδοσης είναι ενα έγγραφο που αποτυπώνει την ενεργειακή κατανάλωση ενός ακινήτου και το κατατάσσει σε μία από τις εεργειακές κατηγορίες, από Α+ εώς Η.",
      "Παράλληλα συνοδέυεται από προτάσεις βελτίωσεις, που στοχεύουν στη μείωση της ενεργειακής κατανάλωσης και στην αναβάθμιση της ενεργειακής απόδοσης του ακινήτου.",
      "Αποτελεί την ενεργειακή ταυότητα κάθε κτιριού και πλέον υποχρεωτικό να συνοδεύει κάθε ακίνητο",
    ],
  },
  {
    id: "koufomata",
    title: "Κουφώματα",
    image_url: "/images/koufomata.jpg",
    description: [
      "Τα παλία κουφώματα στη σύγχρονη εποχή θεωρούνται ξεπερασμένα, καθώς είναι συνήθως ξύλινα και διαθέτουν μονά τζάμια, με αποτέλεσμα να μην παρέχουν αρκετή ηχομόνωση και θερμομόνωση.",
      "Αυτό συνεπάγεται αυξημένο κόστος συντήρησης, καθώς η έλλειωη σωστής στεγάνωσης οδηγεί σε υψηλές ενεργειακές απώλειες, αυξάνοντας τις δαπάνες για θέρμανση και ψύξη.",
      "Η επένδυση σε σύγχρονα κουφώματα δεν βελτιώνει μόνο την ποιότητα ζωής, αλλά συμβάλλει και στη σημαντική μείωση του ενεργειακού κόστους.",
      "Τα οφέλη των σύγχρονων κουφωμάτων προσφέρουν καλύτερη Θερμομόνωση, Ηχομόνωση, Αισθητική και κυρίως Ασφάλεια, κάτι που συχνά θεωρούμε ως δεδομένο.",
      "Επικοινωνήστε μαζί μας για να βρούμε τα ιδανικά κουφώματα για εσάς και τις ανάγκες σας.",
    ],
  },
  {
    id: "anakainiseis",
    title: "Ανακαινίσεις",
    image_url:
      "https://images.unsplash.com/photo-1634586648651-f1fb9ec10d90?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "Εάν θέλετε να ανανεώσετε τον χώρο σας, να διαμορφώσετε το νέο σας σπίτι ή να αυξήσετε την αξία του ακίνητού σας πριν από μια πώληση, μια ολοκληρωμένη ανακαίνιση ή αναδιαμόρφωση είναι η ιδανική λύση.",
      "Η εξειδικευμένη ομάδα μηχανικών και τεχνικών μας είναι έτοιμη να σχεδιάσει και να υλοποιήσει τις ιδέες σας, προσαρμοσμένες στις ανάγκες και τις προτιμήσεις σας.",
      "Συνεργαζόμαστε μαζί σας για να επιλέξουμε τις βέλτιστες λύσεις, εξασφαλίζοντας το επιθυμητό αποτέλεσμα μέσα στα οικονομικά όρια που έχετε θέσει.",
      "Δίνεται και δυνατότητα αρχιτεκτονικού σχεδιασμού, όπου οι έμπειροι συνεργάτες μας θα σας προτείνουν τις πιο αποδοτικές και αισθητικά άρτιες λύσεις συνδυάζοντας λειτουργικότητα και κομψότητα.",
    ],
  },
  {
    id: "antlies",
    title: "Αντλίες θερμότητας",
    image_url: "/images/antlies-thermotitas.jpg",
    description: [
      "Οι αντλίες θερμότητας αποτελούν μια ολοκληρωμένη οικονομική και οικολογική λύση για κάθε χώρο.",
      "Η αντλία θερμότητας είναι ένα ολοκληρωμένο σύστημα θέρμανσης, ψύξης και παραγωγής ζεστού νερού χρήσης που λειτουργεί με την τεχνολογία αντλίας θερμότητας αέρα-πηγής.",
      "Αποδίδει έως και 75% της ενέργειάς της από τον αέρα, ενώ καταναλώνει μόνο 25% ηλεκτρικής ενέργειας, προσφέροντας έως και 80% οικονομία στη θέρμανση και την ψύξη του χώρου.",
    ],
  },
  {
    id: "fotovoltaika",
    title: "Φωτοβολταϊκά",
    image_url: "/images/fotovoltaika.jpg",
    description: [
      "Η παραγωγή ενέργειας από τον ήλιο είναι μια από τις πιο αποδοτικές λύσεις για την εξοικονόμηση ενέργειας. Προσφέρουμε ολοκληρωμένες λύσεις φωτοβολταϊκών συστημάτων για οικιακή και επαγγελματική χρήση.",
      "Τα φωτοβολταϊκά πάνελ μετατρέπουν την ηλιακή ενέργεια σε ηλεκτρική, παρέχοντας καθαρή και οικονομική ηλεκτροδότηση σε κατοικίες και επιχειρήσεις.",
      "Η εγκατάσταση διασυνδεδεμένου φωτοβολταϊκού συστήματος επιτρέπει παραγωγή ηλεκτρικής ενέργειας από τον ήλιο, η οποία χρησιμοποιείται απευθείας στο σπίτι ή την επιχείρηση, με σημαντική μείωση ή ακόμα και μηδενισμό του λογαριασμού ρεύματος.",
    ],
  },
];

export default function Services() {
  const [activeSection, setActiveSection] = useState<string>(
    SERVICES_DATA[0].id
  );
  const sectionRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>(
    {}
  );
  useEffect(() => {
    SERVICES_DATA.forEach((service) => {
      sectionRefs.current[service.id] =
        sectionRefs.current[service.id] || React.createRef();
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    const targetRef = sectionRefs.current[sectionId];

    if (targetRef?.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop;

      const offsetPosition = targetPosition - 90;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200;

    const sectionPositions = SERVICES_DATA.map((service) => {
      const ref = sectionRefs.current[service.id];
      if (!ref?.current) return { id: service.id, top: 0, bottom: 0 };

      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return {
        id: service.id,
        top: rect.top + scrollTop - 500,
        bottom: rect.bottom + scrollTop - 500,
      };
    });

    for (const section of sectionPositions) {
      if (scrollPosition >= section.top && scrollPosition < section.bottom) {
        if (activeSection !== section.id) {
          setActiveSection(section.id);
        }
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-transparent text-black py-20"
    >
      <div className="container mx-auto max-w-8xl px-4">
        <div className="flex flex-col md:flex-row gap-75">
          <motion.div
            className="md:w-2/5 md:sticky md:top-32 h-fit"
            style={{ alignSelf: "flex-start" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-6xl font-bold mb-8">Προσφερομενες Υπηρεσιες</h2>
            <div className="flex flex-col space-y-4">
              {SERVICES_DATA.map((service) => (
                <motion.button
                  key={service.id}
                  className={`text-left text-2xl text-black/90 transition-colors ${
                    activeSection === service.id
                      ? "text-primary font-semibold"
                      : "hover:text-gray-600"
                  }`}
                  onClick={() => scrollToSection(service.id)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.1 }}
                >
                  {service.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="md:w-3/5 space-y-32 pb-20">
            {SERVICES_DATA.map((service) => (
              <motion.div
                key={service.id}
                ref={(ref) => {
                  if (ref) {
                    sectionRefs.current[service.id] = { current: ref };
                  }
                }}
                id={service.id}
                className="min-h-[75vh] pt-8 -mt-8"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeSection === service.id ? 1 : 0.6,
                  y: activeSection === service.id ? 0 : 10,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.175, 0.885, 0.32, 1],
                }}
              >
                {/* <motion.h3
                  className="text-5xl font-semibold mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{
                    y: activeSection === service.id ? 0 : 20,
                    opacity: activeSection === service.id ? 1 : 0.8,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.175, 0.885, 0.32, 1],
                    delay: 0.1,
                  }}
                >
                  {service.title}
                </motion.h3> */}
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={false}
                  baseRotation={10}
                  blurStrength={10}
                >
                  {service.title}
                </ScrollReveal>
                <motion.div
                  className="my-6 overflow-hidden rounded-lg"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{
                    y: activeSection === service.id ? 0 : 30,
                    opacity: activeSection === service.id ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.175, 0.885, 0.32, 1],
                    delay: 0.1,
                  }}
                >
                  <img
                    src={service.image_url}
                    alt={service.title}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
                <div className="text-2xl max-w-xl mb-8 space-y-4">
                  {service.description.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{
                        y: activeSection === service.id ? 0 : 30,
                        opacity: activeSection === service.id ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.175, 0.885, 0.32, 1],
                        delay: 0.2 + index * 0.1,
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
