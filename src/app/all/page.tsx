import { Button } from '@/components/ui/button'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

import { AppSidebar } from '@/components/layout/app-sidebar'
import { ThemeSwitcher } from '@/components/ui/theme-switcher'

// This page will be a Server Component by default
export default async function ShadcnShowcasePage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-svh bg-background">
        <AppSidebar />
      </div>
      <main className="w-full">
        <header className="sticky top-0 z-10 flex h-[57px] items-center justify-between gap-4 border-b bg-background px-4 w-full">
          {/* Sidebar Toggle Button */}
          <SidebarTrigger />
          <nav className="flex items-center gap-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Charts</Button>
            <Button variant="ghost">Forms</Button>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline">Default</Button>
            <ThemeSwitcher />
          </div>
        </header>
        <div className="container mx-auto p-4 md:p-8 space-y-12">
          <h1 className="text-3xl font-bold mb-8 text-center">Prapaa Component Showcase</h1>
          {/* Other component showcases */}
        </div>
      </main>
    </SidebarProvider>
  )
}
