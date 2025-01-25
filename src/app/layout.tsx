import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Talha Rusman Portfolio",
  description: "Web Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

