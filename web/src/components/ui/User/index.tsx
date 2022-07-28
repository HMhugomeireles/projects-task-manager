import React from "react";

import { Avatar } from "../Avatar";
import user from "./user.module.css";

type UserPropsType = {
  userDetails: {
    username: string;
    avatar: string;
  }
}

export function User(props: UserPropsType) {
  return (
    <div className={user.container}>
      <div>{props.userDetails.username}</div>
      <Avatar avatarUrl={props.userDetails.avatar} />
    </div>
  );
}
