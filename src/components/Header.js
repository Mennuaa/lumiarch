import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <header className="header">
    <div className="menu-icon">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <div className="logo-section">
      <img src="/images/logo.png" alt="Logo" className="logo" />
    </div>
    <div className="stars">
      <span className="star">★</span>
      <span className="star">★</span>
      <span className="star">☆</span>
      <span className="star">☆</span>
      <span className="star">☆</span>
    </div>
  </header>
  )
}
