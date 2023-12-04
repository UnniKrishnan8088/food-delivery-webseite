import { MdDeleteOutline } from "react-icons/md";
import { truncate } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/cartSlice";

import "./cartItem.scss";

export default function CartItem({ item }) {
  const { id, image, title, description, price } = item;
  const dispatch = useDispatch();

  return (
    <div className="cart__item__card">
      <div className="item__image">
        <img src={image} alt="" />
      </div>
      <div className="item__details">
        <div className="item__title">
          <h4>{title}</h4>
          <button onClick={() => dispatch(deleteItem(id))}>
            <MdDeleteOutline />
          </button>
        </div>
        <small>{truncate(description, 20)}</small>
        <div className="item__price">
          <h3>₹ {price}</h3>
        </div>
      </div>
    </div>
  );
}
