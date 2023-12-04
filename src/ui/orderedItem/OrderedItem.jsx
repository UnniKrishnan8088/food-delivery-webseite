import { truncate } from "../../utils/helpers";
import "./orderedItem.scss";

export default function OrderedItem({ cartItem }) {
  const { image, price, title, description } = cartItem;
  return (
    <div className="ordered__item">
      <div className="ordered__item__img">
        <img src={image} alt="" />
      </div>
      <div className="ordered__item__details">
        <div className="title__and__price">
          <h4>{truncate(title, 10)}</h4>
          <h4>₹ {price}</h4>
        </div>
        <small>{truncate(description, 110)}</small>
      </div>
    </div>
  );
}
