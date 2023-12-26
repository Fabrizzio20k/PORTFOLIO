import { Navbar } from "@/components"
import { Footer } from "@/components"
import { Metadata } from 'next'
import "@/styles/global.css"

export const metadata: Metadata = {
  title: 'Fabrizzio Vilchez | Full Stack Developer',
  description: 'The personal website of Fabrizzio Vilchez, a full stack developer based in Lima, Perú.',
  keywords: 'Fabrizzio Vilchez, Fabrizzio, Vilchez, Fabrizzio20k, Fabrizzio Vilchez Espinoza, Fabrizzio Desarrollador, Full Stack Developer',
  icons: [
    {
      url: '/icon.ico',
      href: '/icon.ico',
      rel: 'icon',
    },
  ],
  authors: [
    {
      name: 'Fabrizzio Vilchez',
    },
  ],
  robots: 'follow, index',
  generator: 'NextJS'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}