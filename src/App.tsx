import { BrowserRouter, Routes, Route } from "react-router-dom";

import OrderPage from "@/pages/OrderPage";
import AdminPage from "@/pages/AdminPage";
import SuccessPage from "@/pages/SuccessPage";
import ErrorPage from "@/pages/ErrorPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
