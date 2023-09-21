import { Link } from "react-router-dom";
import Hero from "../components/hero";
import FeaturedProducts from "../components/featuredProducts";
import NewArrival from "../components/newArrival";

const Home = () => {
  return (
    <>
      <section className="banner mb-3">
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
            <FeaturedProducts />
          </div>
        </div>
      </section>

      <section className="repair">
        <div className="container-xxl">
          <div className="row">
            <div className="repair-details d-flex flex-column text-center align-items-center p-3">
              <span className="text-white mt-1">Repair Services</span>
              <h2 className="text-white">
                On{" "}
                <span className="text-success">
                  <b>70%</b>
                </span>
                Off on All Products And Accessories
              </h2>
              <div className="mt-3">
                <button className="button-repair">Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-products">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>New Arrivals</h1>
              <p>Your Best Designer Outfits</p>
            </div>
            <NewArrival />
          </div>
        </div>
      </section>

      <section>
        
      </section>
    </>
  );
};

export default Home;
