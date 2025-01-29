import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./AnimatedText.css"; // Import styles

const AnimatedText = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementRef.current, {
      strings: [
        "<i>First</i> sentence.",
        "&amp; a second sentence.",
      ],
      typeSpeed: 50, 
      backSpeed: 30, 
      loop: true,    
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="animated-text">
      <span ref={elementRef}></span>
    </div>
  );
};

export default AnimatedText;
