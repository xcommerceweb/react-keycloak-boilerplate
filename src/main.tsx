import { ReactKeycloakProvider } from "@react-keycloak/web";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import keycloak from "./keycloak";
import { Loading } from "./Loading";
import Expenses from "./routes/expenses";
import Home from "./routes/home";
import Invoices from "./routes/invoices";

const eventLogger = (event: unknown, error: unknown) => {
  // console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens: unknown) => {
  // console.log("onKeycloakTokens", tokens);
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ReactKeycloakProvider
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}
    LoadingComponent={<Loading />}
    initOptions={{ checkLoginIframe: false }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="expenses" element={<Expenses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ReactKeycloakProvider>
);
