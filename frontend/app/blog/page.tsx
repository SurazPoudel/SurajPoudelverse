// frontend/app/blog/[slug]/page.tsx
import { client } from "@/lib/sanity.client";
import Image from "next/image";

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      publishedAt,
      mainImage{
        asset->{url}
      },
      author->{
        name,
        image
      }
    }`,
    { slug }
  );
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (!post) {
    return <p className="text-center text-slate-600">Post not found.</p>;
  }

  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-8 py-12 prose prose-indigo">
      {post.mainImage?.asset?.url && (
        <div className="relative w-full h-72 mb-6">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-slate-500 mb-8">
        {new Date(post.publishedAt).toLocaleDateString()} by{" "}
        {post.author?.name || "Unknown"}
      </p>

      {/* Portable text rendering */}
      <div className="prose prose-slate max-w-none">
        {/* Use next-sanity PortableText if installed */}
        {/* Fallback plain text */}
        <p>{post.body}</p>
      </div>
    </article>
  );
}
