import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Cakes from "../pages/Cakes";
import CakeDetails from "../pages/CakeDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cakes/:id" element={<CakeDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
