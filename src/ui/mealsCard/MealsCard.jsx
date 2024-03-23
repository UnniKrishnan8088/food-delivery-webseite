import { FaStar } from "react-icons/fa";
import { PiCurrencyInrBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { truncate } from "../../utils/helpers";

import toast from "react-hot-toast";
import "./MealsCard.scss";

export default function MealsCard({ meal }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToYourCart = () => {
    if (user) dispatch(addToCart(meal));
    else toast.error("Sign in to your account");
    console.log(user);
  };

  const { image, price, title, id } = meal;

  return (
    <div className="meals__card">
      <div className="meal__img" onClick={() => navigate(`/meal/${id}`)}>
        <img src={image} alt={title} />
      </div>
      <div className="meal__details">
        <div className="header__one">
          <h3>{truncate(title, 13)}</h3>
          <div className="meal__rating">
            <FaStar className="rating__star" />
            <span>4</span>
          </div>
        </div>
        <div className="header__two">
          <button onClick={addToYourCart}>Add To Cart</button>
          <p className="price">
            <span>
              <PiCurrencyInrBold />
            </span>
            <span>{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
