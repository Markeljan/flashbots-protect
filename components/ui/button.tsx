import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-1 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-green-4 hover:bg-green-5 active:bg-green-6 text-green-11 dark:bg-lime-11 dark:hover:bg-lime-10 dark:active:bg-lime-9 dark:text-lime-1",
        secondary:
          "bg-cyan-3 hover:bg-cyan-4 active:bg-cyan-5 text-cyan-11",
        outline:
          "bg-transparent text-green-11 border border-green-7 hover:bg-green-4 active:bg-green-7 active:text-green-1",
        info: "bg-mauve-3 text-mauve-11 hover:bg-mauve-4 active:bg-mauve-7 hover:text-mauve-11 dark:text-mauve-11  dark:hover:bg-mauve-10 dark:active:bg-mauve-9 dark:hover:text-mauve-11",
        destructive: "border border-green-11 bg-red-11 text-red-1 hover:bg-transparent hover:text-red-11 active:bg-red-8",
        ghost: "hover:bg-cyan-3 hover:text-cyan-11 active:bg-cyan-4",
        link: "underline-offset-4 hover:underline text-primary hover:text-primary-hover active:text-primary-active",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
