'use client'

import './globals.css'
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          {/* <Link href="\another">another</Link>
          <Link href="\about">about</Link> */}
        </nav>
        {children}
      </body>
    </html>
  )
}
