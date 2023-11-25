import { BrowserRouter, Routes, Route } from "react-router-dom";

import OrderPage from "@/pages/OrderPage";
import AdminPage from "@/pages/AdminPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}
