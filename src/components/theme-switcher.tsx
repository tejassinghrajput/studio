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
import type { CustomColors } from '@/context/theme-context'; // Import CustomColors type

// Helper to convert Hex to HSL string "H S% L%"
// Removed as it's handled within the context now

export function ThemeSwitcher() {
  const { themes, currentTheme, applyTheme, applyCustomTheme, customColors } = useTheme();
  // Use customColors (the applied ones) as the initial state for temp colors
  const [tempCustomColors, setTempCustomColors] = React.useState<CustomColors>(customColors);

  const handleColorChange = (variableName: keyof CustomColors, value: string) => {
    setTempCustomColors(prev => ({ ...prev, [variableName]: value }));
  };

  // Modified: Directly call applyCustomTheme from context
  const handleApplyCustomTheme = () => {
    applyCustomTheme(tempCustomColors); // Call the context function to apply the theme
  };

  // Effect to sync temp colors if the applied customColors change (e.g., loading from storage)
  React.useEffect(() => {
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
                 {/* Ensure cssVars keys exist before accessing */}
                 {theme.cssVars['--primary'] && <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `hsl(${theme.cssVars['--primary']})` }}></div>}
                 {theme.cssVars['--accent'] && <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `hsl(${theme.cssVars['--accent']})` }}></div>}
                 {theme.cssVars['--background'] && <div className="w-3 h-3 rounded-full border" style={{ backgroundColor: `hsl(${theme.cssVars['--background']})` }}></div>}
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
           {/* Button now calls the modified handler */}
           <Button onClick={handleApplyCustomTheme} size="sm" className="w-full mt-2">
             Apply Custom Colors
           </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
