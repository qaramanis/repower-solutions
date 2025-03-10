import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-none ">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-semibold">
          Repower Solutions
        </Link>
      </div>
      <div className="flex gap-6">
        <Link href="#" className="hover:underline hover:underline-offset-4">
          Εταιρεία
        </Link>
        <Link href="#" className="hover:underline hover:underline-offset-4">
          Υπηρεσίες
        </Link>
        <Link href="#" className="hover:underline hover:underline-offset-4">
          Επικοινωνία
        </Link>
      </div>
    </nav>
  );
}
