import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContactInfoProps {
  isVisible: boolean;
}

export default function ContactInfo({ isVisible }: ContactInfoProps) {
  return (
    <div className="space-y-8">
      <motion.h3
        className="text-3xl font-semibold"
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.2,
        }}
      >
        Στοιχεία Επικοινωνίας
      </motion.h3>
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.3,
        }}
      >
        <Phone size={24} />
        <div>
          <h4 className="text-xl font-medium">Τηλέφωνο</h4>
          <p className="text-lg">gr +30 694 856 8652</p>
        </div>
      </motion.div>
      <Separator className="bg-gray-500" />
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.4,
        }}
      >
        <Mail size={24} />
        <div>
          <h4 className="text-xl font-medium">Email</h4>
          <p className="text-lg">info.repowersolutions@gmail.com</p>
        </div>
      </motion.div>
      <Separator className="bg-gray-500" />
      <motion.div
        className="flex items-start space-x-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.5,
        }}
      >
        <MapPin size={24} className="mt-1" />
        <div>
          <h4 className="text-xl font-medium">Διεύθυνση</h4>
          <p className="text-lg">Θεσσαλονίκης 4, Πυλαία 55535</p>
        </div>
      </motion.div>
      <Separator className="md:hidden bg-gray-500" />
    </div>
  );
}
