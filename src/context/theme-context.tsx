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
   // Add sidebar variables if they need to be themed
  '--sidebar-background'?: string;
  '--sidebar-foreground'?: string;
  '--sidebar-border'?: string;
  '--sidebar-ring'?: string;
  '--sidebar-accent'?: string;
  '--sidebar-accent-foreground'?: string;
};

export type Theme = {
  name: string;
  cssVars: Partial<ThemeVariables>; // Allow partial overrides for themes
};

// Helper to parse "H S% L%" string
const parseHsl = (hslString: string): { h: number; s: number; l: number } | null => {
    const match = hslString.match(/(\d+)\s+(\d+)%?\s+(\d+)%?/); // Make % optional for robustness
    if (!match) {
        console.warn("Could not parse HSL string:", hslString);
        return null;
    };
    return { h: parseInt(match[1]), s: parseInt(match[2]), l: parseInt(match[3]) };
};


// Helper to convert Hex to HSL string "H S% L%"
function hexToHSLString(hex: string): string | null {
  hex = hex.replace(/^#/, '');
  if (!/^[0-9A-F]{6}$/i.test(hex)) {
     console.warn("Invalid HEX color for HSL conversion:", hex);
     return null; // Invalid hex
  }

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

  // Ensure values are within valid ranges, although rounding should handle this
  h = h % 360;
  s = Math.max(0, Math.min(100, s));
  l = Math.max(0, Math.min(100, l));


  return `${h} ${s}% ${l}%`;
}


// Helper to generate derived colors (simple example)
const deriveColors = (primary: string, accent: string, background: string): Partial<ThemeVariables> => {
    const primaryHsl = parseHsl(primary);
    const accentHsl = parseHsl(accent);
    const backgroundHsl = parseHsl(background);

    if (!primaryHsl || !accentHsl || !backgroundHsl) {
        console.error("Failed to parse one or more base HSL strings for deriving colors.", { primary, accent, background });
        return {};
    }

    const isDark = backgroundHsl.l < 50;

    // Define base foregrounds
    const foregroundLight = '210 40% 98%'; // Slate-50 Light Text
    const foregroundDark = '224 71.4% 4.1%'; // Slate-950 Dark Text

    // Determine foreground based on background lightness
    const foreground = isDark ? foregroundLight : foregroundDark;

    // Determine contrast foregrounds for primary and accent
    const primaryForeground = primaryHsl.l > 55 ? foregroundDark : foregroundLight; // Adjusted threshold
    const accentForeground = accentHsl.l > 55 ? foregroundDark : foregroundLight; // Adjusted threshold

    // Derive subtle variations from background
    const cardBgLightnessOffset = isDark ? 5 : -3;
    const cardBgSaturationOffset = isDark ? -2 : -5;
    const cardBg = `${backgroundHsl.h} ${Math.max(0, backgroundHsl.s + cardBgSaturationOffset)}% ${Math.min(100, Math.max(0, backgroundHsl.l + cardBgLightnessOffset))}%`;

    const popoverBgLightnessOffset = isDark ? 8 : -5; // Slightly lighter/darker than card
    const popoverBg = `${backgroundHsl.h} ${Math.max(0, backgroundHsl.s + cardBgSaturationOffset)}% ${Math.min(100, Math.max(0, backgroundHsl.l + popoverBgLightnessOffset))}%`;

    const secondaryBg = cardBg; // Often same as card

    const mutedBgLightnessOffset = isDark ? 3 : -2;
    const mutedBg = `${backgroundHsl.h} ${Math.max(0, backgroundHsl.s + cardBgSaturationOffset)}% ${Math.min(100, Math.max(0, backgroundHsl.l + mutedBgLightnessOffset))}%`;

    const mutedFgLightnessOffset = isDark ? 40 : -40;
    const mutedFgSaturationOffset = -15;
    const mutedForeground = `${backgroundHsl.h} ${Math.max(0, backgroundHsl.s + mutedFgSaturationOffset)}% ${Math.min(100, Math.max(0, backgroundHsl.l + mutedFgLightnessOffset))}%`;

    const borderLightnessOffset = isDark ? 10 : -8;
    const borderSaturationOffset = isDark ? -5 : -10;
    const border = `${backgroundHsl.h} ${Math.max(0, backgroundHsl.s + borderSaturationOffset)}% ${Math.min(100, Math.max(0, backgroundHsl.l + borderLightnessOffset))}%`;

    const inputBg = border; // Often same as border or card

    // Destructive Colors (Keep consistent or allow customization)
    const destructive = isDark ? '0 62.8% 30.6%' : '0 84.2% 60.2%'; // Darker red for dark mode
    const destructiveForeground = isDark ? foregroundLight : foregroundDark;

    // Hover Glow - slightly lighter/more saturated accent
    const hoverGlowLightnessOffset = 15;
    const hoverGlowSaturationOffset = 10;
    const hoverGlow = `${accentHsl.h} ${Math.min(100, accentHsl.s + hoverGlowSaturationOffset)}% ${Math.min(100, accentHsl.l + hoverGlowLightnessOffset)}%`;

    // Chart Colors (Example derivation)
    const chart1 = primary;
    const chart2 = accent;
    const chart3 = `${accentHsl.h} ${accentHsl.s}% ${Math.min(100, accentHsl.l + 20)}%`; // Lighter accent
    const chart4 = mutedForeground;
    const chart5 = `${primaryHsl.h} ${primaryHsl.s}% ${Math.min(100, primaryHsl.l + 20)}%`; // Lighter primary

    // Sidebar colors - default to main theme colors, but allow overrides if needed
    const sidebarBackground = cardBg; // Often same as card background
    const sidebarForeground = foreground;
    const sidebarBorder = border;
    const sidebarAccent = accent;
    const sidebarAccentForeground = accentForeground;


    return {
      '--background': background,
      '--foreground': foreground,
      '--card': cardBg,
      '--card-foreground': foreground,
      '--popover': popoverBg,
      '--popover-foreground': foreground,
      '--primary': primary,
      '--primary-foreground': primaryForeground,
      '--secondary': secondaryBg,
      '--secondary-foreground': foreground,
      '--muted': mutedBg,
      '--muted-foreground': mutedForeground,
      '--accent': accent,
      '--accent-foreground': accentForeground,
      '--destructive': destructive,
      '--destructive-foreground': destructiveForeground,
      '--border': border,
      '--input': inputBg,
      '--ring': accent, // Ring often matches accent or primary
      '--hover-glow': hoverGlow,
      '--chart-1': chart1,
      '--chart-2': chart2,
      '--chart-3': chart3,
      '--chart-4': chart4,
      '--chart-5': chart5,
       // Sidebar specific vars - using derived values as defaults
       '--sidebar-background': sidebarBackground,
       '--sidebar-foreground': sidebarForeground,
       '--sidebar-border': sidebarBorder,
       '--sidebar-ring': sidebarAccent, // Example: Use accent for sidebar ring too
       '--sidebar-accent': sidebarAccent,
       '--sidebar-accent-foreground': sidebarAccentForeground,
    };
};



// Default Theme - aligned with initial globals.css
const defaultTheme: Theme = {
  name: 'Default Dark',
  cssVars: {
    ...deriveColors('203 92% 60%', '203 92% 60%', '217 33% 11%'), // Derive from Sky-400 and BlueGray-900
    '--radius': '0.5rem', // Keep static radius
  }
};

// Define more predefined themes using the deriveColors helper
const predefinedThemes: Theme[] = [
  defaultTheme,
  {
    name: 'Midnight Rose',
    cssVars: {
      ...deriveColors('330 80% 65%', '0 80% 70%', '260 20% 15%'), // Pink primary, Red accent, Dark Purple bg
      '--radius': '0.5rem',
    },
  },
  {
    name: 'Emerald Forest',
    cssVars: {
        ...deriveColors('145 60% 45%', '160 70% 35%', '150 15% 18%'), // Teal primary, Dark Green accent, Dark Green/Gray bg
        '--radius': '0.5rem',
     },
  },
  {
    name: 'Golden Hour',
    cssVars: {
        ...deriveColors('45 90% 60%', '30 95% 55%', '35 30% 20%'), // Gold primary, Orange accent, Warm Brown bg
        '--radius': '0.5rem',
     },
  },
  {
    name: 'Cyber Neon',
    cssVars: {
        ...deriveColors('270 90% 65%', '190 100% 50%', '240 50% 10%'), // Purple primary, Cyan accent, Very Dark Blue bg
        '--radius': '0.5rem',
    },
  },
   {
    name: 'Ocean Breeze',
    cssVars: {
        ...deriveColors('210 80% 60%', '180 75% 55%', '220 30% 95%'), // Blue primary, Teal accent, Very Light Blue/Gray bg
        '--radius': '0.5rem',
    },
   },
    {
     name: 'Crimson Night',
     cssVars: {
         ...deriveColors('0 70% 55%', '340 80% 60%', '0 10% 12%'), // Red primary, Deep Pink accent, Very Dark Gray/Black bg
         '--radius': '0.5rem',
      },
   },
    {
     name: 'Zen Garden',
     cssVars: {
         ...deriveColors('120 40% 55%', '80 30% 60%', '90 10% 96%'), // Soft Green primary, Muted Yellow accent, Off-White bg
         '--radius': '0.5rem',
      },
   },
    {
     name: 'Royal Velvet',
     cssVars: {
         ...deriveColors('250 60% 50%', '40 85% 60%', '255 25% 20%'), // Deep Purple primary, Gold accent, Dark Purple/Gray bg
         '--radius': '0.5rem',
      },
   },
    {
     name: 'Sunset Orange',
     cssVars: {
         ...deriveColors('25 90% 60%', '0 80% 65%', '20 15% 15%'), // Bright Orange primary, Red accent, Dark Warm Gray bg
         '--radius': '0.5rem',
     },
   },
   // Add 10 more themes
   {
    name: 'Arctic Night',
    cssVars: {
        ...deriveColors('200 70% 50%', '220 80% 65%', '230 30% 10%'), // Ice Blue primary, Indigo accent, Very Dark Blue bg
        '--radius': '0.5rem',
    },
   },
   {
     name: 'Desert Mirage',
     cssVars: {
         ...deriveColors('40 50% 70%', '30 40% 60%', '45 20% 92%'), // Sand primary, Beige accent, Light Sand bg
         '--radius': '0.5rem',
      },
   },
   {
    name: 'Lavender Fields',
    cssVars: {
        ...deriveColors('260 60% 75%', '300 50% 80%', '270 20% 97%'), // Light Lavender primary, Light Pink accent, Very Light Purple bg
        '--radius': '0.5rem',
    },
   },
   {
    name: 'Graphite & Lime',
    cssVars: {
        ...deriveColors('210 10% 40%', '80 90% 55%', '220 5% 20%'), // Graphite Gray primary, Lime Green accent, Dark Gray bg
        '--radius': '0.5rem',
    },
   },
   {
    name: 'Coral Reef',
    cssVars: {
        ...deriveColors('10 85% 65%', '190 70% 70%', '200 15% 95%'), // Coral primary, Light Cyan accent, Very Light Blue bg
        '--radius': '0.5rem',
    },
   },
   {
    name: 'Vintage Paper',
    cssVars: {
        ...deriveColors('35 30% 70%', '40 20% 55%', '40 40% 98%'), // Parchment primary, Sepia accent, Off-White bg
        '--radius': '0.5rem',
    },
   },
   {
    name: 'Deep Sea',
    cssVars: {
        ...deriveColors('230 50% 35%', '180 60% 40%', '240 40% 8%'), // Deep Blue primary, Teal accent, Extremely Dark Blue bg
        '--radius': '0.5rem',
    },
   },
   {
    name: 'Ruby Red',
    cssVars: {
        ...deriveColors('350 75% 50%', '0 60% 45%', '0 5% 15%'), // Ruby Red primary, Darker Red accent, Dark Gray bg
        '--radius': '0.5rem',
    },
   },
   {
    name: 'Mint Chocolate',
    cssVars: {
        ...deriveColors('150 50% 70%', '30 30% 35%', '140 10% 94%'), // Mint Green primary, Brown accent, Light Mint bg
        '--radius': '0.5rem',
    },
   },
   {
    name: 'Slate & Sky',
    cssVars: {
        ...deriveColors('215 25% 55%', '205 90% 70%', '220 15% 25%'), // Slate Blue primary, Bright Sky Blue accent, Dark Slate bg
        '--radius': '0.5rem',
    },
   },
];

// --- Theme Context ---

export type CustomColors = {
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
//   setCustomColors: React.Dispatch<React.SetStateAction<CustomColors>>; // Removed - custom colors are applied explicitly
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme | null>(null);
  // State to hold the *currently applied* custom colors (loaded from storage or set by user)
  const [appliedCustomColors, setAppliedCustomColors] = useState<CustomColors>({
    primary: '#38BDF8', // Default Sky-400
    accent: '#38BDF8', // Default Sky-400 (match primary initially)
    background: '#0F172A', // Default BlueGray-900
  });

  // Apply theme CSS variables to the root element
   const applyCssVariables = useCallback((vars: Partial<ThemeVariables>) => {
    if (typeof window === 'undefined') return; // Ensure runs client-side only
    const root = document.documentElement;
    if (!root) return;

    // Clear existing theme variables first? Optional, but can prevent conflicts.
    // Object.keys(defaultTheme.cssVars).forEach(key => root.style.removeProperty(key));

    Object.entries(vars).forEach(([key, value]) => {
      if (value) {
         // Assume value is already a valid CSS HSL string or other value like '0.5rem'
         root.style.setProperty(key, value);
      } else {
         // Optionally remove the property if the value is null/undefined
         // root.style.removeProperty(key);
      }
    });
   }, []);


   // Apply a predefined theme by name
   const applyTheme = useCallback((themeName: string) => {
       const themeToApply = predefinedThemes.find(t => t.name === themeName);
       if (themeToApply) {
         setCurrentTheme(themeToApply);
         applyCssVariables(themeToApply.cssVars);
         if (typeof window !== 'undefined') {
             localStorage.setItem('selectedTheme', themeName);
             localStorage.removeItem('customThemeColors'); // Clear custom colors when applying predefined
         }
       }
     }, [applyCssVariables]);


    // Apply custom theme based on hex colors provided by user
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
          setAppliedCustomColors(colors); // Update the state holding the applied custom colors
          applyCssVariables(customThemeConfig.cssVars);
           if (typeof window !== 'undefined') {
             localStorage.setItem('customThemeColors', JSON.stringify(colors));
             localStorage.removeItem('selectedTheme'); // Clear selected theme name
           }
        } else {
          console.error("Invalid custom hex colors provided.", colors);
        }
      }, [applyCssVariables]);


  // Load theme from local storage on initial mount
  useEffect(() => {
      if (typeof window === 'undefined') return; // Ensure runs client-side only

      const savedThemeName = localStorage.getItem('selectedTheme');
      const savedCustomColors = localStorage.getItem('customThemeColors');

      if (savedCustomColors) {
         try {
           const parsedColors: CustomColors = JSON.parse(savedCustomColors);
           // Apply directly, don't just set state, as applyCustomTheme handles state update and CSS vars
           applyCustomTheme(parsedColors);
         } catch (e) {
            console.error("Failed to parse custom theme colors from storage.", e);
            applyTheme(defaultTheme.name); // Fallback to default
         }
      } else if (savedThemeName) {
        // Check if the saved theme name is valid before applying
        const isValidTheme = predefinedThemes.some(t => t.name === savedThemeName);
        applyTheme(isValidTheme ? savedThemeName : defaultTheme.name);
      } else {
        applyTheme(defaultTheme.name); // Apply default theme if nothing saved
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Run only once on mount


  return (
    <ThemeContext.Provider value={{
        themes: predefinedThemes,
        currentTheme,
        applyTheme,
        applyCustomTheme,
        customColors: appliedCustomColors // Provide the *applied* custom colors
     }}>
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
