"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Leaf } from "lucide-react";
import ServiceCard from "./service-card";
import ServicesNavigation from "./service-navigation";

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
    title: "Φωτοβολταικά",
    image_url: "/images/fotovoltaika.jpg",
    description: [
      "Η παραγωγή ενέργειας από τον ήλιο είναι μια από τις πιο αποδοτικές λύσεις για την εξοικονόμηση ενέργειας. Προσφέρουμε ολοκληρωμένες λύσεις φωτοβολταϊκών συστημάτων για οικιακή και επαγγελματική χρήση.",
      "Τα φωτοβολταIκά πάνελ μετατρέπουν την ηλιακή ενέργεια σε ηλεκτρική, παρέχοντας καθαρή και οικονομική ηλεκτροδότηση σε κατοικίες και επιχειρήσεις.",
      "Η εγκατάσταση διασυνδεδεμένου φωτοβολταIκού συστήματος επιτρέπει παραγωγή ηλεκτρικής ενέργειας από τον ήλιο, η οποία χρησιμοποιείται απευθείας στο σπίτι ή την επιχείρηση, με σημαντική μείωση ή ακόμα και μηδενισμό του λογαριασμού ρεύματος.",
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
          <ServicesNavigation
            services={SERVICES_DATA.map((service) => ({
              id: service.id,
              title: service.title,
            }))}
            activeSection={activeSection}
            onSectionChange={scrollToSection}
          />

          <div className="md:w-3/5 space-y-32 pb-20">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                ref={(ref) => {
                  if (ref) {
                    sectionRefs.current[service.id] = { current: ref };
                  }
                }}
                service={service}
                isActive={activeSection === service.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
