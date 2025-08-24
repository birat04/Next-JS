

type PageProps<T extends string> = {
  params: {
    slug: string;
  };
};

export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = props.params;
  return <h1>Blog post: {slug}</h1>;
}