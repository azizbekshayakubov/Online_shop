import { ShopContext } from "./shopcontext";

const Prod = (props) => {
  const { id, name, image, price, brand } = props.data;

  return (
    <>
      <div key={id} className="col-3">
        <div className="card">
          <img src={image} alt="" className="img-fluid card-img-top" />
          <div className="card-details p-2">
            <span>{brand}</span>
            <h5 className="my-3">{name}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prod;
