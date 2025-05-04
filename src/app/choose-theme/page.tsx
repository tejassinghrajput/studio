// src/app/choose-theme/page.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@/context/theme-context';
import type { CustomColors } from '@/context/theme-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { SectionWrapper } from '@/components/section-wrapper'; // Use SectionWrapper for consistent padding

export default function ChooseThemePage() {
  const { themes, currentTheme, applyTheme, applyCustomTheme, customColors } = useTheme();
  const [tempCustomColors, setTempCustomColors] = useState<CustomColors>(customColors);

  // Effect to sync temp colors if the applied customColors change (e.g., loading from storage)
  useEffect(() => {
    setTempCustomColors(customColors);
  }, [customColors]);

  const handleColorChange = (variableName: keyof CustomColors, value: string) => {
    setTempCustomColors(prev => ({ ...prev, [variableName]: value }));
  };

  // Directly call applyCustomTheme from context
  const handleApplyCustomTheme = useCallback(() => {
    applyCustomTheme(tempCustomColors);
  }, [applyCustomTheme, tempCustomColors]);

  // Helper to get preview style for theme cards
  const getThemePreviewStyle = (themeVars: Partial<any>) => ({ // Use `any` for simplicity, better type if possible
    '--preview-primary': `hsl(${themeVars['--primary']})`,
    '--preview-accent': `hsl(${themeVars['--accent']})`,
    '--preview-background': `hsl(${themeVars['--background']})`,
    '--preview-foreground': `hsl(${themeVars['--foreground']})`,
  } as React.CSSProperties);


  return (
    <SectionWrapper className="min-h-screen pt-24 md:pt-32"> {/* Add padding top for navbar */}
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
        Choose Your Theme
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Predefined Themes Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Predefined Themes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto pr-2">
            {themes.map((theme) => (
              <Card
                key={theme.name}
                className={`cursor-pointer border-2 transition-all duration-200 ${
                  currentTheme?.name === theme.name && currentTheme.name !== 'Custom'
                    ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-background'
                    : 'border-border hover:border-muted-foreground'
                } bg-card`}
                onClick={() => applyTheme(theme.name)}
                style={getThemePreviewStyle(theme.cssVars)}
              >
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-base font-medium text-[var(--preview-foreground)] flex justify-between items-center">
                    {theme.name}
                     {currentTheme?.name === theme.name && currentTheme.name !== 'Custom' && (
                        <CheckCircle className="h-5 w-5 text-primary" />
                     )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                   {/* Theme color preview */}
                   <div className="flex gap-2 mt-2">
                     <div className="w-5 h-5 rounded-full bg-[var(--preview-primary)] border border-border"></div>
                     <div className="w-5 h-5 rounded-full bg-[var(--preview-accent)] border border-border"></div>
                     <div className="w-5 h-5 rounded-full bg-[var(--preview-background)] border border-border"></div>
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Theme Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-foreground">Customize Colors</h2>
          <Card className={`p-6 bg-card border-2 ${
                currentTheme?.name === 'Custom'
                  ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'border-border'
              }`}>
            <div className="space-y-4">
               {currentTheme?.name === 'Custom' && (
                 <div className="flex items-center text-sm text-primary mb-2">
                     <CheckCircle className="h-4 w-4 mr-2" />
                     <span>Custom theme active</span>
                 </div>
                )}
              <div className="flex items-center gap-4">
                <Label htmlFor="custom-primary" className="w-24 shrink-0 text-muted-foreground">Primary</Label>
                <Input
                  id="custom-primary"
                  type="color"
                  value={tempCustomColors.primary}
                  onChange={(e) => handleColorChange('primary', e.target.value)}
                  className="h-10 w-full p-1 border-border cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="custom-accent" className="w-24 shrink-0 text-muted-foreground">Accent</Label>
                <Input
                  id="custom-accent"
                  type="color"
                  value={tempCustomColors.accent}
                  onChange={(e) => handleColorChange('accent', e.target.value)}
                  className="h-10 w-full p-1 border-border cursor-pointer"
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="custom-background" className="w-24 shrink-0 text-muted-foreground">Background</Label>
                <Input
                  id="custom-background"
                  type="color"
                  value={tempCustomColors.background}
                  onChange={(e) => handleColorChange('background', e.target.value)}
                  className="h-10 w-full p-1 border-border cursor-pointer"
                />
              </div>
              <Button onClick={handleApplyCustomTheme} size="lg" className="w-full mt-6 hover-glow">
                Apply Custom Colors
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
