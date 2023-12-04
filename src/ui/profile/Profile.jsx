import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { logout } from "../../features/authentication";
import { MdLogout } from "react-icons/md";
import "./profile.scss";

export default function Profile() {
  const [showDropDown, setShowDropDown] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user.user.email;
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };
    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [showDropDown]);

  const handleLogut = () => {
    logout();
    setShowDropDown(!showDropDown);
  };

  return (
    <div className="profile__container" ref={profileRef}>
      <div className="profile" onClick={() => setShowDropDown(!showDropDown)}>
        <p>{userName[0]}</p>
      </div>
      {showDropDown && (
        <div className="drop-down">
          {user?.user?.email === "prasannaunni2001@gmail.com" && (
            <li onClick={() => setShowDropDown(!showDropDown)}>
              <Link to="dashboard">Dashboard</Link>
            </li>
          )}
          <button className="logout" onClick={handleLogut}>
            <MdLogout /> <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}
