import  mockProducts  from "../api/mockProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import  "./Products.css"; // Assuming you have a CSS file for styling

const Products = () => {
  return (
    <section className="products">
      <h2>Nasze Produkty</h2>
      <div className="product-list">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
