'use client'

import Link, { useLinkStatus } from 'next/link'
import { useId } from 'react'

function InlineLoadingIndicator() {
  const { pending } = useLinkStatus()
  const id = useId()

  if (!pending) return null 

  return (
    <span className="ml-2 inline-block loader" aria-labelledby={id}>
      <style jsx>{`
        .loader {
          width: 14px;
          height: 14px;
          border: 2px solid #ccc;
          border-top: 2px solid #222;
          border-radius: 50%;

          opacity: 0;
          animation:
            fadeIn 300ms 100ms forwards,
            rotate 1s linear infinite;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes rotate {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </span>
  )
}

export default function BlogLink({ slug, title }: { slug: string; title: string }) {
  return (
    <Link href={`/blog/${slug}`} className="flex items-center">
      {title}
      <InlineLoadingIndicator />
    </Link>
  )
}
