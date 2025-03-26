import {
  BookOpen,
  Box,
  Code,
  Component,
  FileCode,
  Github,
  Inbox,
  Info,
  Palette,
  Settings,
  TerminalSquare,
  Type,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar' // Assuming sidebar.tsx is here
import { TooltipContent } from '@/components/ui/tooltip' // Import TooltipContent type

// Define types for menu items for better structure
type MenuItem = {
  title: string
  url: string
  icon: React.ElementType
  isActive?: boolean // Optional: for highlighting active link
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
}

type MenuGroup = {
  label: string
  items: MenuItem[]
}

// Define menu structure based on v4.shadcn.com
const menuGroups: MenuGroup[] = [
  {
    label: 'Getting Started',
    items: [
      { title: 'Introduction', url: '#', icon: Info },
      { title: 'Installation', url: '#', icon: Inbox },
      { title: 'components.json', url: '#', icon: FileCode },
      { title: 'Theming', url: '#', icon: Palette },
      { title: 'Dark mode', url: '#', icon: Settings }, // Assuming Settings icon
      { title: 'CLI', url: '#', icon: TerminalSquare },
      { title: 'Typography', url: '#', icon: Type },
    ],
  },
  {
    label: 'Components',
    items: [
      { title: 'Accordion', url: '/all', icon: Component, isActive: true }, // Example active link
      { title: 'Alert', url: '/all', icon: Component },
      // Add ALL other components here...
      { title: 'Button', url: '/all', icon: Component },
      { title: 'Card', url: '/all', icon: Component },
      { title: 'Checkbox', url: '/all', icon: Component },
      { title: 'Table', url: '/all', icon: Component },
      { title: 'Tooltip', url: '/all', icon: Component },
      // ... continue adding all components shown on v4.shadcn.com
    ],
  },
  {
    label: 'More',
    items: [
      { title: 'Blocks', url: '#', icon: Box },
      { title: 'Charts', url: '#', icon: Code }, // Assuming Code icon
      { title: 'Figma', url: '#', icon: Code }, // Assuming Code icon
      { title: 'Changelog', url: '#', icon: BookOpen },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" side="left" variant="sidebar">
      <SidebarHeader className="p-4">
        {/* Placeholder for Logo/Title */}
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <Box className="size-6 shrink-0" />
          <span className="font-semibold group-data-[collapsible=icon]:hidden">Prapaa UI</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-0">
        {menuGroups.map((group) => (
          <SidebarGroup key={group.label} className="p-2">
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      tooltip={{
                        children: item.title,
                        side: 'right',
                        align: 'center',
                      }}
                    >
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            {/* Add separator between groups if desired */}
            {/* <SidebarSeparator /> */}
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        {/* Example Footer Content */}
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            asChild
            aria-label="GitHub"
            title="GitHub"
          >
            <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener noreferrer">
              <Github className="size-4" />
            </a>
          </Button>
          <span className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
            © shadcn
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
