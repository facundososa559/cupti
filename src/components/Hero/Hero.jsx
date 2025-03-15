import Button from "../Button";
import DynamicCarousel from "../Carousel/DynamicCarousel";

const Hero = ({ images }) => {
  return (
    <div className="hero-container container--full-height">
      <DynamicCarousel 
        images={images} 
        mode="fade" 
        interval={4000} 
        fullScreen={true} 
        showControls={false} 
        manualControl={false} 
        showIndicators={false} 
        overlay={
            <div className="hero-overlay container--absolute container--column container--full">
            <div>
              <div className="container--full-height container--align-center">
                <div className="hero-text-container container--column wrapper">
                  <h1 className="heading">Optimizamos el consumo energético de tu empresa.</h1>
                  <p>Contamos con servicios especializados en energías renovables, eficiencia energética y diseño industrial.  Si quieres conocer más sobre nosotros y nuestros servicios contáctanos.</p>
                  <Button content="Contactarse"/>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Hero;
