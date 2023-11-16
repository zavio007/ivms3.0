import React from "react";

const shapes = { round: "rounded-[9px]" } as const;
const variants = {
  gradient: {
    indigo_A700_01_indigo_900: "bg-gradient1  shadow-bs1 text-white-A700",
    indigo_A700_7e_indigo_900_7e: "bg-gradient  text-white-A700_7e",
  },
  fill: {
    blue_gray_300: "bg-blue_gray-300 text-white-A700",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
  },
} as const;
const sizes = { xs: "py-px", sm: "p-[15px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
