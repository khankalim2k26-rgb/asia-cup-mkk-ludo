import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white",
    outline: "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "font-semibold rounded-full transition-all duration-300 transform hover:scale-105",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}