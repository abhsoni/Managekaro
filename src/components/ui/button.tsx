import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Typography } from "@/theme/typography";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap rounded-[8px] box-border",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-primary-50 !font-normal border-primary-60 hover:bg-primary-60 focus:bg-primary-60 focus:ring-primary-10 focus:ring-[3px] disabled:bg-primary-5 disabled:text-primary-20 shadow-[0_3px_5px_-2px_rgba(36,204,255,0.08),0_2px_4px_-2px_rgba(86,210,255,.12)]",
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border-neutral-20 border text-neutral-80 shadow-[0_4px_4px_-2px_rgba(24,39,75,0.04)] bg-white hover:bg-neutral-0 hover:border-neutral-20 focus:bg-neutral-10 focus:ring-[3px] focus:ring-neutral-10 disabled:bg-neutral-0 disabled:text-neutral-10 disabled:text-neutral-10 disabled:border-none",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        tertiary: "hover:bg-neutral-0 active:border-[3px] border-neutral-10",
        green: "text-green-50 bg-green-10 border-neutral-10",
      },
      size: {
        default: "px-4 h-[32px]",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-[40px] rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTypography = {
  primary: Typography.subtitle2,
  default: Typography.body2,
  destructive: Typography.body2,
  outline: Typography.body2,
  secondary: Typography.body2,
  ghost: Typography.body2,
  green: Typography.body2,
  link: Typography.body2,
  tertiary: Typography.body2,
};
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        style={{
          ...buttonTypography[variant ?? "default"],
          ...props.style,
        }}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
