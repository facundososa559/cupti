import { useState, useEffect } from "react";
import {motion} from "framer-motion"

const DynamicHeading = ({ headings }) => {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [headings.length]);

  useEffect(() => {
    if (currentHeadingIndex >= headings.length) {
      setCurrentHeadingIndex(0);
    }
  }, [headings, currentHeadingIndex]);

  return (
    <motion.h1
      key={currentHeadingIndex} // Clave única para activar animación en cada cambio
      className="heading"
      initial={{ opacity: 0 }} // Empieza con opacidad 0 y un poco abajo
      animate={{ opacity: 1}} // Se vuelve visible y sube a su posición
      exit={{ opacity: 0}} // Se desvanece hacia arriba al salir
      transition={{ duration: 0.5, ease: "easeInOut" }} // Suaviza la animación
    >
      {headings[currentHeadingIndex]}
    </motion.h1>
  );
};

export default DynamicHeading;