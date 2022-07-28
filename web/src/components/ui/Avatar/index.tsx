import React from "react";
import avatar from "./avatar.module.css";

type AvatarPropType = {
  avatarUrl: string;
}

export function Avatar({ avatarUrl }: AvatarPropType): JSX.Element {
  return <img src={avatarUrl} className={avatar.avatar} alt="avatar" />;
}
