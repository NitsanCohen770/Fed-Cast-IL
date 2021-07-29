import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo-background.jpg'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
const Navbar = ({ setIsOpen }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button
            className="toggle-btn"
            onClick={() => setIsOpen(prevState => !prevState)}
          >
            <FaBars />
          </button>
          <Link to="/" className="nav-logo">
            Fed Cast IL
          </Link>
        </div>
        <Links styleClass="nav-links" />
        <SocialLinks styleClass="nav-icons" />
      </div>
    </nav>
  )
}

export default Navbar
