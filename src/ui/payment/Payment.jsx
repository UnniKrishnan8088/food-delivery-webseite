import { useState } from "react";
import "./payment.scss";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";

export default function Payment({ amount, cart, onClose }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //check the fields are null
    if (!name || !phone || !address || !pincode)
      toast.error("Fields are required");

    //creating a user info objects
    const userInfo = {
      name,
      address,
      pincode,
      phone,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    //close the popup
    onClose();

    const options = {
      key: "rzp_test_kuSeXbik3aSXE2",
      key_secret: "0fvvngiZQs7SoRxk5gpszZJU",
      amount: amount * 100,
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        toast.success("Payment Successfull");

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cart,
          userInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId,
        };

        try {
          const result = addDoc(collection(fireDB, "orders"), orderInfo);
          console.log(result);
        } catch (err) {
          toast.error(err.message);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="payment">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Buy Now</button>
      </form>
    </div>
  );
}
