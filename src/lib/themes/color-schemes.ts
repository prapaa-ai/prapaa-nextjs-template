export type ColorScheme = {
  name: string
  colors: {
    background: string
    foreground: string
    primary: string
    'primary-foreground': string
    secondary: string
    'secondary-foreground': string
    muted: string
    'muted-foreground': string
    accent: string
    'accent-foreground': string
    destructive: string
    border: string
    input: string
    ring: string
  }
}

export const colorSchemes: Record<string, ColorScheme> = {
  blue: {
    name: 'Blue',
    colors: {
      background: 'oklch(1 0 0)',
      foreground: 'oklch(0.2 0.05 250)',
      primary: 'oklch(0.5 0.2 250)',
      'primary-foreground': 'oklch(1 0 0)',
      secondary: 'oklch(0.95 0.05 250)',
      'secondary-foreground': 'oklch(0.2 0.05 250)',
      muted: 'oklch(0.95 0.05 250)',
      'muted-foreground': 'oklch(0.6 0.05 250)',
      accent: 'oklch(0.95 0.05 250)',
      'accent-foreground': 'oklch(0.2 0.05 250)',
      destructive: 'oklch(0.6 0.2 30)',
      border: 'oklch(0.9 0.02 250)',
      input: 'oklch(0.9 0.02 250)',
      ring: 'oklch(0.7 0.05 250)',
    },
  },
  green: {
    name: 'Green',
    colors: {
      background: 'oklch(1 0 0)',
      foreground: 'oklch(0.2 0.05 150)',
      primary: 'oklch(0.5 0.2 150)',
      'primary-foreground': 'oklch(1 0 0)',
      secondary: 'oklch(0.95 0.05 150)',
      'secondary-foreground': 'oklch(0.2 0.05 150)',
      muted: 'oklch(0.95 0.05 150)',
      'muted-foreground': 'oklch(0.6 0.05 150)',
      accent: 'oklch(0.95 0.05 150)',
      'accent-foreground': 'oklch(0.2 0.05 150)',
      destructive: 'oklch(0.6 0.2 30)',
      border: 'oklch(0.9 0.02 150)',
      input: 'oklch(0.9 0.02 150)',
      ring: 'oklch(0.7 0.05 150)',
    },
  },
  purple: {
    name: 'Purple',
    colors: {
      background: 'oklch(1 0 0)',
      foreground: 'oklch(0.2 0.05 300)',
      primary: 'oklch(0.5 0.2 300)',
      'primary-foreground': 'oklch(1 0 0)',
      secondary: 'oklch(0.95 0.05 300)',
      'secondary-foreground': 'oklch(0.2 0.05 300)',
      muted: 'oklch(0.95 0.05 300)',
      'muted-foreground': 'oklch(0.6 0.05 300)',
      accent: 'oklch(0.95 0.05 300)',
      'accent-foreground': 'oklch(0.2 0.05 300)',
      destructive: 'oklch(0.6 0.2 30)',
      border: 'oklch(0.9 0.02 300)',
      input: 'oklch(0.9 0.02 300)',
      ring: 'oklch(0.7 0.05 300)',
    },
  },
}
