import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Restaurant } from "../pages/Restaurant";
import { Kitchen } from "../pages/Kitchen";
import { Order } from "../pages/Order";
import { Wait } from "../pages/Wait";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order/:id" element={<Order />} />
      <Route path="/success/:id" element={<Wait />} />
      <Route path="/manager" element={<Restaurant />} />
      <Route path="/kitchen" element={<Kitchen />} />
    </Routes>
  );
}
