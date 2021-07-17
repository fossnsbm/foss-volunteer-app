import { Button } from "antd";
import React from "react";
import classNames from "./DefaultButton.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: any;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary";
  size?: "large" | "medium" | "small";
};

export default function DefaultButton({
  children,
  className,
  onClick,
  variant = "primary",
  size = "large",
  ...props
}: Props): JSX.Element {
  return (
    <Button
      {...props}
      className={`${classNames.button} ${classNames[variant]} ${classNames[size]} ${className} `}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
