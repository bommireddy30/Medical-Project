import "./LogIn.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <Card>
      <div className="login">
        <div className="logo">
          <span className="login-title">LOGIN</span>
        </div>
        <div className="user-name">
          <label className="input-label">User Name:</label>
          <input type="text" className="input-field" />
        </div>
        <div className="password">
          <label className="input-label">Password:</label>
          <input type="password" className="input-field" />
        </div>
        <div className="sign-up">
          <div>
            New User? <Link to="/register">Click Here</Link> to SignUp
          </div>
        </div>
        <div className="submit">
          <button type="submit" className="submit-btn">
            Login
          </button>
        </div>
      </div>
    </Card>
  );
};

export default LogIn;
