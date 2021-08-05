import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero: React.FC<{ isBannerVisible: boolean }> = ({ isBannerVisible }) => {
  return (
    <header className="hero">
      {isBannerVisible && (
        <StaticImage
          src="../assets/hero.png"
          placeholder="blurred"
          className="hero-person"
          alt="אנשים בונים פרונט יחד"
        />
      )}
    </header>
  )
}

export default Hero
