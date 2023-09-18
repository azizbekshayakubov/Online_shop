/* eslint-disable react/jsx-key */
import { PRODUCTS } from "./products";

const FeaturedProducts = () => {
  return (
    <>
      <div className="row mt-4">
        {PRODUCTS.slice(2, 6).map((product) => (
          <div className="col-3">
            <div key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  alt=""
                  className="card-img-top img-fluid m-auto p-3"
                />
                <div className="card-details">
                  <div className="title m-2">
                    <span>{product.brand}</span>
                    <h5>{product.name}</h5>
                  </div>
                  <div className="card-footer text-center">
                    <p>{product.status}</p>
                    <p>{product.rate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
