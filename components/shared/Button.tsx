"use client";

import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled,
  className,
  size = "md",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-body font-medium tracking-[0.5px] rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-sm px-8 py-4 gap-2.5",
  };

  const variants = {
    primary:
      "bg-brand-orange text-white hover:bg-orange-600 active:scale-[0.98]",
    secondary:
      "bg-transparent border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white active:scale-[0.98]",
    ghost:
      "bg-transparent text-text-primary hover:text-brand-orange active:scale-[0.98]",
  };

  const classes = clsx(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
