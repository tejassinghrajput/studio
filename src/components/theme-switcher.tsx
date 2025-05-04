// src/components/theme-switcher.tsx
'use client';

import * as React from 'react';
import { Palette, Settings } from 'lucide-react'; // Use Palette or Settings icon
import Link from 'next/link'; // Import Link for navigation
// import { useTheme } from '@/context/theme-context'; // No longer need useTheme here directly
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
// Removed imports for Label, Input, CustomColors as they are moved

export function ThemeSwitcher() {
  // const { themes, currentTheme, applyTheme, applyCustomTheme, customColors } = useTheme(); // Removed theme context usage
  // const [tempCustomColors, setTempCustomColors] = React.useState<CustomColors>(customColors); // Removed state management

  // Removed handlers related to color change and applying custom theme

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Change Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end"> {/* Reduced width */}
        <DropdownMenuLabel>Theme Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
           {/* Link to the new theme customization page */}
          <DropdownMenuItem asChild className="cursor-pointer">
             {/* Use Next.js Link for client-side navigation */}
            <Link href="/choose-theme" className="flex items-center gap-2">
               <Settings className="h-4 w-4" />
              <span>Customize Theme</span>
            </Link>
          </DropdownMenuItem>
           {/* Add other theme-related options here if needed in the future */}
        </DropdownMenuGroup>
         {/* Removed theme list and custom color section */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
