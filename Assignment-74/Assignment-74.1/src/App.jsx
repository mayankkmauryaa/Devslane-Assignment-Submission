import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";

import Main from "./pages/Main";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import PageNotFound from "./components/PageNotFound";
import SignUp from "./pages/SignUp";
import Forgot from "./pages/Forgot";
import AuthRoute from "./routes/AuthRoute";
import UserRoute from "./routes/UserRoute";
import ImprovedLogin from "./pages/Login";

// Configurable API base (replace with your backend later)
const API_BASE_URL = "https://reqres.in/api"; // 🔄 replace with your API

const App = () => {
  // Safely parse cart data from localStorage
  let initialCart = {};
  try {
    initialCart = JSON.parse(localStorage.getItem("my-cart")) || {};
  } catch {
    initialCart = {};
  }

  const [cart, setCart] = useState(initialCart);
  const [user, setUser] = useState(null);

  const location = useLocation();
  const token = localStorage.getItem("token");

  // --- Cart Management ---
  const handleAddToCart = (productId, count) => {
    const quantity = +count;
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + quantity };
    updateCart(newCart);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("my-cart", JSON.stringify(newCart));
  };

  const totalCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  // --- Fetch user if token exists ---
  useEffect(() => {
    if (token) {
      axios
        .get(`${API_BASE_URL}/me`, {
          headers: { Authorization: token },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((err) => {
          console.error("Error fetching user:", err.response?.data || err.message);
          // Token invalid → clear it
          localStorage.removeItem("token");
          setUser(null);
        });
    }
  }, [token]);

  // --- Auth-only routes ---
  const isAuthRoute =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <div className="h-screen overflow-scroll gap-2 overflow-x-hidden flex flex-col">
      {token && <Header productCount={totalCount} setUser={setUser} />}

      <div className="grow">
        <Routes>
          {/* Auth Routes */}
          <Route
            path="/login"
            element={
              <AuthRoute user={user}>
                <ImprovedLogin setUser={setUser} />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute user={user}>
                <SignUp />
              </AuthRoute>
            }
          />
          <Route path="/forgot" element={<Forgot />} />

          {/* User Routes */}
          <Route
            path="/"
            element={
              <UserRoute user={user}>
                <Main addToCart={handleAddToCart} />
              </UserRoute>
            }
          />
          <Route
            path="/details/:id"
            element={
              <UserRoute user={user}>
                <ProductDetails addToCart={handleAddToCart} />
              </UserRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <UserRoute user={user}>
                <CartPage
                  setCart={setCart}
                  updateCart={updateCart}
                  data={cart}
                />
              </UserRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      {token && <Footer />}
    </div>
  );
};

export default App;
