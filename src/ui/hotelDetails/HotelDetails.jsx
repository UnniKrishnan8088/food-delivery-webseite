import { FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import "./hotelDetails.scss";

export default function HotelDetails() {
  return (
    <div className="hotel__details">
      <div className="details">
        <div className="img">
          <FaRegClock className="icon" />
        </div>
        <div className="working__time">
          <p>Today 10:00am - 10:00pm</p>
          <p>Working Time</p>
        </div>
      </div>
      <div className="details">
        <div className="img">
          <IoLocationOutline className="icon" />
        </div>
        <div className="working__time">
          <p>Thrissur, Kochi</p>
          <p>Our Location</p>
        </div>
      </div>
      <div className="details">
        <div className="img">
          <LuPhoneCall className="icon" />
        </div>
        <div className="working__time">
          <p>+91 1234567891</p>
          <p>Phone Number</p>
        </div>
      </div>
    </div>
  );
}
