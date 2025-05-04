// src/context/theme-context.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

// --- Predefined Themes ---
// HSL values as strings: "H S% L%"
type ThemeVariables = {
  '--background': string;
  '--foreground': string;
  '--card': string;
  '--card-foreground': string;
  '--popover': string;
  '--popover-foreground': string;
  '--primary': string;
  '--primary-foreground': string;
  '--secondary': string;
  '--secondary-foreground': string;
  '--muted': string;
  '--muted-foreground': string;
  '--accent': string;
  '--accent-foreground': string;
  '--destructive': string;
  '--destructive-foreground': string;
  '--border': string;
  '--input': string;
  '--ring': string;
  '--radius': string;
  '--hover-glow': string;
  '--chart-1': string;
  '--chart-2': string;
  '--chart-3': string;
  '--chart-4': string;
  '--chart-5': string;
};

type Theme = {
  name: string;
  cssVars: Partial<ThemeVariables>; // Allow partial overrides for themes
};

// Helper to generate derived colors (simple example)
const deriveColors = (primary: string, accent: string, background: string): Partial<ThemeVariables> => {
    const primaryHsl = parseHsl(primary);
    const accentHsl = parseHsl(accent);
    const backgroundHsl = parseHsl(background);

    if (!primaryHsl || !accentHsl || !backgroundHsl) return {};

    const isDark = backgroundHsl.l < 50;
    const foregroundLight = '210 40% 98%'; // Slate-50
    const foregroundDark = '217 33% 11%'; // BlueGray-900 (example)
    const foreground = isDark ? foregroundLight : foregroundDark;
    const primaryForeground = primaryHsl.l > 50 ? foregroundDark : foregroundLight; // Contrast for primary
    const accentForeground = accentHsl.l > 50 ? foregroundDark : foregroundLight; // Contrast for accent

    // Card/Popover/Secondary/Muted/Border/Input often derived from background
    const subtleOffset = isDark ? 5 : -5; // Adjust lightness slightly
    const subtleColor = `${backgroundHsl.h} ${backgroundHsl.s}% ${Math.min(100, Math.max(0, backgroundHsl.l + subtleOffset))}%`;
    const mutedForeground = `${backgroundHsl.h} ${backgroundHsl.s - 10}% ${Math.min(100, Math.max(0, backgroundHsl.l + (isDark ? 40 : -40)))}%`; // Less saturated, adjusted lightness

    return {
      '--background': background,
      '--foreground': foreground,
      '--card': subtleColor,
      '--card-foreground': foreground,
      '--popover': subtleColor,
      '--popover-foreground': foreground,
      '--primary': primary,
      '--primary-foreground': primaryForeground,
      '--secondary': subtleColor,
      '--secondary-foreground': foreground,
      '--muted': subtleColor,
      '--muted-foreground': mutedForeground,
      '--accent': accent,
      '--accent-foreground': accentForeground,
      '--border': subtleColor,
      '--input': subtleColor,
      '--ring': accent, // Use accent for ring usually
      '--hover-glow': `${accentHsl.h} ${Math.min(100, accentHsl.s + 10)}% ${Math.min(100, accentHsl.l + 15)}%`, // Brighter accent for glow
       // Chart colors derived from primary/accent/foreground/muted
      '--chart-1': primary,
      '--chart-2': accent,
      '--chart-3': foreground,
      '--chart-4': mutedForeground,
      '--chart-5': background,
    };
};

// Helper to parse "H S% L%" string
const parseHsl = (hslString: string): { h: number; s: number; l: number } | null => {
    const match = hslString.match(/(\d+)\s+(\d+)%\s+(\d+)%/);
    if (!match) return null;
    return { h: parseInt(match[1]), s: parseInt(match[2]), l: parseInt(match[3]) };
};

