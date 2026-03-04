import { Button } from "@heroui/react";

interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  textColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  containShadow?: boolean;
}

export const CustomButton = ({
  children,
  className,
  size,
  textColor = "text-white",
  backgroundColor = "bg-[#35589F]",
  hoverBackgroundColor = "bg-[#3B6CB4]",
  startContent,
  endContent,
  containShadow = true,
}: CustomButtonProps) => {
  return (
    <Button
      className={`px-6 py-1.5 translate-y-[-2px] flex flex-row
        ${backgroundColor} hover:${hoverBackgroundColor}
        rounded-md border-2 border-black
        font-bold ${textColor}
        ${containShadow ? "shadow-solid hover:shadow-none ease-out hover:translate-y-[0px] duration-[0.15s]" : ""}
        ${className}`}
      size={size}
      startContent={startContent}
      endContent={endContent}
    >
      {children}
    </Button>
  );
};
