import { motion, AnimatePresence } from "framer-motion";

const SlideCarousel = ({ images, currentIndex }) => {
  return (
    <AnimatePresence initial={false}>
      {images.length > 0 && images[currentIndex] ? (
        <motion.div
          key={currentIndex}
          className="carousel-slide"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SlideCarousel;