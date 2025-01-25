import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Loader({ size = "md", className = "" }: LoaderProps) {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute w-full h-full rounded-full border-4 border-purple-500/30" />
      <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-purple-500 animate-spin" />
    </div>
  );
}