// Helper to convert Hex to HSL string "H S% L%"
function hexToHSLString(hex: string): string | null {
  hex = hex.replace(/^#/, '');
  if (!/^[0-9A-F]{6}$/i.test(hex)) return null; // Invalid hex

  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
}


// Default Theme - aligned with initial globals.css
const defaultTheme: Theme = {
  name: 'Default Dark',
  cssVars: {
    '--background': '217 33% 11%', // #0F172A
    '--foreground': '210 40% 98%', // #F8FAFC
    '--card': '215 39% 17%', // #1E293B
    '--card-foreground': '210 40% 98%',
    '--popover': '215 39% 17%',
    '--popover-foreground': '210 40% 98%',
    '--primary': '203 92% 60%', // #38BDF8 Sky-400
    '--primary-foreground': '217 33% 11%', // High contrast
    '--secondary': '215 39% 17%',
    '--secondary-foreground': '210 40% 98%',
    '--muted': '215 39% 17%',
    '--muted-foreground': '215 16% 65%', // #94A3B8 Slate-400
    '--accent': '203 92% 60%', // #38BDF8 Sky-400
    '--accent-foreground': '217 33% 11%',
    '--destructive': '0 84.2% 60.2%', // Default Red
    '--destructive-foreground': '0 0% 98%',
    '--border': '215 39% 17%', // #1E293B Slate-800
    '--input': '215 39% 17%',
    '--ring': '203 92% 60%', // Sky-400
    '--radius': '0.5rem',
    '--hover-glow': '200 95% 76%', // #7DD3FC Sky-300
    '--chart-1': '203 92% 60%',
    '--chart-2': '200 95% 76%',
    '--chart-3': '210 40% 98%',
    '--chart-4': '215 16% 65%',
    '--chart-5': '217 33% 11%',
  }
};

const predefinedThemes: Theme[] = [
  defaultTheme,
  {
    name: 'Midnight Rose',
    cssVars: deriveColors('330 80% 65%', '0 80% 70%', '260 20% 15%'), // Pink primary, Red accent, Dark Purple background
  },
  {
    name: 'Emerald Forest',
    cssVars: deriveColors('145 60% 45%', '160 70% 35%', '150 15% 18%'), // Teal primary, Dark Green accent, Dark Green/Gray background
  },
  {
    name: 'Golden Hour',
    cssVars: deriveColors('45 90% 60%', '30 95% 55%', '35 30% 20%'), // Gold primary, Orange accent, Warm Brown background
  },
  {
    name: 'Cyber Neon',
    cssVars: deriveColors('270 90% 65%', '190 100% 50%', '240 50% 10%'), // Purple primary, Cyan accent, Very Dark Blue background
  },
   {
    name: 'Ocean Breeze',
    cssVars: deriveColors('210 80% 60%', '180 75% 55%', '220 30% 95%'), // Blue primary, Teal accent, Very Light Blue/Gray background
   },
    {
     name: 'Crimson Night',
     cssVars: deriveColors('0 70% 55%', '340 80% 60%', '0 10% 12%'), // Red primary, Deep Pink accent, Very Dark Gray/Black background
   },
];

// --- Theme Context ---

type CustomColors = {
  primary: string; // Hex format #RRGGBB
  accent: string; // Hex format #RRGGBB
  background: string; // Hex format #RRGGBB
};

type ThemeContextType = {
  themes: Theme[];
  currentTheme: Theme | null;
  applyTheme: (themeName: string) => void;
  applyCustomTheme: (colors: CustomColors) => void;
  customColors: CustomColors;
  setCustomColors: React.Dispatch<React.SetStateAction<CustomColors>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme | null>(null);
  const [customColors, setCustomColors] = useState<CustomColors>({
    primary: '#38BDF8', // Default Sky-400
    accent: '#7DD3FC', // Default Sky-300 (for hover glow base)
    background: '#0F172A', // Default BlueGray-900
  });

  // Apply theme CSS variables to the root element
   const applyCssVariables = useCallback((vars: Partial<ThemeVariables>) => {
    const root = document.documentElement;
    if (!root) return;

    Object.entries(vars).forEach(([key, value]) => {
      if (value) {
         // Check if value is already HSL string
         if (typeof value === 'string' && /^\d+\s+\d+%?\s+\d+%?$/.test(value)) {
            root.style.setProperty(key, value);
         } else if (typeof value === 'string' && value.startsWith('#')) {
            // Convert hex to HSL if needed (though we should store as HSL)
            const hslValue = hexToHSLString(value);
            if (hslValue) {
                root.style.setProperty(key, hslValue);
            }
         } else {
             // Directly set if it's another valid CSS value (like '0.5rem')
             root.style.setProperty(key, value);
         }
      }
    });
   }, []);


   // Apply a predefined theme by name
   const applyTheme = useCallback((themeName: string) => {
       const themeToApply = predefinedThemes.find(t => t.name === themeName);
       if (themeToApply) {
         setCurrentTheme(themeToApply);
         applyCssVariables(themeToApply.cssVars);
          localStorage.setItem('selectedTheme', themeName);
          localStorage.removeItem('customThemeColors'); // Clear custom colors when applying predefined
       }
     }, [applyCssVariables]);


    // Apply custom theme based on hex colors
    const applyCustomTheme = useCallback((colors: CustomColors) => {
        const primaryHSL = hexToHSLString(colors.primary);
        const accentHSL = hexToHSLString(colors.accent);
        const backgroundHSL = hexToHSLString(colors.background);

        if (primaryHSL && accentHSL && backgroundHSL) {
          const derivedVars = deriveColors(primaryHSL, accentHSL, backgroundHSL);
          const customThemeConfig: Theme = {
            name: 'Custom',
            cssVars: {
                 ...defaultTheme.cssVars, // Start with defaults like radius
                 ...derivedVars, // Override with derived colors
            },
          };
          setCurrentTheme(customThemeConfig); // Set 'Custom' as current
          applyCssVariables(customThemeConfig.cssVars);
          localStorage.setItem('customThemeColors', JSON.stringify(colors));
           localStorage.removeItem('selectedTheme'); // Clear selected theme name
        } else {
          console.error("Invalid custom hex colors provided.");
        }
      }, [applyCssVariables]);


  // Load theme from local storage on initial mount
  useEffect(() => {
      const savedThemeName = localStorage.getItem('selectedTheme');
      const savedCustomColors = localStorage.getItem('customThemeColors');

      if (savedCustomColors) {
         try {
           const parsedColors: CustomColors = JSON.parse(savedCustomColors);
           setCustomColors(parsedColors); // Update state first
           applyCustomTheme(parsedColors); // Then apply the theme
         } catch (e) {
            console.error("Failed to parse custom theme colors from storage.", e);
            applyTheme(defaultTheme.name); // Fallback to default
         }
      } else if (savedThemeName) {
        applyTheme(savedThemeName);
      } else {
        applyTheme(defaultTheme.name); // Apply default theme if nothing saved
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Run only once on mount

    // Effect to apply custom theme when customColors state changes
    useEffect(() => {
       // Only apply if no predefined theme is selected
       if (!localStorage.getItem('selectedTheme')) {
         applyCustomTheme(customColors);
       }
     }, [customColors, applyCustomTheme]);

  return (
    <ThemeContext.Provider value={{ themes: predefinedThemes, currentTheme, applyTheme, applyCustomTheme, customColors, setCustomColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
