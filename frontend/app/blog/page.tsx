import { client } from "@/lib/sanity.client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PortableTextComponent } from "@/components/PortableTextComponent";

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      body,
      publishedAt,
      mainImage{ asset->{url} },
      author->{ name, image }
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
    <article className="max-w-3xl mx-auto px-6 lg:px-8 py-12 prose prose-slate">
      {post.mainImage?.asset?.url && (
        <div className="relative w-full h-72 mb-8">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title ?? "Blog cover image"}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center gap-3 text-sm text-slate-500 mb-10">
        {post.author?.image && (
          <Image
            src={post.author.image}
            alt={post.author.name ?? "Author"}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <span>{post.author?.name ?? "Unknown"}</span>
        <span>·</span>
        <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
      </div>

      <div className="prose prose-indigo max-w-none">
        <PortableText value={post.body} components={PortableTextComponent} />
      </div>
    </article>
  );
}
