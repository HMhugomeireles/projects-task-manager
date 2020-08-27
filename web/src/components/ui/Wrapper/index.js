import React from "react";

import wrapper from "./wrapper.module.css";

const Wrapper = ({ children }) => (
  <div className={wrapper.container}>{children}</div>
);

export default Wrapper;
