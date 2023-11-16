import React from "react";

const sizeClasses = {
  txtMontserratBold22WhiteA700: "font-bold font-montserrat",
  txtMontserratBold22: "font-bold font-montserrat",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtMontserratSemiBold18: "font-montserrat font-semibold",
  txtMontserratMedium18: "font-medium font-montserrat",
  txtMontserratRegular14Bluegray900: "font-montserrat font-normal",
  txtMontserratSemiBold35: "font-montserrat font-semibold",
  txtMontserratRegular18: "font-montserrat font-normal",
  txtMontserratMedium18WhiteA700: "font-medium font-montserrat",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtMontserratLight14: "font-light font-montserrat",
  txtMontserratLight14Bluegray900: "font-light font-montserrat",
  txtMontserratMedium18RedA700: "font-medium font-montserrat",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
