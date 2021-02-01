import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const [userData, setUserData] = useState({
    userID: "",
    pass: "",
  });

  const history = useHistory();
  const MoveToHome = () => {
    console.log("Moving to home....");
    history.push("/home");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://tools-on-rent.herokuapp.com/users/start",
        {
          userID: userData.userID,
          pass: userData.pass,
        }
      );
      console.log("====================================");
      // console.log(data[0]);
      console.log("====================================");
      if (
        data[0].email === userData.userID ||
        data[0].password === userData.pass
      ) {
        localStorage.setItem("name", data[0].name);
        localStorage.setItem("state", data[0].state);
        localStorage.setItem("city", data[0].city);
        localStorage.setItem("email", data[0].email);
        MoveToHome();
      } else {
        alert("Please check your email and password!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin">
      <div className="small">
        <div className="brand-wrapper">
          <img src="/logo192.png" alt="logo" className="logo" />
        </div>
        <h3>Welcome Back ! Sign into Your Account</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email Address"
              onChange={(e) => {
                setUserData({ ...userData, userID: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control input"
              id="exampleInputPassword1"
              placeholder="***********"
              onChange={(e) => {
                setUserData({ ...userData, pass: e.target.value });
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Login
          </button>
        </form>
        <a href="#!" class="forgot-password-link">
          Forgot password?
        </a>
        <p class="login-card-footer-text">
          Don't have an account?{" "}
          <a href="/" class="text-reset">
            SIGN UP{" "}
          </a>
        </p>
        <nav class="login-card-footer-nav">
          <a href="#!">Terms of use.</a>
          <a href="#!">Privacy policy</a>
        </nav>
      </div>
    </div>
  );
}
