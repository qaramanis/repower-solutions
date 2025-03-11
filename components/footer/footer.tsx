import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Mail, Instagram, Facebook } from "lucide-react";

export default function FooterNav() {
  return (
    <footer className="w-full bg-black text-white py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} Repower Solutions. All rights
          reserved.
        </div>

        <div className="flex space-x-6 my-4 md:my-0">
          <Link
            href="#"
            className="text-sm hover:text-gray-300 transition-colors"
          >
            TEAM
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-gray-300 transition-colors"
          >
            BLOG
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-gray-300 transition-colors"
          >
            PRIVACY
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-gray-300 transition-colors"
          >
            TERMS
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link
            href="https://linkedin.com"
            aria-label="linkedin"
            className="hover:text-gray-300 transition-colors"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://www.facebook.com/people/RePower-Solutions/61573024402149/"
            aria-label="facebook"
            className="hover:text-gray-300 transition-colors"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="mailto:info.repowersolutions@gmail.com"
            aria-label="email"
            className="hover:text-gray-300 transition-colors"
          >
            <Mail size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/repowersolutions"
            aria-label="instagram"
            className="hover:text-gray-300 transition-colors"
          >
            <Instagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
