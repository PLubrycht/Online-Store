// Cart.test.jsx
import { render, screen } from "@testing-library/react";
import Cart from "../pages/Cart";
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

    const emptyMessage = screen.getByText(/Twój koszyk jest pusty/i);
    expect(emptyMessage).toBeInTheDocument();
  });
});
