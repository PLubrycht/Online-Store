// src/tests/cart.test.jsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Cart from "../components/pages/Cart";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter as Router } from "react-router-dom";

describe("Cart component", () => {
  test("displays empty cart message when no products", () => {
    render(
      <Router>
        <CartProvider>
          <Cart />
        </CartProvider>
      </Router>
    );

    expect(screen.getByRole("heading", { name: /koszyk jest pusty/i })).toBeInTheDocument();
  });
});
