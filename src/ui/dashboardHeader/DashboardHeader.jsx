import { GiHotMeal } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./dashboardHeader.scss";

export default function DashboardHeader() {
  return (
    <div className="dashboard__header">
      <NavLink to="/dashboard/products">
        <div className="header__card" style={{ background: "#f43c28" }}>
          <GiHotMeal className="icon" />
          <h3>36</h3>
          <h4>Total Products</h4>
        </div>
      </NavLink>
      <NavLink to="/dashboard/orders">
        <div className="header__card" style={{ background: "#f48e28" }}>
          <TbTruckDelivery className="icon" />
          <h3>36</h3>
          <h4>Total Orders</h4>
        </div>
      </NavLink>
      <NavLink to="/dashboard/users">
        <div className="header__card" style={{ background: "#f4e028" }}>
          <FaUsers className="icon" />
          <h3>36</h3>
          <h4>Total Users</h4>
        </div>
      </NavLink>
    </div>
  );
}
