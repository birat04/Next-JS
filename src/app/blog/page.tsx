import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Page"
};

export default async function BlogPage() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return <h1>Blog Page</h1>;
}
