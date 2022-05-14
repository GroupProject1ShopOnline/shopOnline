import React, { useState } from "react";
import "./signUp.css";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  textField: {
    backgroundColor: "rgb(255,255,255,1)",
    borderRadius: theme.shape.borderRadius,
    textColor: "white",
  },
}));

function submitValidator(name, city, state, email, password) {
  if (
    name.trim().length > 3 &&
    city.trim().length > 1 &&
    state.trim().length > 2 &&
    email.trim().length > 3 &&
    password.trim().length > 3
  )
    return true;
  else return false;
}

export default function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    state: "",
    city: "",
    email: "",
    password: "",
  });

  const [formError, setError] = useState({
    name: false,
    state: false,
    city: false,
    email: false,
    password: false,
  });

  const classes = useStyles();
  const history = useHistory();

  const MoveToHome = () => {
    console.log("Moving to home....");
    history.push("/home");
  };

  const handleSubmit = (e) => {
    const showTost = () =>
      toast.warn(
        <p style={{ fontSize: "15px", fontWeight: "bold" }}>
          <i>Please fill the form correctly!</i>
        </p>,
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    e.preventDefault();
    if (
      submitValidator(
        userData.name,
        userData.city,
        userData.state,
        userData.email,
        userData.password
      )
    ) {
      try {
        const {} = axios.post(
          "https://tools-on-rent.herokuapp.com/users/addUser",
          {
            name: userData.name,
            state: userData.state,
            city: userData.city,
            email: userData.email,
            password: userData.password,
          }
        );
        localStorage.setItem("name", userData.name);
        localStorage.setItem("state", userData.state);
        localStorage.setItem("city", userData.city);
        localStorage.setItem("email", userData.email);
        MoveToHome();
      } catch (err) {
        console.log(err);
      }
    } else {
      showTost();
    }
    // SubmitUserData(userData);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp4185680.jpg")`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          alignItems: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <center>
          <form noValidate onSubmit={handleSubmit}>
            <div className="SignUpCardContent">
              <h2
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                Sign Up
              </h2>
              <div className="textField">
                <TextField
                  variant="filled"
                  name="name"
                  fullWidth
                  label="Full Name"
                  value={userData.name}
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value });
                    setError({
                      ...formError,
                      name: e.target.value.trim().length > 3 ? false : true,
                    });
                  }}
                  helperText={
                    formError.name ? "At least four characters." : null
                  }
                  error={formError.name}
                  className={classes.textField}
                />
              </div>
              <div className="textField">
                <TextField
                  name="city"
                  variant="filled"
                  fullWidth
                  label="City"
                  value={userData.city}
                  helperText={
                    formError.city ? "At least two characters." : null
                  }
                  error={formError.city}
                  onChange={(e) => {
                    setUserData({ ...userData, city: e.target.value });
                    setError({
                      ...formError,
                      city: e.target.value.trim().length > 1 ? false : true,
                    });
                  }}
                  className={classes.textField}
                />
              </div>
              <div className="textField">
                <TextField
                  name="state"
                  variant="filled"
                  fullWidth
                  label="State"
                  value={userData.state}
                  helperText={
                    formError.state ? "At least three characters." : null
                  }
                  error={setError.state}
                  onChange={(e) => {
                    setUserData({ ...userData, state: e.target.value });
                    setError({
                      ...formError,
                      state: e.target.value.trim().length > 2 ? false : true,
                    });
                  }}
                  className={classes.textField}
                />
              </div>
              <div className="textField">
                <TextField
                  name="email"
                  variant="filled"
                  fullWidth
                  label="Email"
                  value={userData.email}
                  helperText={
                    formError.email ? "At least four characters." : null
                  }
                  error={formError.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                    setError({
                      ...formError,
                      email: e.target.value.trim().length > 3 ? false : true,
                    });
                  }}
                  className={classes.textField}
                />
              </div>
              <div className="textField">
                <TextField
                  name="password"
                  variant="filled"
                  fullWidth
                  label="Password"
                  value={userData.password}
                  helperText={
                    formError.password ? "At least four characters." : null
                  }
                  error={formError.password}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                    setError({
                      ...formError,
                      password: e.target.value.trim().length > 3 ? false : true,
                    });
                  }}
                  type="password"
                  className={classes.textField}
                />
              </div>
              <div className="button">
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
                <div style={{ marginTop: "20px", textColor: "white" }}>
                  <a href="/SignIn">Already have an account? Sign In</a>
                </div>
              </div>
            </div>
          </form>
        </center>
      </div>
      <div style={{ alignContent: "end", show: "flex" }}>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}
