import { Link } from "react-router-dom";

import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import logo from "../assets/images/apneck.png";
import { HiOutlineInboxIn } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip p-3 shadow-sm">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p>The trending outfits at 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+998901230767">Call us +998901230767 </a>
              </div>
              <div>
                <Link>
                  <BiPhoneCall className="fs-3 mx-4" />
                </Link>
                <Link>
                  <AiOutlineMail className="fs-3 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 text-center">
              <Link to="/">
                <img src={logo} alt="" className="img-fluid logo" />
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  All
                </span>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Search products"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text" id="basic-addon2">
                  Search
                </button>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-between text-center m-auto">
              <Link to={"/"}>Home</Link>
              <Link to={"shop"}>Shop</Link>
              <Link to={"blog"}>Blog</Link>
              <Link to={"about"}>About</Link>
              <Link to={"contact"}>Contact</Link>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-around">
              <Link className="d-flex   ">
                <HiOutlineInboxIn className="fs-3 mx-2" />
                <p>Wishlist</p>
              </Link>
              <Link className="d-flex ">
                <VscAccount className="fs-3 mx-2" />
                <p>Account</p>
              </Link>
              <Link className="d-flex ">
                <CgShoppingCart className="fs-3 mx-2" />
                <p>Cart</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;