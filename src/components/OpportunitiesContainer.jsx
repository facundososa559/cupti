import React from 'react'
import DynamicCarousel from './Carousel/DynamicCarousel'

/* Desktop images */
import desktopImg2 from "../assets/images/opportunities-images/desktop/opportunity-2.png"
import desktopImg3 from "../assets/images/opportunities-images/desktop/opportunity-3.jpeg"
import desktopImg4 from "../assets/images/opportunities-images/desktop/opportunity-4.jpeg"
import desktopImg5 from "../assets/images/opportunities-images/desktop/opportunity-5.jpeg"

/* Mobile images */
import mobileImg1 from "../assets/images/opportunities-images/mobile/opportunity-1.jpeg"
import mobileImg2 from "../assets/images/opportunities-images/mobile/opportunity-2.jpeg"
import mobileImg3 from "../assets/images/opportunities-images/mobile/opportunity-3.jpeg"

function OpportunitiesContainer() {
  const desktopImages=[
    desktopImg2,
    desktopImg3,
    desktopImg4,
    desktopImg5,
  ]

  const mobileImages = [
    mobileImg1,
    mobileImg2,
    mobileImg3,
  ]
  
  return (
    <DynamicCarousel 
        mobileImages={mobileImages} 
        desktopImages={desktopImages} 
        adaptiveImages={true}
        mode="slide" 
        interval={4000} 
        fullScreen={false} 
        showControls={false} 
        manualControl={false} 
        showIndicators={false} 
        enableZoom={false} 
    />
  )
}

export default OpportunitiesContainer
