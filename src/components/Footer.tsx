import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import SocialLinks from '../constants/socialLinks'
const Footer: React.FC<{}> = () => {
  return (
    <footer className="footer">
      <SocialLinks styleClass="footer-icons" />
      <p>
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://www.linkedin.com/in/nitsan-cohen/">
          NC web development
        </a>{' '}
        built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
