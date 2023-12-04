import { useState } from "react";
import "../../App.scss";
import { userSignUp } from "../../features/authentication";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      userSignUp(fullName, password, email);
      navigate();
      setFullName("");
      setPassword("");
      setEmail("");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form__container">
      <form action="" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="inputs">
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          Sign Up
        </button>
        <p className="question">
          Already have an accout ? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
}
