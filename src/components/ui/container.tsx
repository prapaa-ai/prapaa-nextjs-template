import { cn } from '@/lib/utils'
import * as React from 'react'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum width of the container. Defaults to "xl" */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  /** Whether to center the container. Defaults to true */
  centered?: boolean
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
}

export function Container({
  className,
  maxWidth = 'xl',
  centered = true,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        maxWidthClasses[maxWidth],
        centered && 'mx-auto',
        'w-full px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
