import { PiCurrencyInrBold } from "react-icons/pi";
import "./bannerCard.scss";

export default function BannerCard({ data }) {
  const { image, category, description, price } = data;
  return (
    <div className="banner__card">
      <img src={`/public/assets/${image}`} alt="" />
      <div className="card">
        <h3>{category}</h3>
        <p className="desc">{description}</p>
        <p className="price">
          <span>
            <PiCurrencyInrBold />
          </span>
          {price}
        </p>
      </div>
    </div>
  );
}
