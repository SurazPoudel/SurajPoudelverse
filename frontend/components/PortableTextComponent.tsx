import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const PortableTextComponent: PortableTextComponents = {
  types: {
    // Render images from Sanity
    image: ({ value }) => {
      if (!value?.asset?._ref && !value?.asset?.url) return null;
      return (
        <div className="my-6">
          <Image
            src={value.asset.url}
            alt={value.alt || "Blog image"}
            width={800}
            height={450}
            className="rounded-xl"
          />
        </div>
      );
    },
    code: ({ value }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm my-6">
        <code>{value.code}</code>
      </pre>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          {children}
        </a>
      ) : (
        <Link href={href} className="text-indigo-600 hover:underline">
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-slate-700">{children}</em>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-4 mb-2">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-slate-600 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2">{children}</ol>
    ),
  },
};
