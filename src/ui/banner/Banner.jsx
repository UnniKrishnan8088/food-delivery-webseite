import { Link } from "react-router-dom";
import BannerCard from "../bannerCard/BannerCard";

import "./banner.scss";

const cardData = [
  {
    image: "burger_sandwich.png",
    category: "Burger",
    description: "Mushroom Sauce",
    price: "90.00",
  },
  {
    image: "Combo-Junk-Food-PNG-Image 2.png",
    category: "Food Combo",
    description: "Mushroom Sauce",
    price: "120",
  },
  {
    image: "pizza-png-12 1.png",
    category: "Pizza",
    description: "Mushroom Sauce",
    price: "60",
  },
  {
    image: "cake.png",
    category: "Cake",
    description: "Mushroom Sauce",
    price: "200",
  },
];
export default function Banner() {
  return (
    <header>
      <div className="left">
        <div className="bike__delivery">
          <p>Bike Delivery</p>
          <img src="/public/bike-delivery.png" alt="" />
        </div>
        <div className="heading">
          <h1>The Fastest</h1>
          <h1>Delivery</h1>
          <h1>
            In <span>Your City</span>
          </h1>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed
          proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed
          tortor etiam volutpat ipsum.
        </p>
        <button className="order__now">
          <Link to="/all-meals">Order Now</Link>
        </button>
      </div>
      <div className="right">
        <div className="banner__cards">
          <div className="cards">
            {cardData.map((data, i) => (
              <BannerCard key={i} data={data} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
