// src/components/preloader.tsx
"use client";

import { useState, useEffect, useContext } from 'react'; // Import useContext
import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from 'lucide-react'; // Or your preferred loading icon
import { AppStateContext } from '@/context/app-state-context'; // Import context

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const { setPreloaderFinished } = useContext(AppStateContext); // Get setter from context

  useEffect(() => {
    // Simulate loading time or wait for actual content readiness
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (setPreloaderFinished) {
          setPreloaderFinished(true); // Update context state
      }
    }, 1000); // Adjust duration as needed (e.g., 1000ms = 1 second)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPreloaderFinished]); // Add setPreloaderFinished to dependency array

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }} // Fade out smoothly
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md" // High z-index, blurred background
          aria-live="polite" // Inform screen readers about loading state
          aria-busy="true"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.2, type: 'spring', stiffness: 150 } }}
            exit={{ scale: 0.8, opacity: 0 }} // Exit animation for the icon
          >
            <Loader className="h-12 w-12 animate-spin text-primary" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
