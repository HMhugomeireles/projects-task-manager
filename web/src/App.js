import React from "react";
import { AuthenticationProvider } from "./services/context/AuthContext";
import { StatusContextProvider } from "./services/context/StatusContext";
import RouterHandler from "./router";

function App() {
  return (
    <StatusContextProvider>
      <AuthenticationProvider>
        <RouterHandler />
      </AuthenticationProvider>
    </StatusContextProvider>
  );
}

export default App;
