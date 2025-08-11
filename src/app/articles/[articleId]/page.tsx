import Link from 'next/link';
export default function NewsArticle() {
    return (
        <div>
            <h1>News Article Id</h1>
            <p>Reading in language</p>
            <div>
                <Link href="/articles/id?lang=en">English</Link>
                <Link href="/articles/id?lang=hi">Hindi</Link>
                <Link href="/articles/id?lang=ne">Nepali</Link>
            </div>
        </div>
    );
}