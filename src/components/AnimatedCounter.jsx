import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ endValue, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = endValue / (duration / 16); 
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, endValue, duration]);

  return (
    <div ref={ref} className="counter-container container--column text-center">
      <h2 className="counter">+{count}</h2>
      <p className="label">{label}</p>
    </div>
  );
};

export default AnimatedCounter;

