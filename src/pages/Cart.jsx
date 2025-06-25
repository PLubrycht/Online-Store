import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) return <h2>Koszyk jest pusty</h2>;

  return (
    <div className="cart">
      <h2>Twój koszyk</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: "50px" }} />
            <span>{item.name}</span>
            <span>Ilość: {item.quantity}</span>
            <span>Cena: {item.price} zł</span>
            <button onClick={() => removeFromCart(item.id)}>Usuń 1 sztukę</button>
          </li>
        ))}
      </ul>
      <h3>Razem: {totalItems} szt. | {totalPrice.toFixed(2)} zł</h3>
      <button onClick={clearCart}>Wyczyść koszyk</button>
    </div>
  );
};

export default Cart;
