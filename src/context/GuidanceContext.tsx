import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Storage keys for client-side persistence only (no server calls, no PII)
const WELCOME_STORAGE_KEY = 'axom_one_welcome_dismissed_v1';
const TOUR_STORAGE_KEY = 'axom_one_tour_completed_v1';

export interface GuidanceContextType {
  isWelcomeOpen: boolean;
  isTourActive: boolean;
  currentTourStep: number;
  hasSeenWelcome: boolean;
  hasCompletedTour: boolean;
  activeContextualHelp: string | null;
  openWelcome: () => void;
  closeWelcome: (remember?: boolean) => void;
  startTour: (stepIndex?: number) => void;
  nextTourStep: () => void;
  prevTourStep: () => void;
  skipTour: () => void;
  finishTour: () => void;
  restartTour: () => void;
  setTourStep: (step: number) => void;
  openContextualHelp: (topicId: string) => void;
  closeContextualHelp: () => void;
}

const GuidanceContext = createContext<GuidanceContextType | undefined>(undefined);

export const GuidanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasSeenWelcome, setHasSeenWelcome] = useState<boolean>(() => {
    try {
      return localStorage.getItem(WELCOME_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [hasCompletedTour, setHasCompletedTour] = useState<boolean>(() => {
    try {
      return localStorage.getItem(TOUR_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [isWelcomeOpen, setIsWelcomeOpen] = useState<boolean>(false);
  const [isTourActive, setIsTourActive] = useState<boolean>(false);
  const [currentTourStep, setCurrentTourStep] = useState<number>(0);
  const [activeContextualHelp, setActiveContextualHelp] = useState<string | null>(null);

  // Automatically trigger first-visit welcome panel after smooth initial page render
  useEffect(() => {
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsWelcomeOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [hasSeenWelcome]);

  const openWelcome = useCallback(() => {
    setIsWelcomeOpen(true);
  }, []);

  const closeWelcome = useCallback((remember: boolean = true) => {
    setIsWelcomeOpen(false);
    if (remember) {
      setHasSeenWelcome(true);
      try {
        localStorage.setItem(WELCOME_STORAGE_KEY, 'true');
      } catch {}
    }
  }, []);

  const startTour = useCallback((stepIndex: number = 0) => {
    setIsWelcomeOpen(false);
    setCurrentTourStep(stepIndex);
    setIsTourActive(true);
  }, []);

  const nextTourStep = useCallback(() => {
    setCurrentTourStep((prev) => prev + 1);
  }, []);

  const prevTourStep = useCallback(() => {
    setCurrentTourStep((prev) => Math.max(0, prev - 1));
  }, []);

  const skipTour = useCallback(() => {
    setIsTourActive(false);
    setHasCompletedTour(true);
    setHasSeenWelcome(true);
    try {
      localStorage.setItem(WELCOME_STORAGE_KEY, 'true');
      localStorage.setItem(TOUR_STORAGE_KEY, 'true');
    } catch {}
  }, []);

  const finishTour = useCallback(() => {
    setIsTourActive(false);
    setHasCompletedTour(true);
    setHasSeenWelcome(true);
    try {
      localStorage.setItem(WELCOME_STORAGE_KEY, 'true');
      localStorage.setItem(TOUR_STORAGE_KEY, 'true');
    } catch {}
  }, []);

  const restartTour = useCallback(() => {
    setIsWelcomeOpen(false);
    setCurrentTourStep(0);
    setIsTourActive(true);
  }, []);

  const setTourStep = useCallback((step: number) => {
    setCurrentTourStep(step);
  }, []);

  const openContextualHelp = useCallback((topicId: string) => {
    setActiveContextualHelp(topicId);
  }, []);

  const closeContextualHelp = useCallback(() => {
    setActiveContextualHelp(null);
  }, []);

  return (
    <GuidanceContext.Provider
      value={{
        isWelcomeOpen,
        isTourActive,
        currentTourStep,
        hasSeenWelcome,
        hasCompletedTour,
        activeContextualHelp,
        openWelcome,
        closeWelcome,
        startTour,
        nextTourStep,
        prevTourStep,
        skipTour,
        finishTour,
        restartTour,
        setTourStep,
        openContextualHelp,
        closeContextualHelp,
      }}
    >
      {children}
    </GuidanceContext.Provider>
  );
};

export const useGuidance = (): GuidanceContextType => {
  const context = useContext(GuidanceContext);
  if (!context) {
    throw new Error('useGuidance must be used within a GuidanceProvider');
  }
  return context;
};
