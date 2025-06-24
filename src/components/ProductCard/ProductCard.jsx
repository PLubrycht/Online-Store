import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Link to={`/products/${product.id}`} className="product-link">
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price} zł</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart();
          }}
        >
          Dodaj do koszyka
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
