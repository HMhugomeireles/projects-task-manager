import React from "react";

import Brand from "./../../Brand";
import User from "./../../User";

import header from "./header.module.css";

function Header() {
  return (
    <header className={header.container}>
      <Brand />
      <User
        userDetails={{
          username: "John",
          avatar:
            "https://www.tuktukdesign.com/wp-content/uploads/2020/01/avatar-icon-vector.jpg",
        }}
      />
    </header>
  );
}

export default Header;
