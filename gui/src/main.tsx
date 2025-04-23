import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apolloClient";

import AccountPage from "./pages/AccountPage";
import LandingPage from "./pages/LandingPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/account/:code" element={<AccountPage />} />
          <Route path="*" element={<p>404 - Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);