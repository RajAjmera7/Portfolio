import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/ui/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raj Ajmera | Web Developer & MERN Stack Developer',
  description: 'Portfolio of Raj Ajmera - Final year Computer Engineering student specializing in MERN Stack, Next.js, and modern web development.',
  keywords: 'Raj Ajmera, Web Developer, MERN Stack, Next.js, React, Node.js, Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
