'use client'

import { useTheme } from '@/components/providers/theme-provider'
import { useEffect, useState } from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border p-1">
      <button
        onClick={() => setTheme('light')}
        className={`rounded-md p-2 transition-colors ${
          theme === 'light'
            ? 'bg-accent text-accent-foreground'
            : 'hover:bg-muted/50'
        }`}
        aria-label="Light theme"
      >
        <Sun className="h-5 w-5" />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`rounded-md p-2 transition-colors ${
          theme === 'dark'
            ? 'bg-accent text-accent-foreground'
            : 'hover:bg-muted/50'
        }`}
        aria-label="Dark theme"
      >
        <Moon className="h-5 w-5" />
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`rounded-md p-2 transition-colors ${
          theme === 'system'
            ? 'bg-accent text-accent-foreground'
            : 'hover:bg-muted/50'
        }`}
        aria-label="System theme"
      >
        <Monitor className="h-5 w-5" />
      </button>
    </div>
  )
}
