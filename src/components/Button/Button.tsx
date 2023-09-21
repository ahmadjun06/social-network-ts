import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  buttonText: string;
  isDisabled?: boolean;
};

export const Button = ({
  className,
  buttonText,
  isDisabled,
  type,
  ...props
}: ButtonProps) => {
  return (
    <button className={className} {...props} disabled={isDisabled} type={type}>
      {buttonText}
    </button>
  );
};
