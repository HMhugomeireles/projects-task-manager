import React from "react";

function Button({ children, className, buttonType }) {
  return (
    <button className={className} type={buttonType}>
      {children}
    </button>
  );
}

export default Button;
