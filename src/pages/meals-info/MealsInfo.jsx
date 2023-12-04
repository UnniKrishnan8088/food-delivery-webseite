import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Spinner from "../../ui/spinner/Spinner";
import Footer from "../../ui/footer/Footer";

import "./mealsInfo.scss";

export default function MealsInfo() {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const getDetails = async (id) => {
      try {
        setLoading(true);
        const mealInfo = await getDoc(doc(fireDB, "products", id));
        setInfo(mealInfo.data());
        console.log(mealInfo.data());
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getDetails(id);
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="meals__info__details">
        <div className="inner-wrapper">
          <div className="img__wrapper">
            <img src={info.image} alt="" />
          </div>
          <div className="info__details">
            <div className="info__heading">
              <h3>{info.title}</h3>
              <span>{info.category}</span>
            </div>
            <p>{info.description}</p>
            <div className="add__to__cart">
              <button onClick={() => dispatch(addToCart(info))}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
