import React, { PropsWithChildren } from "react";

import layout from "./Layout.module.css";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className={layout.container}>
      {children}
      <footer className={layout.footer}> ProTask® 2020 © Hugo Meireles </footer>
    </div>
  );
}

