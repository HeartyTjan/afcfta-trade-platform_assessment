// src/components/ui/buttonVariant.ts   ← REPLACE THIS FILE COMPLETELY

import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#005AFF] text-white hover:bg-[#0044cc] shadow-md hover:shadow-lg",

        destructive:
          "bg-red-600 text-white hover:bg-red-700",

        outline:
          "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        link:
          "text-[#005AFF] underline-offset-4 hover:underline font-medium",

        banking:
          "bg-gradient-to-r from-[#005AFF] to-[#0044cc] text-white font-bold shadow-lg hover:shadow-xl",

        "banking-outline":
          "border-2 border-[#005AFF] text-[#005AFF] hover:bg-[#005AFF] hover:text-white font-medium transition-all",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);