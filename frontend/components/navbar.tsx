// frontend/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          SurajPoudel
        </Link>

        <div className="flex gap-6 text-slate-700 font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-indigo-600 transition ${
                pathname === link.href ? "text-indigo-600 underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
