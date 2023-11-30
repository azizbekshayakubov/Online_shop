import { useContext } from "react";
import { ShopContext } from "./shopcontext";

const Cartitems = (props) => {
  const { id, name, image, price, brand } = props.data;
  const {
    viewProductDetails,
    addToCart,
    cartItems,
    removeToCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  return (
    <>
      <tbody key={id}>
        <tr>
          <td className="col-3">
            <img src={image} alt="" className="img-fluid" />
          </td>
          <td className="col-3">
            <p>{brand}</p>
            <p>{name}</p>
            <p>{price}</p>
          </td>
          <td>
            <button
              className="add-btn"
              onClick={() => {
                addToCart(id);
              }}
            >
              +
            </button>
            <input
              type="text"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button
              className="add-btn"
              onClick={() => {
                removeToCart(id);
                event.target.classlist.toggle("red");
              }}
            >
              -
            </button>
          </td>

          <td>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter coupon code ..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                Search
              </span>
            </div>
          </td>
        </tr>
        <div className="mb-2"></div>
      </tbody>
    </>
  );
};

export default Cartitems;
