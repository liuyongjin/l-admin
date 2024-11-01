import { ButtonProps } from "antd";
import { CSSProperties, ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
} & ButtonProps;

export function IconButton({
  children,
  className,
  style,
  onClick,
}: IconButtonProps) {
  return (
    <button
      style={style}
      className={`flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-hover ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
