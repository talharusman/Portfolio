"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header>
      <h2>Portfolio</h2>
      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path} className={pathname === route.path ? "active" : ""}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

