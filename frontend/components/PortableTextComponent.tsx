"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) =>
      value?.asset?.url ? (
        <img
          src={value.asset.url}
          alt={value.alt || "Blog Image"}
          className="my-4 rounded-lg"
        />
      ) : null,
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
  value: TypedObject | TypedObject[];
}

export default function PortableTextComponent({
  value,
}: PortableTextComponentProps) {
  return <PortableText value={value} components={components} />;
}
