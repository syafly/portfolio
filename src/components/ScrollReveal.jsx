import { useEffect, useRef, useState } from "react";

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
  direction = "up",
  easing = "ease-out"
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef(null);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Intersection observer for visibility
  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "-20px 0px"
      }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [reducedMotion]);

  // Direction transform styles
  const getDirectionStyle = () => {
    if (isVisible) return "translate-x-0 translate-y-0 scale-100 opacity-100";
    switch (direction) {
      case "up":
        return "translate-y-12 opacity-0";
      case "down":
        return "-translate-y-12 opacity-0";
      case "left":
        return "translate-x-12 opacity-0";
      case "right":
        return "-translate-x-12 opacity-0";
      case "zoom":
        return "scale-95 opacity-0";
      default:
        return "translate-y-12 opacity-0";
    }
  };

  // If reduced motion, render children without wrapper
  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <div
      ref={ref}
      className={`transition-all ${easing} ${getDirectionStyle()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${isVisible ? delay : 0}ms`
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
