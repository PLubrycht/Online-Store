import "./ProductCard.css";
import { Link } from "react-router-dom";


const ProductCard = ({ id, title, price, image }) => {
    return(
    <div className="product-card">
        <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{price} zł</p>
      </Link>
    </div>
    );
};
export default ProductCard;