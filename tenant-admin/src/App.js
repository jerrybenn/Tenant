import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/auth/SignIn";
import Units from "./pages/units/Units";
import WorkOrders from "./pages/work-orders/WorkOrders";
import Tenants from "./pages/tenants/Tenants";
import Vendors from "./pages/vendors/Vendors";
import CalendarPage from "./pages/calendar/Calendar";
import Reports from "./pages/reports/Reports";
import Messages from "./pages/messages/Messages";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/units" element={<Units />} />
          <Route path="/work-orders" element={<WorkOrders />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
