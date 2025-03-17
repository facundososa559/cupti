import { useState, useEffect } from "react";
import FadeCarousel from "./FadeCarousel";
import SlideCarousel from "./SlideCarousel";

const DynamicCarousel = ({ 
  mobileImages,
  desktopImages,
  adaptiveImages = false, 
  mode = "fade",
  interval = 5000,
  fullScreen = false,
  showControls = true,
  manualControl = true,
  showIndicators = true,
  enableZoom = false,
  onIndexChange
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [activeImages, setActiveImages] = useState(desktopImages);

  /* Maneja las imágenes que muestra dependiendo del tamaño del viewport */
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setViewportWidth(newWidth);

      if (adaptiveImages) {
        setActiveImages(newWidth < 768 ? mobileImages : desktopImages);
        setCurrentIndex(0);
      }
    };

    if (adaptiveImages) {
      window.addEventListener("resize", handleResize);
    }
  
    return () => {
      if (adaptiveImages) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [mobileImages, desktopImages, adaptiveImages]);

  /* Se encarga de los cambios automáticos de imagen */
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activeImages.length);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [activeImages.length, interval]);

  /* Actualiza el estado en el padre */
  useEffect(() => {
    if (onIndexChange) {
      onIndexChange(currentIndex);
    }
  }, [currentIndex, onIndexChange]); // Solo se ejecuta cuando `currentIndex` cambia

  /* Se encarga de los cambios de imagen */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activeImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + activeImages.length) % activeImages.length
    );
  };

  if (!Array.isArray(activeImages) || activeImages.length === 0) {
    return <div className="carousel-placeholder">Cargando imágenes...</div>;
  }

  return (
    <div className={`carousel-container ${fullScreen ? "full-screen" : "default-size"}`}>
      <div className="carousel-track">
        {mode === "fade" ? (
          <FadeCarousel images={activeImages} currentIndex={currentIndex} enableZoom={enableZoom}/>
        ) : (
          <SlideCarousel images={activeImages} currentIndex={currentIndex} />
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
          {activeImages.map((_, index) => (
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
