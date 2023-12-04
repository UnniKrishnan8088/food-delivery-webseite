import { PiCurrencyInrBold } from "react-icons/pi";
import { useState } from "react";

import Payment from "../payment/Payment";
import "./cartTotal.scss";

export default function CartTotal({ total, cart }) {
  const [showPayment, setShowPayment] = useState(false);

  const shippingPrice = 30;
  const totalAmount = total + shippingPrice;

  const showPaymentPopup = () => {
    if (!total) return;
    setShowPayment(true);
  };
  return (
    <div className="cart__total">
      <h4>Cart Total</h4>
      <section>
        <div className="bill">
          <p>Subtotal</p>
          <p>
            <span>
              <PiCurrencyInrBold />
            </span>
            {total}
          </p>
        </div>
        <div className="bill">
          <p>Shipping</p>
          <p>
            <span>
              <PiCurrencyInrBold />
            </span>
            {shippingPrice}
          </p>
        </div>
      </section>
      <div className="bill">
        <h4>Total</h4>
        <h4>
          <span>
            <PiCurrencyInrBold />
          </span>
          {total && totalAmount}
        </h4>
      </div>
      <button onClick={showPaymentPopup}>Checkout</button>
      {showPayment && (
        <Payment
          onClose={() => setShowPayment(false)}
          amount={totalAmount}
          cart={cart}
        />
      )}
    </div>
  );
}
