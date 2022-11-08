import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GitProvider } from "./Context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// Domain
/* dev-3q476l736bqtlne5.us.auth0.com  */
// Client ID
/* xwTQ0SJT7rlvpNBl0zCJl7a6vhB4GSyR */

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain='dev-3q476l736bqtlne5.us.auth0.com'
    clientId='xwTQ0SJT7rlvpNBl0zCJl7a6vhB4GSyR'
    redirectUri={window.location.origin}
    >
    <GitProvider>
      <App />
    </GitProvider>
  </Auth0Provider>
);
