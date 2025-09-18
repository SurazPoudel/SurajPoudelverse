// frontend/components/Footer.tsx
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Suraj Poudel. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-4 text-slate-600">
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            className="hover:text-indigo-600"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-indigo-600"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://github.com/SurazPoudel"
            target="_blank"
            className="hover:text-indigo-600"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
