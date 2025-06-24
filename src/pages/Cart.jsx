import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Twój koszyk</h2>
      {cart.length === 0 ? (
        <p>Koszyk jest pusty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price} zł
                <button onClick={() => removeFromCart(item.id)}>Usuń</button>
              </li>
            ))}
          </ul>
          <button onClick={clearCart}>Wyczyść koszyk</button>
        </>
      )}
    </div>
  );
};

export default Cart;
