interface Post {
  slug: string;
  title: string;
  content: string;
}

export async function generateStaticParams() {
  const posts: Post[] = await fetch("https://.../posts").then(res => res.json());
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://.../posts/${params.slug}`).then(res => res.json());

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
