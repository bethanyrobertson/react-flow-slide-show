import React, { createContext, useContext, useState } from 'react';

interface FullscreenContextType {
  isAnySlideFullscreen: boolean;
  setIsAnySlideFullscreen: (value: boolean) => void;
  fullscreenSlideId: string | null;
  setFullscreenSlideId: (slideId: string | null) => void;
}

const FullscreenContext = createContext<FullscreenContextType | undefined>(undefined);

export const useFullscreen = () => {
  const context = useContext(FullscreenContext);
  if (context === undefined) {
    throw new Error('useFullscreen must be used within a FullscreenProvider');
  }
  return context;
};

export const FullscreenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAnySlideFullscreen, setIsAnySlideFullscreen] = useState(false);
  const [fullscreenSlideId, setFullscreenSlideId] = useState<string | null>(null);

  return (
    <FullscreenContext.Provider value={{ 
      isAnySlideFullscreen, 
      setIsAnySlideFullscreen, 
      fullscreenSlideId, 
      setFullscreenSlideId 
    }}>
      {children}
    </FullscreenContext.Provider>
  );
};
