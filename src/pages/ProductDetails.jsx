import { useState } from "react";
import { useParams } from "react-router-dom";
import mockProducts from "../api/mockProducts";
import { useCart } from "../context/CartContext";
import Toast from "../components/Toast/Toast";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = mockProducts.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  if (!product) return <h2>Produkt nie znaleziony</h2>;

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
  };

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Cena: {product.price} PLN</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Dodaj do koszyka</button>
      {showToast && (
        <Toast
          message="Dodano do koszyka"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default ProductDetails;
