import React from 'react'
import Hero from "./Hero.jsx"
import img1 from "../../assets/images/hero-backrounds/hero-background-1.svg"
import img2 from "../../assets/images/hero-backrounds/hero-background-2.svg"
import img3 from "../../assets/images/hero-backrounds/hero-background-3.svg"

function HeroContainer() {
  return (
      <Hero 
        images = {[
            img1,
            img2,
            img3
          ]}
      />
  )
}

export default HeroContainer
