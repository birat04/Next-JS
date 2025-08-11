"use client";
import Link from 'next/link';
import { usePathname as useNextPathname } from 'next/navigation';
import "./styles.css";

const navLinks = [
  {name:"Register", href:"/register"},
  {name:"Login", href:"/login"},
  {name:"Forgot Password", href:"/forgot-password"},
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathame = usePathname();
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#222', color: '#fff' }}>
          <nav>
            <h1 style={{ margin: 0 }}>My App</h1>
            <ul>
              {navLinks.map((link) => {
                const isActive = pathame === link.href || (pathame.startsWith(link.href) && link.href !== "/");
                return (
                  <li key={link.name}>
                    <Link className={isActive ? "font-bold text-blue-500" : "text-gray-500"} href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        <main style={{ minHeight: '80vh', padding: '2rem' }}>
          {children}
        </main>
        <footer style={{ padding: '1rem', background: '#222', color: '#fff', textAlign: 'center' }}>
          &copy; 2025 My App. All rights reserved.
        </footer>
      </body>
    </html> 
  )
}
function usePathname() {
  return useNextPathname();
}

