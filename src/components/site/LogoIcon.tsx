import React from "react";
import logoImg from "@/assets/QUALPRO_Aluminium_Logo_High_Quality.jpg (1).png";

interface LogoIconProps {
  className?: string;
  size?: number;
}

export function LogoIcon({ className, size = 32 }: LogoIconProps) {
  return (
    <img
      src={logoImg}
      alt="Qual Pro Aluminium Logo"
      style={{ height: `${size}px`, width: "auto" }}
      className={`object-contain ${className}`}
    />
  );
}
