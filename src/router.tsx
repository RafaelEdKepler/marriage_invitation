import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Invitated from "./pages/invitated";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invitated" element={<Invitated />} />
    </Routes>
  )
}