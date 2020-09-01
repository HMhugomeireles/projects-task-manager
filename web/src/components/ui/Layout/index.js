import React from "react";

import layout from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={layout.container}>
      {children}
      <footer className={layout.footer}> ProTask® 2020 © Hugo Meireles </footer>
    </div>
  );
}

export default Layout;
