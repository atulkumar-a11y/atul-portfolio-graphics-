import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import "./styles/FloatingCTA.css";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (totalHeight > 0) {
        const scrollPercentage = (scrollY / totalHeight) * 100;
        setIsVisible(scrollPercentage >= 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`floating-cta-wrapper ${isVisible ? "visible" : ""}`}>
      <div className="floating-cta-anim">
        <a
          href="/Atul_Kumar_Resume.pdf"
          download="Atul_Kumar_Resume.pdf"
          className="floating-cta"
          aria-label="Download Resume"
        >
          <span className="cta-text">Download Resume</span>
          <FaDownload className="cta-icon" />
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
