import { Metadata } from "next"
import LoadingIndicator from "./loading-indicator"
import HoverPrefetchLink from './hover-prefetch-link'



export const metadata: Metadata = {
  title: "UI Components",
  description: "Demo of custom UI components",
}

export default function UIPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">UI Components Demo</h1>

      {/* Loading Indicator Example */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Loading Indicator</h2>
        <div className="flex items-center space-x-2">
          <span>Try navigating with a link →</span>
          <LoadingIndicator slug="example-slug" title="Example Title" />
        </div>
      </section>

      {/* Hover Prefetch Link Example */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Hover Prefetch Link</h2>
        <HoverPrefetchLink href="/blog">
          Go to Blog
        </HoverPrefetchLink>
      </section>
    </div>
  )
}
