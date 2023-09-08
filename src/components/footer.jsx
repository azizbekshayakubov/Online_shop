import { Link } from "react-router-dom";

import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 d-flex flex-column">
              <h3 className="mb-5">Contact us</h3>
              <div className="footer-details">
                <p className="mb-3">
                  <b>Address:</b> Thika town,Naltex building, 2nd floor
                </p>
                <p className="mb-3">
                  <b>Phone:</b>
                  <a href="tel:+998901230767">Call us +998901230767 </a>
                </p>
                <p className="mb-5">
                  <b>Hours Open:</b> From 8 A.m to 5 P.m
                </p>
                <p className="mb-3">
                  <b>Follow Us </b>
                </p>
                <div className="col-4 social-icons mb-3 d-flex justify-content-around">
                  <Link>
                    <AiFillTwitterCircle className="fs-4" />
                  </Link>
                  <Link>
                    <BsFacebook className="fs-4" />
                  </Link>
                  <Link>
                    <BsInstagram className="fs-4" />
                  </Link>
                  <Link>
                    <BsLinkedin className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-9">
              <p>&copy; Developed by Eclar Developers 2023</p>
            </div>
            <div className="col-3 d-flex justify-content-between">
              <Link>Privacy Policy</Link>
              <Link>Terms of Use</Link>
              <Link>Contact Me</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
