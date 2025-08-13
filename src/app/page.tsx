import Link from 'next/link'; 

export default function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <p>Welcome to the home page.</p>
            <Link href="/blog">Blog</Link> 
            <Link href="/products">Products</Link>
            <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
            <Link href="/articles/breaking-news-123?lang=hi">Read in Hindi</Link>
            <Link href="/articles/breaking-news-123?lang=ne">Read in Nepali</Link>
        </>
    );
}