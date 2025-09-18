"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold sm:text-6xl md:text-7xl text-gray-900"
      >
        Hi, I’m <span className="text-blue-600">Suraj Poudel</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-lg text-gray-600 max-w-2xl"
      >
        A passionate <span className="font-semibold">Full-Stack Developer</span> 
        crafting modern web apps with Next.js, React, Tailwind & Sanity.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          View Projects <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-200 transition"
        >
          Contact Me <Mail className="w-5 h-5" />
        </Link>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-10 flex gap-6"
      >
        <a href="https://github.com/SurazPoudel" target="_blank" rel="noreferrer">
          <Github className="w-7 h-7 text-gray-700 hover:text-black transition" />
        </a>
        <a href="https://linkedin.com/in/YOUR_LINK" target="_blank" rel="noreferrer">
          <Linkedin className="w-7 h-7 text-gray-700 hover:text-blue-700 transition" />
        </a>
      </motion.div>
    </section>
  );
}
