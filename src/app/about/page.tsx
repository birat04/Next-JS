import { Metadata } from 'next'
import  LocaleSwitcher  from '../ui/locale-switcher'



export const metadata: Metadata = {
  title: 'About',
  description: 'About Page',
}

export default function AboutPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>This is the About page of your Next.js app.</p>

      {/* Locale switcher */}
      <LocaleSwitcher />
    </div>
  )
}
