"use client";

import { PortableText } from "@portabletext/react";

const components = {
  types: {
    image: ({ value }: any) => (
      <img src={value.asset?.url} alt="Blog Image" className="my-4 rounded-lg" />
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-blue-600 underline hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableTextComponent({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}
