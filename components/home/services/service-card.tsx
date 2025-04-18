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
    <div ref={ref} id={service.id} className="min-h-[75vh] pt-8 -mt-8">
      <div className="my-5">
        <p className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold">
          {service.title}
        </p>

        <Separator className="my-4 overflow-hidden" />
      </div>

      <img
        src={service.image_url}
        alt={service.title}
        className="w-full h-96 object-cover hover:scale-101 transition-transform duration-700 rounded-lg"
      />
      <div className="text-2xl max-w-xl mb-8 space-y-4">
        {service.description.map((paragraph, index) => (
          <div>{paragraph}</div>
        ))}
      </div>
      <LearnMoreButton
        serviceId={service.id}
        isActive={isActive}
        descriptionLength={service.description.length}
      />
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;
