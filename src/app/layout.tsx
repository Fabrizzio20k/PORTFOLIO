import { Navbar } from "@/components"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="es">
        <body>
            <Navbar />
            {children}
        </body>
      </html>
    )
  }