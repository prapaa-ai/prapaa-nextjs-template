import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export default function ThemeDemoPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Theme Demo</h1>
        <div className="flex items-center gap-4">
          <p className="text-lg">Choose theme:</p>
          <ThemeSwitcher />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Light/Dark Mode</h2>
            <p className="text-muted-foreground">
              This card demonstrates the theme switching capabilities. The colors, borders, and shadows
              all adapt to the current theme.
            </p>
          </div>

          <div className="rounded-lg bg-primary text-primary-foreground p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Primary Colors</h2>
            <p>
              This card uses the primary color scheme which changes based on the theme.
            </p>
          </div>

          <div className="rounded-lg bg-secondary text-secondary-foreground p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Secondary Colors</h2>
            <p>
              This card uses the secondary color scheme which changes based on the theme.
            </p>
          </div>

          <div className="rounded-lg bg-accent text-accent-foreground p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Accent Colors</h2>
            <p>
              This card uses the accent color scheme which changes based on the theme.
            </p>
          </div>

          <div className="rounded-lg bg-sidebar text-sidebar-foreground p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Sidebar Colors</h2>
            <p>
              This card uses the sidebar color scheme which changes based on the theme.
            </p>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Chart Colors</h2>
            <div className="flex gap-2 mt-4">
              <div className="h-8 w-8 rounded-full bg-chart-1"></div>
              <div className="h-8 w-8 rounded-full bg-chart-2"></div>
              <div className="h-8 w-8 rounded-full bg-chart-3"></div>
              <div className="h-8 w-8 rounded-full bg-chart-4"></div>
              <div className="h-8 w-8 rounded-full bg-chart-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
