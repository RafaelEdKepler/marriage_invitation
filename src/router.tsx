import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Invitated from "./pages/invitated";
import SpecialInvite from "./pages/special-invite";
import AboutUs from "./pages/about-us";
import Development from "./pages/development";
import PresentsList from "./pages/presents-list";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invitated" element={<Invitated />} />
      <Route path="/special-invite/:name" element={<SpecialInvite />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/in-development" element={<Development />} />
      <Route path="/presents-list" element={<PresentsList />} />
    </Routes>
  )
}