import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  date?: string;
  author?: {
    name?: string;
    image?: string;
  };
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  imageUrl,
  date,
  author,
}: BlogCardProps) {
  return (
    <article className="card flex flex-col overflow-hidden rounded-2xl shadow-card hover:shadow-lg transition-shadow bg-white">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-inline-size: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-xl font-semibold text-slate-900 line-clamp-2">
          {title}
        </h2>
        <p className="text-slate-600 text-sm line-clamp-3">{excerpt}</p>

        <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
          {author?.image && (
            <Image
              src={author.image}
              alt={author.name ?? "Author"}
              width={28}
              height={28}
              className="rounded-full"
            />
          )}
          <span>{author?.name ?? "Unknown"}</span>
          {date && (
            <>
              <span>·</span>
              <time>{new Date(date).toLocaleDateString()}</time>
            </>
          )}
        </div>

        <Link
          href={`/blog/${slug}`}
          className="mt-3 inline-block text-indigo-600 text-sm font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
