import { PRODUCTS, PRODUCTS1 } from "./products";

const Productdetails = () => {
  const productId = selectedProduct || 0;

  const product =
    PRODUCTS.find((p) => p.id === productId) ||
    PRODUCTS1.find((p) => p.id === productId);

  return <></>;
};

export default Productdetails;
