import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LearnMoreButtonProps {
  serviceId: string;
  isActive: boolean;
  descriptionLength: number;
}

export default function LearnMoreButton({
  serviceId,
  isActive,
  descriptionLength,
}: LearnMoreButtonProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{
        x: isActive ? 0 : 30,
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1],
        delay: 0.2 + descriptionLength * 0.1,
      }}
      className="mt-8"
    >
      <Link href={`/${serviceId}`}>
        <Button variant="default" className="px-6 py-2.5 text-lg">
          Μάθετε περισσότερα
        </Button>
      </Link>
    </motion.div>
  );
}
