import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";

import toast from "react-hot-toast";
import OrderedItem from "../../ui/orderedItem/OrderedItem";
import Spinner from "../../ui/spinner/Spinner";

import "./order.scss";

export default function Order() {
  const user = JSON.parse(localStorage.getItem("user")).user.uid;

  const [orders, setOrders] = useState([]);

  const orderedItem = [];
  const userOrders = orders.filter((order) => order.userid === user);

  const { isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      try {
        const querySnapshot = await getDocs(collection(fireDB, "orders"));
        querySnapshot.forEach((doc) => {
          orderedItem.push(doc.data());
        });
        setOrders(orderedItem);
      } catch (err) {
        toast.error(err.message);
      }
    },
  });

  if (isLoading) return <Spinner />;

  return (
    <div className="container">
      {userOrders.map((order, index) => {
        return (
          <>
            <p>
              Ordered Date: <strong>{order.date}</strong>
            </p>
            <div className="inner__container" key={index}>
              {order.cart.map((cartItem) => (
                <OrderedItem cartItem={cartItem} key={cartItem.id} />
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
}
