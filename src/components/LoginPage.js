import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Login.css";

const EMAIL = "stackpro@gmail.com";
const PASSWORD = "stackpro";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (EMAIL === email && PASSWORD === password) {
      window.localStorage.setItem("isAuth", true);
      history.push("/homepage");
    } else {
    }
  };
  const SignInForm = () => (
    <div>
      <div className="h3 offset-5 text-danger mt-5 pt-5">Please Login</div>
      <form className="w-25 offset-4">
        <img
          src="http://img.clipartlook.com/user-user-clipart-528_594.png"
          alt="login"
          style={{ height: "80px", marginLeft: "120px" }}
        ></img>
        <h2 className="text-center">Log in</h2>
        <div className="form-group">
          <input
            onChange={handleChangeEmail}
            type="text"
            className="form-control"
            value={email}
            placeholder="Email"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChangePassword}
            type="password"
            value={password}
            className="form-control"
            placeholder="Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
  return <div>{SignInForm()}</div>;
}
