import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main style={{ padding: "24px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
