import { ArrowLeft } from "lucide-react";
import NavigationLink from "../navigation-link";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BackButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-8 w-min">
      <NavigationLink href="/">
        <Button
          variant="ghost"
          className="flex items-center p-2 cursor-pointer hover:bg-transparent rounded-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{
              x: isHovered ? 0 : 8,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <ArrowLeft size={24} className="mt-1 mr-2" />
          </motion.div>
          <span className="text-xl">επιστροφη στην αρχικη</span>
        </Button>
      </NavigationLink>
    </div>
  );
}
