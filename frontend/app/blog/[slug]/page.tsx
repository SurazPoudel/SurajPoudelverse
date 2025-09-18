import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      publishedAt,
      author->{
        name,
        image
      }
    }`,
    { slug }
  );
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return <p>Post not found</p>;

  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
        {post.author?.image && (
          <Image
            src={post.author.image}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <span>{post.author?.name}</span>
        <span>·</span>
        <span>{new Date(post.publishedAt).toDateString()}</span>
      </div>
      <div className="prose">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
