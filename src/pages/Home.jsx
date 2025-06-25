import "./Home.css";
import { Link } from "react-router-dom";
import mockProducts from "../api/mockProducts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const featured = mockProducts.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <h1>Witamy w naszym sklepie online</h1>
        <p>Najlepsze produkty w najlepszych cenach</p>
        <Link to="/products" className="hero-btn">Zobacz produkty</Link>
      </section>

      {/* Featured Products */}
<section className="featured" data-aos="fade-up">
  <h2>Polecane produkty</h2>
  <Swiper
    modules={[Navigation]}
    navigation
    slidesPerView={3}
    centeredSlides={true}
    loop={true}
    className="featured-swiper"
    breakpoints={{
      0: { slidesPerView: 1 },
      768: { slidesPerView: 3 }
    }}
  >
    {featured.map((product) => (
      <SwiperSlide key={product.id}>
        <div className="carousel-card">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.price} zł</p>
            <Link to={`/products/${product.id}`}>Szczegóły</Link>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

      {/* Benefits */}
      <section className="benefits" data-aos="fade-up">
        <h2>Dlaczego my?</h2>
        <ul>
          <li>🚚 Darmowa dostawa od 100 zł</li>
          <li>⏱️ Wysyłka w 24h</li>
          <li>🔒 Bezpieczne płatności</li>
        </ul>
      </section>

      {/* Technologies */}
      <section className="technologies" data-aos="fade-up">
        <h2>Technologie użyte w projekcie</h2>
        <div className="tech-icons">
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <p>React</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
            <p>CSS3</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;