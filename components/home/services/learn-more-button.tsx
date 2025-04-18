import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    // <motion.div
    //   initial={{ y: 30, opacity: 0 }}
    //   animate={{
    //     x: isActive ? 0 : 30,
    //     opacity: isActive ? 1 : 0,
    //   }}
    //   transition={{
    //     duration: 0.6,
    //     ease: [0.175, 0.885, 0.32, 1],
    //     delay: 0.2 + descriptionLength * 0.1,
    //   }}
    //   className="mt-8 flex justify-end"
    // >
      <Link href={`/${serviceId}`}>
        <Button
          variant="default"
          className="px-6 py-2.5 text-lg flex items-center rounded-full mt-8 justify-end"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="mr-2 mb-1">Μάθετε Περισσότερα</span>
          <motion.div
            animate={{
              x: isHovered ? 8 : 0,
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <ArrowRight size={24} />
          </motion.div>
        </Button>
      </Link>
    // </motion.div>
  );
}
