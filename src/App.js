/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRouts from "./components/ProtectedRouts/ProtectedRouts";
import SignupProtecter from "./components/ProtectedRouts/SignupProtecter";
import Home from "./pages/Home/Home";
import SignupAndLogin from "./pages/SignupAndLogin/SignupAndLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouts>
              <Home />
            </ProtectedRouts>
          }
        />
        <Route
          path="/signup"
          element={
            <SignupProtecter>
              <SignupAndLogin />
            </SignupProtecter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
