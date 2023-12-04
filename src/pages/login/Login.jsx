import { useState } from "react";
import { signin } from "../../features/authentication";
import { Link } from "react-router-dom";
import "../../App.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password);
  };
  return (
    <div className="form__container">
      <form action="" onSubmit={handleSubmit}>
        <h3>Sign In</h3>
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
        <button type="submit">Login</button>
        <p className="question">
          New to our community ? <Link className="question" to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
