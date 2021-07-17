import { Card } from "antd";
import React from "react";
import classNames from "./DefaultCard.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  padding?: "lg" | "md" | "sm";
  shadow?: "medium" | "soft" | "no-shadow";
};

export default function DefaultCard({
  children,
  className,
  padding = "md",
  shadow = "soft",
  ...props
}: Props): JSX.Element {
  return (
    <Card
      {...props}
      className={`${classNames.card} ${classNames[padding]} ${classNames[shadow]} ${className} `}
    >
      {children}
    </Card>
  );
}
