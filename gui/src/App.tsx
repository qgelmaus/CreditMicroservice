// src/App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import CreditHomePage from "./pages/CreditAccount/CreditHomePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element {...(<CreditHomePage />)} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
