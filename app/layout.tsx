import type React from "react"
import type { Metadata } from "next"
import { Manrope, Nunito } from "next/font/google"
import { NavigationMenu } from "@/components/navigation-menu"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "FoldRack - Functional Sculpture for Modern Living",
  description: "Smart drying racks that make every inch of space count. Fold Less. Live More.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${manrope.variable} font-sans antialiased`}>
        <SiteHeader />
        <NavigationMenu />
        {children}
      </body>
    </html>
  )
}
