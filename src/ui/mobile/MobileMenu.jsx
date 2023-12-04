import { Link, useNavigate } from "react-router-dom";
import { IoHome, IoLogIn } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdLogout } from "react-icons/md";

import "./mobileMenu.scss";
import { logout } from "../../features/authentication";

export default function MobileMenu({ showMobileMenu, user }) {
  const navigate = useNavigate();
  const navigatePage = (path) => {
    navigate(path);
    showMobileMenu();
  };
  return (
    <div className="mobile__menu">
      {user && (
        <div className="user__details">
          <div className="user__icon">
            <h4>{user?.user?.email[0]}</h4>
          </div>
          <p>{user?.user?.email}</p>
        </div>
      )}
      <ul>
        <div className="nav__links">
          <li onClick={() => navigatePage("home")}>
            <IoHome />
            <Link to="home">Home</Link>
          </li>
          <li onClick={() => navigatePage("all-meals")}>
            <GiFoodTruck />
            <Link to="all-meals">All Foods</Link>
          </li>
          {user && (
            <li onClick={() => navigatePage("order")}>
              <TbTruckDelivery />
              <Link to="order">My Orders</Link>
            </li>
          )}
          {!user && (
            <li onClick={() => navigatePage("signup")}>
              <IoLogIn />
              <Link>Sign In</Link>
            </li>
          )}

          {user && (
            <li className="logout" onClick={logout}>
              <MdLogout />
              <button>Log out</button>
            </li>
          )}
        </div>
      </ul>
    </div>
  );
}
