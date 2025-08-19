import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [highlightedElement, setHighlightedElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const highlightable = target.closest('[data-highlight]');

      if (highlightable instanceof HTMLElement) {
        if (highlightedElement !== highlightable) {
          setHighlightedElement(highlightable);
        }
      } else {
        if (highlightedElement !== null) {
          setHighlightedElement(null);
        }
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [highlightedElement]);

  const highlightRect = highlightedElement?.getBoundingClientRect();

  return (
    <>
      <div 
        className={`hidden md:block fixed w-3 h-3 bg-blue-400 rounded-full z-[110] pointer-events-none transition-all duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'} ${highlightedElement ? 'scale-0' : 'scale-100'}`}
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`,
        }}
      />
      <div
        className="hidden md:block fixed z-[109] pointer-events-none rounded-md bg-gradient-to-r from-green-300 via-blue-200 to-purple-300 mix-blend-multiply"
        style={{
          opacity: highlightRect ? 1 : 0,
          width: `${(highlightRect?.width ?? 0) + 8}px`,
          height: `${(highlightRect?.height ?? 0) + 4}px`,
          top: `${(highlightRect?.top ?? 0) - 2}px`,
          left: `${(highlightRect?.left ?? 0) - 4}px`,
          transform: `scale(${highlightRect ? 1 : 0.8})`,
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          willChange: 'width, height, top, left, transform, opacity',
        }}
      />
    </>
  );
};

export default Cursor;
