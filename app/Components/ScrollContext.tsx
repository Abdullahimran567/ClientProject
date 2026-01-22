'use client';

import React, { createContext, useContext, useCallback } from 'react';

interface ScrollContextType {
  scrollToForm: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollToForm = useCallback(() => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollToForm }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
}

