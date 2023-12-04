import { useSelector } from "react-redux";
import CartItem from "../../ui/cartItem/CartItem";
import "./cart.scss";
import CartTotal from "../../ui/cartTotal/CartTotal";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const totalAmonut = cart.reduce((acc, item) => acc + Number(item.price), 0);

  console.log(cart);
  return (
    <div className="cart__container">
      <div className="left">
        {!cart.length && <p>Cart is Empty</p>}
        {cart?.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="right">
        <CartTotal total={totalAmonut} cart={cart} />
      </div>
    </div>
  );
}
