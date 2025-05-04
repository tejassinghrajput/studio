// src/components/theme-switcher.tsx
'use client';

import * as React from 'react';
import { Paintbrush, Palette } from 'lucide-react';
import { useTheme } from '@/context/theme-context';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

// Helper to convert Hex to HSL string "H S% L%"
function hexToHSLString(hex: string): string | null {
  hex = hex.replace(/^#/, '');
  if (!/^[0-9A-F]{6}$/i.test(hex)) {
    console.error("Invalid HEX color:", hex);
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

  return `${h} ${s}% ${l}%`;
}


export function ThemeSwitcher() {
  const { themes, currentTheme, applyTheme, setCustomColors, customColors } = useTheme();
  const [tempCustomColors, setTempCustomColors] = React.useState(customColors);

  const handleColorChange = (variableName: keyof typeof customColors, value: string) => {
    setTempCustomColors(prev => ({ ...prev, [variableName]: value }));
  };

  const handleApplyCustomTheme = () => {
    setCustomColors(tempCustomColors); // Update context and apply immediately
  };

  React.useEffect(() => {
     // Ensure temp colors sync if customColors change externally (e.g., load from storage)
     setTempCustomColors(customColors);
   }, [customColors]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Change Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end">
        <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {themes.map((theme) => (
            <DropdownMenuItem
              key={theme.name}
              onClick={() => applyTheme(theme.name)}
              className={`flex justify-between items-center cursor-pointer ${currentTheme?.name === theme.name ? 'bg-accent/20' : ''}`}
            >
              <span>{theme.name}</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `hsl(${theme.cssVars['--primary']})` }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `hsl(${theme.cssVars['--accent']})` }}></div>
                <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: `hsl(${theme.cssVars['--background']})` }}></div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Customize Colors</DropdownMenuLabel>
        <div className="p-2 space-y-3">
           <div className="flex items-center gap-2">
              <Label htmlFor="custom-primary" className="w-20 shrink-0 text-xs">Primary</Label>
              <Input
                id="custom-primary"
                type="color"
                value={tempCustomColors.primary}
                onChange={(e) => handleColorChange('primary', e.target.value)}
                className="h-8 w-full p-1"
              />
           </div>
           <div className="flex items-center gap-2">
              <Label htmlFor="custom-accent" className="w-20 shrink-0 text-xs">Accent</Label>
              <Input
                id="custom-accent"
                type="color"
                value={tempCustomColors.accent}
                onChange={(e) => handleColorChange('accent', e.target.value)}
                className="h-8 w-full p-1"
              />
           </div>
           <div className="flex items-center gap-2">
              <Label htmlFor="custom-background" className="w-20 shrink-0 text-xs">Background</Label>
              <Input
                id="custom-background"
                type="color"
                value={tempCustomColors.background}
                onChange={(e) => handleColorChange('background', e.target.value)}
                className="h-8 w-full p-1"
              />
           </div>
           <Button onClick={handleApplyCustomTheme} size="sm" className="w-full mt-2">
             Apply Custom Colors
           </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
