import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./applayout.scss";

export default function Applayout() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
