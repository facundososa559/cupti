import { motion, AnimatePresence } from "framer-motion";

const FadeCarousel = ({ images, currentIndex, enableZoom, overlay }) => {
  
  return (
    <AnimatePresence initial={false}>
      {images.length > 0 && images[currentIndex] ? (
        <motion.div
          key={currentIndex}
          className="carousel-slide fade"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          initial={{ opacity: 0, scale: enableZoom ? 1.1 : 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: enableZoom ? 1.1 : 1 }}
          transition={{ duration: 1.5 }}
        >
          {overlay}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default FadeCarousel;