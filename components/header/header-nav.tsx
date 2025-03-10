"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

function HeaderLink({
  text,
  href,
  isActive,
  isHovered,
  setIsHovered,
  index,
}: {
  text: string;
  href: string;
  isActive: boolean;
  isHovered: number | null;
  setIsHovered: (isHovered: number | null) => void;
  index: number;
}) {
  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(index)}
      onMouseLeave={() => setIsHovered(null)}
      className="text-white relative tracking-tight text-xl px-4 py-2 flex"
    >
      <span className="z-10">{text}</span>
      {isActive && isHovered === null && (
        <motion.span
          className="absolute inset-0 bg-[#9bd2ff]/15 rounded-full z-0"
          layoutId="header-link-underline"
          transition={{
            duration: 0.8,
            ease: [0.175, 0.885, 0.32, 1],
          }}
        />
      )}
      {isHovered === index && (
        <motion.span
          className="absolute inset-0 bg-[#9bd2ff]/15 rounded-full z-0"
          layoutId="header-link-underline"
          transition={{
            duration: 0.8,
            ease: [0.175, 0.885, 0.32, 1],
          }}
        />
      )}
    </Link>
  );
}

export function HeaderCTA({
  text,
  href,
  inverted,
  className,
}: {
  text: string;
  href: string;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white group rounded-full relative tracking-tight text-lg px-5 flex items-center justify-center",
        className
      )}
    >
      <div className="overflow-hidden relative flex">
        <span className=" py-2 z-10 group-hover:translate-y-[-100%] transition-transform duration-500 ease-out-expo">
          {text}
        </span>
        <span className="py-2 z-10 text-hover absolute translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out-expo">
          {text}
        </span>
      </div>
      <span
        className={cn(
          "block absolute inset-0 bg-jjBlue rounded-full z-0 group-hover:scale-105 transition-all duration-500 ease-out-expo",
          inverted && "bg-transparent border border-white/30"
        )}
      ></span>
    </Link>
  );
}

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
