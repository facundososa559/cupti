import React from 'react'
import DynamicCarousel from './Carousel/DynamicCarousel'
import img1 from "../assets/images/opportunities-images/opportunity-1.png"
import img2 from "../assets/images/opportunities-images/opportunity-2.png"

function OpportunitiesContainer() {
  return (
    <DynamicCarousel 
        images={[
            img1,
            img2
        ]}
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
