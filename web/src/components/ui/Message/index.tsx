import React, { PropsWithChildren } from "react";
import message from "./message.module.css";

type ErrorMessagePropsType = PropsWithChildren<{
  type: string;
}>

export function Message({ type, children }: ErrorMessagePropsType) {
  return <div className={message[`container-${type}`]}>{children}</div>
}

