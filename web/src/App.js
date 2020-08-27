import React from "react";
import { AuthenticationProvider } from "./context/AuthContext";
import RouterHandler from "./router";

function App() {
  return (
    <AuthenticationProvider>
      <RouterHandler />
    </AuthenticationProvider>
  );
}

export default App;
