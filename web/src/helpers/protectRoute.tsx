import React from "react";
import { Redirect } from "react-router-dom";
import { AuthenticationContext } from "../services/context/AuthContext";

function ProtectRoute({ children }) {
  const { isAuthenticated } = React.useContext(AuthenticationContext);

  if (isAuthenticated()) {
    return <>{children}</>;
  } else {
    return <Redirect to="/" />;
  }
}
export default ProtectRoute;
