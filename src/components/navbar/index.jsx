"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Home from "../../assets/Home.jpg"
import "./style.scss"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      <div className="logo">
        <Image
          src={Home}
          alt="Profile"
          width={50}
          height={50}
          className="avatar"
        />
      </div>

      {/* Hamburger (mobile only) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            href="#home"
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <button className="contactBtn">Contact</button>
        </li>
      </ul>
    </nav>
  )
}
