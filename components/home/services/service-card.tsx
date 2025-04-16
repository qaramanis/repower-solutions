"use client";

import React from "react";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import LearnMoreButton from "./learn-more-button";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    image_url: string;
    description: string[];
  };
  isActive: boolean;
  ref: React.Ref<HTMLDivElement>;
}

const ServiceCard = React.forwardRef<
  HTMLDivElement,
  Omit<ServiceCardProps, "ref">
>(({ service, isActive }, ref) => {
  return (
    <motion.div
      ref={ref}
      id={service.id}
      className="min-h-[75vh] pt-8 -mt-8"
      initial={{ opacity: 0 }}
      animate={{
        x: isActive ? 0 : 10,
        opacity: isActive ? 1 : 0.6,
      }}
      transition={{
        duration: 0.5,
        ease: [0.175, 0.885, 0.32, 1],
      }}
    >
      <div className="my-5">
        <motion.div
          initial={{ opacity: 0, rotate: 10, y: 30 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.175, 0.885, 0.32, 1],
          }}
          animate={{
            x: isActive ? 0 : 30,
            opacity: isActive ? 1 : 0,
          }}
        >
          <p className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold">
            {service.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{
            duration: 1,
            ease: [0.175, 0.885, 0.32, 1],
            delay: 0.3,
          }}
          animate={{
            x: isActive ? 0 : 30,
            opacity: isActive ? 1 : 0,
          }}
          className="my-4 overflow-hidden"
        >
          <Separator />
        </motion.div>
      </div>

      <motion.div
        className="my-6 overflow-hidden rounded-lg"
        initial={{ y: 30, opacity: 0 }}
        animate={{
          x: isActive ? 0 : 30,
          opacity: isActive ? 1 : 0,
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
              x: isActive ? 0 : 30,
              opacity: isActive ? 1 : 0,
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
      <LearnMoreButton
        serviceId={service.id}
        isActive={isActive}
        descriptionLength={service.description.length}
      />
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;
