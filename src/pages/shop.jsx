import Shopitems from "../components/shopitems";

const Shop = () => {
  return (
    <>
      <section className="shop-banner p-2">
        <div className="container-xxl">
          <div className="row justify-content-center align-items-center ">
            <div className="repair-details text-center p-5">
              <div>
                <h2 className="text-white">
                  <span className="text-success">
                    <b>100%</b>
                  </span>
                  Off on All Products And Accessories
                </h2>
              </div>
              <div>
                <p className="text-white">Make Your Ordes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-products p-5">
        <div className="container-xxl">
          <div className="row">
            <Shopitems />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
