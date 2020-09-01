import React from "react";
import avatar from "./avatar.module.css";

export default function Avatar({ avatarUrl }) {
  return <img src={avatarUrl} className={avatar.avatar} alt="avatar" />;
}
