import React from "react";

import Avatar from "../Avatar";
import user from "./user.module.css";

export default function User(props) {
  return (
    <div className={user.container}>
      <div>{props.userDetails.username}</div>
      <Avatar avatarUrl={props.userDetails.avatar} />
    </div>
  );
}
