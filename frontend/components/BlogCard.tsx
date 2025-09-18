// frontend/components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  date?: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  imageUrl,
  date,
}: BlogCardProps) {
  return (
    <article className="card flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-slate-900 line-clamp-2">
          {title}
        </h2>
        {date && (
          <time className="text-xs text-slate-500">
            {new Date(date).toLocaleDateString()}
          </time>
        )}
        <p className="text-slate-600 text-sm line-clamp-3">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="mt-2 inline-block text-indigo-600 text-sm font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
