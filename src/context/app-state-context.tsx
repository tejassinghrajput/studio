// src/context/app-state-context.tsx
'use client';

import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';

type AppStateContextType = {
  isPreloaderFinished: boolean;
  setPreloaderFinished: (finished: boolean) => void;
};

export const AppStateContext = createContext<AppStateContextType>({
  isPreloaderFinished: false, // Default value
  setPreloaderFinished: () => {}, // Placeholder function
});

export const AppStateProvider = ({ children }: { children: ReactNode }) => {
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);

  const setPreloaderFinished = (finished: boolean) => {
    setIsPreloaderFinished(finished);
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    isPreloaderFinished,
    setPreloaderFinished,
  }), [isPreloaderFinished]);


  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  );
};

// Custom hook to use the AppStateContext
export const useAppState = (): AppStateContextType => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
