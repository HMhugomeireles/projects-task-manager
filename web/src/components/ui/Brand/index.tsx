import React from "react";
import brand from "./brand.module.css";

export function Brand() {
  return (
    <h1 className={brand.brandTitle}>
      Pro<span>Task</span>
    </h1>
  );
}
