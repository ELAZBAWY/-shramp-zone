// Navbar component with logo, navigation links, search, and cart button
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import type { Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";
type NavbarProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
import { Link } from "react-router-dom";

function Navbar({ searchTerm, setSearchTerm }: NavbarProps) {
  const location = useLocation();
  const isMenuPage = location.pathname === "/menu";

  return (
    <nav className="py-3 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center px-5">
        {/* Logo section */}
        <div
          className="d-flex align-items-center"
          style={{ width: "50px", height: "50px" }}
        >
          <Link to="/">
            {" "}
            <img
              src="/image/Logo.png"
              alt=""
              className="img-fluid object-fit-cover w-100 h-100"
            />
          </Link>
        </div>

        {/* Navigation links and search box */}
        <div className="inpute-links d-flex align-items-center gap-1 me-5">
          {/* Search box (only visible on Menu page) */}
          {isMenuPage && (
            <div className="position-relative" style={{ maxWidth: "400px" }}>
              <input
                type="text"
                placeholder="Search..."
                className="form-control bg-warning rounded-pill ps-3 pe-5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="position-absolute"
                style={{
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6c0719",
                  pointerEvents: "none",
                }}
              />
            </div>
          )}

          {/* Navigation links */}
          <ul className="d-flex list-unstyled mb-0 gap-4 align-items-center">
            <li className="nav-item">
              <Link to="/" className="text-warning fw-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-warning fw-bold">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-warning fw-bold">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-warning fw-bold">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Cart button section */}
        <div className="position-relative" style={{ maxWidth: "200px" }}>
          <button className="btn w-100 bg-warning text-dark rounded-pill position-relative pe-5">
            Your shopping cart
          </button>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="position-absolute"
            style={{
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#6c0719",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
