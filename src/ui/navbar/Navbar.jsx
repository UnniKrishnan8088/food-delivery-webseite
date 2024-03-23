import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState } from "react";
import Profile from "../profile/Profile";
import MobileMenu from "../mobile/MobileMenu";
import "./navbar.scss";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const cart = useSelector((state) => state.cart);
  const [query, setQuery] = useState("");
  // const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!query) return;
    e.preventDefault();
    navigate(`/search-result/${query}`);
    setQuery("");
  };
  const showMobileMenu = () => {
    document
      .querySelector(".mobile__menu__container")
      .classList.toggle("nav__active");
  };

  return (
    <nav>
      <div className="logo">
        <Link to="home">
          <img src="/public/assets/Logo.png" alt="" />
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="all-meals">All Foods</NavLink>
        </li>
        {user && (
          <li>
            <NavLink to="order">My Orders</NavLink>
          </li>
        )}
        {!user && (
          <li>
            <NavLink to="signup">Sign Up</NavLink>
          </li>
        )}
      </ul>
      <section>
        <div className="search__and__cart">
          <div className="input__container">
            <form action="" onSubmit={handleSubmit}>
              <IoSearchOutline className="search-icon" />
              <input
                type="text"
                placeholder="Chicken, beef..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
            <li className="cart-btn">
              {user && (
                <NavLink to="cart">
                  <button>
                    <MdOutlineShoppingCart />
                  </button>
                  <p>{cart.length}</p>
                </NavLink>
              )}
            </li>
          </div>
        </div>
        {user && <Profile />}
      </section>
      <div className="mob__nav">
        {user && (
          <Link to="/cart">
            <div className="mob__cart">
              <button className="mob__cart__btn">
                <MdOutlineShoppingCart />
              </button>
            </div>
          </Link>
        )}
        <button className="mobile-menu" onClick={showMobileMenu}>
          <IoMenu />
        </button>
      </div>
      <div className="mobile__menu__container">
        <MobileMenu showMobileMenu={showMobileMenu} user={user} />
      </div>
    </nav>
  );
}
