import { cn } from "@/lib/utils";

export default function RepowerSolutionsLogo({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <img
      src="/repower-solutions-black.svg"
      alt="logo"
      className={cn("", className)}
      width="100"
      height="100"
    />
  );
}
