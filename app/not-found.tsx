"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen z-50">
      <div className="bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-lg rounded-xl p-8 md:p-12 max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Η σελίδα δεν βρέθηκε
        </h2>
        <p className="text-lg md:text-xl mb-10">
          Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <Button className="flex items-center gap-2">
              <Home size={18} />
              Επιστροφή στην αρχική σελίδα
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
