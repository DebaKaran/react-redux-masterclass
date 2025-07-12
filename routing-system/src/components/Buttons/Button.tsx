import React from "react";
import type { ButtonVariantProps } from "./button-types";
import className from "classnames";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  buttonVariantProps: ButtonVariantProps;
  outlined?: boolean;
  rounded?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  buttonVariantProps,
  outlined,
  rounded,
  children,
}) => {
  // Convert variant object to string
  const variant = Object.keys(
    buttonVariantProps
  )[0] as keyof ButtonVariantProps;

  const classes = twMerge(
    className("px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": variant === "primary",
      "border-gray-900 bg-gray-900 text-white": variant === "secondary",
      "border-green-500 bg-green-500 text-white": variant === "success",
      "border-yellow-400 bg-yellow-400 text-white": variant === "warning",
      "border-red-500 bg-red-500 text-white": variant === "danger",
      "rounded-full": rounded,
      "bg-white": outlined,
      "text-blue-500": outlined && variant === "primary",
      "text-gray-900": outlined && variant === "secondary",
      "text-green-500": outlined && variant === "success",
      "text-yellow-400": outlined && variant === "warning",
      "text-red-500": outlined && variant === "danger",
    })
  );
  return <button className={classes}>{children}</button>;
};

export default Button;
