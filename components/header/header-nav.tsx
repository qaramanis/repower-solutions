"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import HeaderLink from "./header-link";

export default function HeaderNav() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-row gap-2 ml-4">
      <HeaderLink
        key="εταιρεια"
        text="εταιρεια"
        href="#"
        isActive={true}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        index={0}
      />
      <HeaderLink
        key="υπηρεσιες"
        text="υπηρεσιες"
        href="#"
        isActive={false}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        index={1}
      />
      <HeaderLink
        key="εργα"
        text="εργα"
        href="#"
        isActive={false}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        index={2}
      />
      <HeaderLink
        key="blog"
        text="blog"
        href="#"
        isActive={false}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        index={3}
      />
    </div>
  );
}
