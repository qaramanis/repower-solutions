import { motion } from "motion/react";
import Link from "next/link";

export default function HeaderLink({
  text,
  href,
  isActive,
  isHovered,
  setIsHovered,
  index,
  onClick,
}: {
  text: string;
  href: string;
  isActive: boolean;
  isHovered: number | null;
  setIsHovered: (isHovered: number | null) => void;
  index: number;
  onClick?: () => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  // return (
  //   <Link
  //     href={href}
  //     onMouseEnter={() => setIsHovered(index)}
  //     onMouseLeave={() => setIsHovered(null)}
  //     onClick={handleClick}
  //     className="text-black relative tracking-tight text-3xl px-4 py-2 flex items-center justify-center"
  //   >
  //     <span className="z-10 -mt-2">{text}</span>{" "}
  //     {isActive && isHovered === null && (
  //       <motion.span
  //         className="absolute inset-0 bg-[#ffffff]/45  rounded-full z-0"
  //         layoutId="header-link-underline"
  //         transition={{
  //           duration: 0.8,
  //           ease: [0.175, 0.885, 0.32, 1],
  //         }}
  //       />
  //     )}
  //     {isHovered === index && (
  //       <motion.span
  //         className="absolute inset-0 bg-[#ffffff]/45 underline decoration-pink-500 rounded-full z-0"
  //         layoutId="header-link-underline"
  //         transition={{
  //           duration: 0.8,
  //           ease: [0.175, 0.885, 0.32, 1],
  //         }}
  //       />
  //     )}
  //   </Link>
  // );

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(index)}
      onMouseLeave={() => setIsHovered(null)}
      onClick={handleClick}
      className="text-black relative tracking-tight text-3xl px-4 py-2 flex items-center justify-center"
    >
      <span className="z-10 -mt-2">{text}</span>{" "}
      {isActive && isHovered === null && (
        <motion.span
          className="absolute bottom-15/100 left-2/10 right-2/10 h-0.5 bg-black z-0 rounded-full"
          layoutId="header-link-underline"
          transition={{
            duration: 0.8,
            ease: [0.175, 0.885, 0.32, 1],
          }}
        />
      )}
      {isHovered === index && (
        <motion.span
          className="absolute bottom-15/100 left-2/10 right-2/10 h-0.5 bg-black z-0 rounded-full"
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
