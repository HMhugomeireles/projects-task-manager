import React from "react";
import load from "./loading.module.css";

type LoadingPropsType = {
  message: string;
}

export function Loading({ message }: LoadingPropsType) {
  return (
    <div className={load.container}>
      <div className={load.loader}>
        <div></div>
        <div></div>
      </div>
      <div className={load.message}>{Boolean(message) && message}</div>
    </div>
  )
}

