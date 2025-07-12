import React from "react";
import type { ButtonVariantProps } from "./button-types";
import className from "classnames";

interface ButtonProps {
  buttonVariantProps: ButtonVariantProps;
  outlined?: boolean;
  rounded?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ buttonVariantProps, children }) => {
  // Convert variant object to string
  const variant = Object.keys(
    buttonVariantProps
  )[0] as keyof ButtonVariantProps;

  const classes = className("px-6 py-3 border", {
    "bg-blue-500 border-blue-500 text-white": variant === "primary",
    "bg-gray-900 border-gray-900 text-white": variant === "secondary",
    "bg-green-500 border-green-500 text-white": variant === "success",
    "bg-yellow-700 border-yellow-700 text-white": variant === "warning",
    "bg-red-500 border-red-500 text-white": variant === "danger",
  });
  return <button className={classes}>{children}</button>;
};

export default Button;
