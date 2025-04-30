/**
 * Smoothly scrolls to an element with the given ID
 * 
 * @param {string} elementId - The ID of the element to scroll to (without the # symbol)
 * @param {number} offset - Optional offset from the top in pixels (default: 0)
 * @param {number} duration - Animation duration in milliseconds (default: 800)
 */
export const scrollToElement = (elementId, offset = 0, duration = 800) => {
  const element = document.getElementById(elementId);
  
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;
  
  const startTime = performance.now();
  const startPosition = window.pageYOffset;
  
  const ease = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // Cubic easing
  };
  
  const animateScroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = ease(progress);
    
    window.scrollTo(0, startPosition + (offsetPosition - startPosition) * easeProgress);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  
  requestAnimationFrame(animateScroll);
};