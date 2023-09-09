import { Link } from "react-router-dom";
import Hero from "../components/hero";
import FeaturedProducts from "../components/featuredProducts";

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
              <span className="shadow-lg p-3 mt-3 text-white">
                Trade in offer !!
              </span>
              <h1>Super Value Deals</h1>
              <h2>On all products</h2>
              <p className="p-3 text-black m-0">Save more with Apneck</p>
              <Link className="button-link mb-3">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      <Hero />

      <section className="featured-products">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>Our Featured Products</h1>
              <p>All Weather Modern Designs</p>
            </div>
            <div className="d-flex justify-content-around">
              <div className="col-4">
                <FeaturedProducts />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
