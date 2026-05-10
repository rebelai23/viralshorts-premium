import React from 'react';

const useScrollAnimation = () => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
};

const AnimatedSection = ({ children, className = "", delay = 0, style = {} }) => {
  const [ref, isVisible] = useScrollAnimation();
  const baseStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
    ...style
  };
  return <div ref={ref} style={baseStyle} className={className}>{children}</div>;
};

export default AnimatedSection;