"use client";

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-transparent text-black py-20"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Fixed left side - Note the height adjustment */}
          <div
            className="md:w-2/5 md:sticky md:top-24 h-fit"
            style={{ alignSelf: "flex-start" }}
          >
            <h2 className="text-5xl font-bold mb-8">
              Τεχνικές ενεργειακές λύσεις
            </h2>
            <div className="flex flex-col space-y-4">
              {/* Navigation buttons would go here */}
              <button className="text-left text-lg hover:text-white/80 transition-colors">
                Φωτοβολταϊκά
              </button>
              <button className="text-left text-lg hover:text-white/80 transition-colors">
                Αντλίες θερμότητας
              </button>
              <button className="text-left text-lg hover:text-white/80 transition-colors">
                Πρόγραμμα Εξοικονομώ
              </button>
              <button className="text-left text-lg hover:text-white/80 transition-colors">
                Ανακαινίσεις
              </button>
            </div>
          </div>

          {/* Scrollable right side - adding substantial content to enable scrolling */}
          <div className="md:w-3/5 space-y-32 pb-20">
            {/* First section */}
            <div className="min-h-[60vh]">
              <h3 className="text-3xl font-semibold mb-6">Φωτοβολταϊκά</h3>
              <p className="text-lg  max-w-xl mb-8">
                Η παραγωγή ενέργειας από τον ήλιο είναι μια από τις πιο
                αποδοτικές λύσεις για την εξοικονόμηση ενέργειας. Προσφέρουμε
                ολοκληρωμένες λύσεις φωτοβολταϊκών συστημάτων για οικιακή και
                επαγγελματική χρήση.
              </p>
              <div className="bg-white/5 rounded-lg h-64 w-full"></div>
            </div>

            {/* Second section */}
            <div className="min-h-[60vh] text-black">
              <h3 className="text-3xl font-semibold mb-6">
                Αντλίες θερμότητας
              </h3>
              <p className="text-lg  max-w-xl mb-8">
                Οι αντλίες θερμότητας αποτελούν μια οικονομική και οικολογική
                λύση για θέρμανση και ψύξη. Προσφέρουμε εγκατάσταση και
                συντήρηση αντλιών θερμότητας από κορυφαίους κατασκευαστές.
              </p>
              <div className="bg-white/5 rounded-lg h-64 w-full"></div>
            </div>

            {/* Third section */}
            <div className="min-h-[60vh]">
              <h3 className="text-3xl font-semibold mb-6">
                Πρόγραμμα Εξοικονομώ
              </h3>
              <p className="text-lg max-w-xl mb-8">
                Αναλαμβάνουμε όλες τις διαδικασίες για την ένταξή σας στο
                πρόγραμμα Εξοικονομώ, από την αρχική αίτηση έως την ολοκλήρωση
                του έργου. Η ομάδα μας έχει μεγάλη εμπειρία στη διαχείριση
                τέτοιων επιδοτούμενων προγραμμάτων.
              </p>
              <div className="bg-white/5 rounded-lg h-64 w-full"></div>
            </div>

            {/* Fourth section */}
            <div className="min-h-[60vh]">
              <h3 className="text-3xl font-semibold mb-6">Ανακαινίσεις</h3>
              <p className="text-lg max-w-xl mb-8">
                Προσφέρουμε ολοκληρωμένες υπηρεσίες ανακαίνισης για οικίες και
                επαγγελματικούς χώρους. Από μικρές παρεμβάσεις μέχρι ριζικές
                ανακαινίσεις, η ομάδα μας αναλαμβάνει όλες τις εργασίες με
                συνέπεια.
              </p>
              <div className="bg-white/5 rounded-lg h-64 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
