'use client'

import { usePathname } from 'next/navigation'

export default function LocaleSwitcher() {
  const pathname = usePathname()

  function switchLocale(locale: string) {
    const newPath = `/${locale}${pathname}`
    window.history.replaceState(null, '', newPath)
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale('en')}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        English
      </button>
      <button
        onClick={() => switchLocale('fr')}
        className="px-3 py-1 bg-green-500 text-white rounded"
      >
        French
      </button>
    </div>
  )
}
