"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

// Define custom PortableText components
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) return null;
      return (
        <div className="my-4 rounded-lg overflow-hidden">
          <Image
            src={value.asset.url}
            alt={value.alt || "Blog Image"}
            width={800}   // adjust sizes depending on your layout
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-blue-600 underline hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

interface PortableTextComponentProps {
  value: unknown; // 👈 safer than `any`
}

export default function PortableTextComponent({ value }: PortableTextComponentProps) {
  return <PortableText value={value} components={components} />;
}
