"use client";
import { Button } from "./button";

const ButtonWithIcon = ({
  children,
  icon,
  className,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button
      {...props}
      className={`flex items-center justify-center w-full rounded-[8px] ${className}`}
      size="lg"
      variant="primary"
    >
      {icon && <div className="mr-[16px]">{icon}</div>}
      {children}
    </Button>
  );
};

export default ButtonWithIcon;
