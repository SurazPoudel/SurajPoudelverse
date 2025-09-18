"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I’m <span className="font-semibold">Suraj Poudel</span>, a
              full-stack developer passionate about building modern,
              user-friendly web applications. I specialize in{" "}
              <span className="text-blue-600 font-medium">
                Next.js, React, TailwindCSS, and Sanity CMS
              </span>
              , and I love creating interactive, professional designs that
              inspire and engage.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My mission is simple: to turn ideas into reality through clean
              code, modern UI/UX, and impactful digital experiences.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/profile.jpg" // place profile.jpg in /public folder
                alt="Suraj Poudel"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
