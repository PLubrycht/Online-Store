import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Toast from "../Toast/Toast";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-card" data-aos="zoom-in">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} zł</p>
          <button
            onClick={(e) => {
              e.preventDefault(); // nie przechodź do szczegółów
              handleAddToCart();
            }}
          >
            Dodaj do koszyka
          </button>
        </div>
      </Link>

      {showToast && (
        <Toast
          message="Dodano do koszyka"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
