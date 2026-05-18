"use client";


import { useState } from "react";
import "./css/Navbar.css";
import Link from "next/link";


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar container">
      <Link href="/">
        <img
          className="logo"
          src="/images/ab_scontornato.png"
          alt="Home"
        />
      </Link>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Apri menu"
      >
        ☰
      </button>

      <div className={`navLinks ${menuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">Chi sono</a>
        <a href="https://www.immobiliare.it/agenzie-immobiliari/171836/studio-liberty-orbassano/" target="_blank">Immobili</a>
        <a href="/contact">Contatti</a>
      </div>
    </nav>
  )
}