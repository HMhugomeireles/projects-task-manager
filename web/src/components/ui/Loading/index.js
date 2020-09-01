import React from "react";
import load from "./loading.module.css";

const Loading = ({ message }) => (
  <div className={load.container}>
    <div className={load.loader}>
      <div></div>
      <div></div>
    </div>
    <div className={load.message}>{Boolean(message) && message}</div>
  </div>
);

export default Loading;
