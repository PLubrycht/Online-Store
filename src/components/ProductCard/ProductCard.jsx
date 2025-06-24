import "./ProductCard.css";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="product-link">
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price} zł</p>
      </div>
    </Link>
  );
};
export default ProductCard;