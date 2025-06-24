import { useParams } from 'react-router-dom';
import mockProducts from '../api/mockProducts';
import './ProductDetails.css';
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = mockProducts.find((item) => item.id === parseInt(id));
  if (!product) return <h2>Produkt nie znaleziony</h2>;

  return (
    <div className="product-details" >
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Cena: {product.price} PLN</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Dodaj do koszyka</button>
    </div>
  );
};

export default ProductDetails;
