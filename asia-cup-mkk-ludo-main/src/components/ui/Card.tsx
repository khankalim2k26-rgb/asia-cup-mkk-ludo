import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 shadow-lg",
        hover && "transition-all duration-300 hover:shadow-xl hover:scale-105",
        className
      )}
    >
      {children}
    </div>
  );
}