import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-medium transition Shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3FAE49] disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[#3FAE49] text-white hover:bg-[#36963f] shadow-md": variant === "default",
            "border border-[#3FAE49] text-[#3FAE49] hover:bg-[#F3FBF4]": variant === "outline",
            "text-[#111111] hover:bg-[#FAFAFA] hover:text-[#3FAE49]": variant === "ghost",
            "h-10 px-5 py-2": size === "default",
            "h-9 rounded-lg px-3": size === "sm",
            "h-12 rounded-xl px-6 md:px-8": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
