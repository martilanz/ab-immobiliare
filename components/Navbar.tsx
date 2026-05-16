"use client";


import { useState } from "react";
import "./css/Navbar.css";


export default function Navbar() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar container">
      <img className="logo" src="\images\ab_scontornato.png"></img>

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
        <a href="/contact">Contatti</a>
      </div>
    </nav>
  )
}