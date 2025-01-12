import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Invitated from "./pages/invitated";
import SpecialInvite from "./pages/special-invite";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invitated" element={<Invitated />} />
      <Route path="/special-invite/:groom" element={<SpecialInvite />} />
    </Routes>
  )
}