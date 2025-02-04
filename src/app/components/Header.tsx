"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"

const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div className="header-content">
        <h2>Portfolio</h2>
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>
      </div>
      <nav className={isMenuOpen ? "open" : ""}>
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={pathname === route.path ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

