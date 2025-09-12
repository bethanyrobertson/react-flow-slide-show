import React, { useState, useEffect } from 'react';
import { useFullscreen } from './FullscreenContext';

interface SlideWrapperProps {
  children: React.ReactNode;
  onFullscreenChange?: (isFullscreen: boolean) => void;
  navigationControls?: React.ReactNode;
  slideId?: string;
}

export default function SlideWrapper({ children, onFullscreenChange, navigationControls, slideId }: SlideWrapperProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { setIsAnySlideFullscreen, fullscreenSlideId, setFullscreenSlideId } = useFullscreen();

  useEffect(() => {
    if (onFullscreenChange) {
      onFullscreenChange(isFullscreen);
    }
  }, [isFullscreen, onFullscreenChange]);

  // Auto-enter fullscreen when this slide becomes the fullscreen slide
  useEffect(() => {
    if (slideId && fullscreenSlideId === slideId && !isFullscreen) {
      setIsFullscreen(true);
      setIsAnySlideFullscreen(true);
    } else if (slideId && fullscreenSlideId !== slideId && isFullscreen) {
      setIsFullscreen(false);
    }
  }, [slideId, fullscreenSlideId, isFullscreen, setIsAnySlideFullscreen]);

  const handleClick = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      setIsAnySlideFullscreen(true);
      if (slideId) {
        setFullscreenSlideId(slideId);
      }
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen(false);
    setIsAnySlideFullscreen(false);
    setFullscreenSlideId(null);
  };

  return (
    <div 
      className={`h-full w-full overflow-hidden flex items-center justify-center transition-all duration-300 ${
        isFullscreen 
          ? 'fixed inset-0 z-50 p-8' 
          : 'relative cursor-pointer'
      }`}
      style={{
        backgroundColor: isFullscreen ? '#f0f0f0' : 'transparent',
        transform: isFullscreen ? 'scale(1)' : 'scale(1)'
      }}
      onClick={handleClick}
    >
      <div className={`h-full w-full overflow-auto flex items-center justify-center ${
        isFullscreen ? 'max-w-[90vw] max-h-[90vh] mx-auto' : ''
      }`}>
        <div className={`flex items-center justify-center ${
          isFullscreen ? 'w-full h-full max-w-full max-h-full' : 'w-full h-full'
        }`}>
          {children}
        </div>
      </div>
      {isFullscreen && (
        <button
          className="absolute top-4 right-4 z-10 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors"
          onClick={handleClose}
        >
          ✕
        </button>
      )}
      {navigationControls && (
        <div className={`absolute top-32 right-4 z-10 max-w-[200px] ${
          isFullscreen ? '' : 'opacity-80 hover:opacity-100 transition-opacity'
        }`}>
          {navigationControls}
        </div>
      )}
    </div>
  );
}
