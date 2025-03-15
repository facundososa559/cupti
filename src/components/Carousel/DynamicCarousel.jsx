import { useState, useEffect } from "react";
import FadeCarousel from "./FadeCarousel";
import SlideCarousel from "./SlideCarousel";

const DynamicCarousel = ({ 
  images, 
  mode = "fade", // "fade" o "slide"
  interval = 5000, // Tiempo entre cambios
  fullScreen = false, // Define si ocupa toda la pantalla
  showControls = true, // Mostrar botones de navegación
  manualControl = true, // Permitir cambio manual
  showIndicators = true, // Mostrar indicadores (dots)
  enableZoom = false, // Habilitar animación de zoom en imágenes
  overlay
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!Array.isArray(images) || images.length === 0) {
    return <div className="carousel-placeholder">Cargando imágenes...</div>;
  }

  return (
    <div className={`carousel-container ${fullScreen ? "full-screen" : "default-size"}`}>
      <div className="carousel-track">
        {mode === "fade" ? (
          <FadeCarousel images={images} currentIndex={currentIndex} enableZoom={enableZoom} overlay={overlay}/>
        ) : (
          <SlideCarousel images={images} currentIndex={currentIndex} />
        )}
      </div>
      
      {showControls && (
        <div className="carousel-controls">
          {manualControl && (
            <button onClick={prevSlide} className="carousel-button left">◀</button>
          )}
          {manualControl && (
            <button onClick={nextSlide} className="carousel-button right">▶</button>
          )}
        </div>
      )}
      
      {showIndicators && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DynamicCarousel;