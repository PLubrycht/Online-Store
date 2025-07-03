import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart, removeAllOfProduct, clearCart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) return <h2>Koszyk jest pusty</h2>;

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      const confirmDelete = window.confirm(`Czy na pewno chcesz usunąć "${item.name}" z koszyka?`);
      if (confirmDelete) {
        removeAllOfProduct(item.id);
      }
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="cart-container">
      <h2>Twój koszyk</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li
            key={item.id}
            className={`cart-item ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <img src={item.image} alt={item.name} />
            <div className="cart-info">
              <strong>{item.name}</strong>
              <p>Cena: {item.price} zł</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </li>
        ))}
      </ul>

      <h3>Razem: {totalItems} szt. | {totalPrice.toFixed(2)} zł</h3>
      <button className="clear-btn" onClick={clearCart}>Wyczyść koszyk</button>
    </div>
  );
};

export default Cart;
