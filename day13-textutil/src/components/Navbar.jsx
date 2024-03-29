/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = (props) => {
  let headingcolorDark = {
    color: "rgb(139, 149, 201)",
    fontWeight: "500",
    fontSize: "22px",
  };

  let headingcolorLight = {
    color: "rgb(13, 27, 42)",
    fontWeight: "500",
    fontSize: "22px",
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={props.mode === "light" ? headingcolorLight : headingcolorDark}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              style={{cursor: "pointer"}}
              className="form-check-input"
              type="checkbox"
              onClick={props.togglemode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "light" ? "dark" : "light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

/* here we pass default values into it from props */
Navbar.defaultProps = {
  title: "TextUtils",
  about: "About Us",
};
