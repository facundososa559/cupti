import Button from "../Button";
import DynamicCarousel from "../Carousel/DynamicCarousel";
import DynamicHeading from "./DynamicHeading";
import { useState } from "react";

const Hero = ({ images }) => {
  const headings = [
    "Optimizamos el consumo energético de tu empresa.",
    "Implementamos soluciones en energías renovables.",
    "Diseñamos sistemas industriales con ingeniería al detalle."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <div className="hero-container container--full-height">
      <DynamicCarousel 
        mobileImages={images} 
        desktopImages={images} 
        adaptiveImages={false}
        mode="fade" 
        interval={6000} 
        fullScreen={true} 
        showControls={false} 
        manualControl={false} 
        showIndicators={false}
        onIndexChange={setCurrentIndex} // Escucha los cambios del carrusel 
      />

        <div className="hero-overlay container--absolute container--column container--full">
          <div>
            <div className="container--full-height container--align-center">
              <div className="hero-text-container container--column wrapper">
                <DynamicHeading headings = {headings} currentIndex={currentIndex}/>
                <p>Contamos con servicios especializados en energías renovables, eficiencia energética y diseño industrial.  Si quieres conocer más sobre nosotros y nuestros servicios contáctanos.</p>
                <Button content="Contactarse"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
