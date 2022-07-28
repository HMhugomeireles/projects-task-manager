import React, { PropsWithChildren } from "react";

type ButtonPropType = PropsWithChildren<{
  className: string;
  buttonType: "button" | "submit";
}>;

export function Button({ children, className, buttonType }: ButtonPropType) {
  return (
    <button className={className} type={buttonType}>
      {children}
    </button>
  );
}

