import React from "react";

interface LogoIconProps {
  className?: string;
  size?: number;
}

export function LogoIcon({ className, size = 32 }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Silver gradients for metallic look */}
        <linearGradient id="silver-grad-1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="50%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="silver-grad-2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="30%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="silver-grad-3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Brand Green Gradient */}
        <linearGradient id="logo-green-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00A859" />
          <stop offset="100%" stopColor="#005B2B" />
        </linearGradient>

        {/* Brand Orange Gradient */}
        <linearGradient id="logo-orange-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>

      {/* 1. Left green half of the Q ring */}
      <path
        d="M 50 12 C 29 12 12 29 12 50 C 12 66 22 80 36 85 C 33 78 32 70 33 63 C 34 52 40 43 50 36 C 50 28 50 20 50 12 Z"
        fill="url(#logo-green-grad)"
      />

      {/* 2. Right orange half of the Q ring */}
      <path
        d="M 50 12 C 71 12 88 29 88 50 C 88 57 86 64 82 70 C 78 63 72 58 65 54 C 62 48 57 42 50 36 C 50 28 50 20 50 12 Z"
        fill="url(#logo-orange-grad)"
      />

      {/* 3. Orange Tail of the Q */}
      <path
        d="M 80 65 C 80 73 85 80 92 84 C 82 82 74 76 70 68 C 65 72 58 68 55 64 C 60 62 65 60 70 58 C 74 60 78 62 80 65 Z"
        fill="url(#logo-orange-grad)"
      />

      {/* 4. Green bottom wave swoosh */}
      <path
        d="M 20 78 C 35 72 45 76 58 78 C 70 80 80 76 88 76 C 76 79 65 81 52 80 C 38 79 28 80 20 78 Z"
        fill="url(#logo-green-grad)"
      />

      {/* 5. 3 Aluminium columns */}
      {/* Column 1 (Left) */}
      <path d="M 32 70 L 32 50 L 38 44 L 38 70 Z" fill="url(#silver-grad-1)" />
      <path d="M 38 44 L 38 70 L 44 70 L 44 38 Z" fill="url(#silver-grad-2)" />

      {/* Column 2 (Middle) */}
      <path d="M 46 70 L 46 36 L 53 28 L 53 70 Z" fill="url(#silver-grad-2)" />
      <path d="M 53 28 L 53 70 L 59 70 L 59 32 Z" fill="url(#silver-grad-3)" />

      {/* Column 3 (Right) */}
      <path d="M 61 70 L 61 32 L 67 24 L 67 70 Z" fill="url(#silver-grad-1)" />
      <path d="M 67 24 L 67 70 L 73 70 L 73 20 Z" fill="url(#silver-grad-3)" />

      {/* Column Caps */}
      {/* Left Cap - Green */}
      <path d="M 32 50 L 38 44 L 38 40 L 32 46 Z" fill="url(#logo-green-grad)" />
      {/* Middle Cap - Orange */}
      <path d="M 46 36 L 53 28 L 53 22 L 46 30 Z" fill="url(#logo-orange-grad)" />
    </svg>
  );
}
