import Link from 'next/link';
import {use} from 'react'
export default  function NewsArticle({params, searchParams}:{
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang?: "en" | "hi" | "ne" }>
}) {
    const { articleId } =  use(params);
    const { lang = "en" } =  use(searchParams);
    return (
        <div>
            <h1>News Article {articleId}</h1>
            <p>Reading in language: {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=hi`}>Hindi</Link>
                <Link href={`/articles/${articleId}?lang=ne`}>Nepali</Link>
            </div>
        </div>
    );
}