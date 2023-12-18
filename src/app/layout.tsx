export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="es">
        <body>
            <div>Header</div>
            {children}
        </body>
      </html>
    )
  }