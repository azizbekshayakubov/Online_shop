import Productdetails from "../components/productdetails";
import { useContext } from "react";
import { ShopContext } from "../components/shopcontext";

const Details = () => {
  const { getTotalCartAmount, ClearCart, getTotalCartProducts, cartItems } =
    useContext(ShopContext);
  return (
    <>
      <section className="detals">
        <div className="container-xxl">
          <div className="row">
            <Productdetails />
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
