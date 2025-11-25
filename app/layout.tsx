import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cristovão Junior - Web Designer Profissional",
  description:
    "Crio websites personalizados e estratégicos para empresas e profissionais. Design moderno, responsivo e focado em conversão.",
  keywords: "web designer, websites, design responsivo, conversão, Brasil",
  authors: [{ name: "Cristovão Junior" }],
  viewport: "width=device-width, initial-scale=1",
  generator: 'v0.dev',
  icons: {
    icon: '/logo-no.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
