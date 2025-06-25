import  mockProducts  from "../api/mockProducts";
import ProductCard from "../components/ProductCard/ProductCard";
import  "./Products.css"; 

const Products = () => {
  return (
    <section className="products">
      <h2 data-aos="fade-right">Nasze Produkty</h2>
      <div className="product-list">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
