import React, { useState } from "react";
import "./product.css";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";
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
    marginTop: "12px",
  },
  input: {
    color: "rgb(240, 240, 240)",
    fontSize: "12px",
  },
  button: {
    marginTop: "30px",
  },
}));

function GeneratePID() {
  var pidT = "";
  let CurrentDate = new Date();
  pidT =
    CurrentDate.getFullYear() +
    "" +
    CurrentDate.getFullYear() +
    "" +
    CurrentDate.getUTCDate() +
    "" +
    CurrentDate.getUTCHours() +
    "" +
    CurrentDate.getUTCMinutes() +
    "" +
    CurrentDate.getUTCSeconds() +
    "" +
    CurrentDate.getUTCMilliseconds() +
    "" +
    localStorage.getItem("email");
  return pidT;
}

function submitValidate(title, pid, description, cpa, city, state, images) {
  if (
    title.trim().length > 3 &&
    description.trim().length > 9 &&
    cpa > 0 &&
    city.trim().length !== 0 &&
    state.trim().length !== 0 &&
    images.length > 0 &&
    pid.length > 0
  )
    return true;
  else return false;
}

export default function Product() {
  const [itemData, setItemData] = useState({
    title: "tool",
    pid: GeneratePID(),
    description: "A wonderful tool.",
    cpa: 1,
    city: localStorage.getItem("city"),
    state: localStorage.getItem("state"),
    images: "",
    sender: localStorage.getItem("email"),
  });
  const history = useHistory();
  const handleSubmit = (e) => {
    const MoveToHome = () => {
      history.push("/home");
    };

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
      submitValidate(
        itemData.title,
        itemData.pid,
        itemData.description,
        itemData.cpa,
        itemData.city,
        itemData.state,
        itemData.images
      )
    ) {
      try {
        /* eslint-disable */
        const { data } = axios.post(
          "https://tools-on-rent.herokuapp.com/users/addItem",
          {
            title: itemData.title,
            pid: itemData.pid,
            description: itemData.description,
            cpa: itemData.cpa,
            city: itemData.city,
            state: itemData.state,
            images: itemData.images,
            sender: itemData.sender,
          }
        );
        MoveToHome();
      } catch (error) {
        /* eslint-disable */
        console.log(error);
      }
    } else {
      showTost();
    }
  };

  const classes = useStyles();

  return (
    <div className="row" style={{ backgroundColor: "rgba(255,255,102)" }}>
      <div
        className="halfPage"
        style={{ height: "100vh", justifyContent: "center", display: "flex" }}
      >
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            paddingBlock: "10px",
          }}
        >
          {itemData.images === "" ? (
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            />
          ) : (
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <img
                src={itemData.images}
                alt="Image"
                style={{
                  width: "200px",
                  height: "200px",
                  // border: "2px solid #ccc",
                  marginLeft: "5px",
                  marginRight: "5px",
                  paddingBottom: "8px",
                  alignSelf: "center",
                  justifySelf: "center",
                }}
                // alt="preview"
              />
            </div>
          )}
        </div>
      </div>
      <div className="halfPage">
        <div
          className="itemForm"
          style={{
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="addItemCardContent">
            <div style={{ height: "fit-content" }}>
              <form onSubmit={handleSubmit} style={{ height: "fit-content" }}>
                <h2
                  style={{
                    marginBottom: "10px",
                    marginTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Add Tool
                </h2>
                <TextField
                  variant="outlined"
                  name="title"
                  fullWidth
                  label="Title"
                  value={itemData.title}
                  helperText="At least four characters."
                  error={itemData.title.trim().length > 3 ? false : true}
                  onChange={(e) => {
                    setItemData({ ...itemData, title: e.target.value.trim() });
                  }}
                  className={classes.textField}
                  style={{ fontWeight: "bold" }}
                  InputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                />
                <TextField
                  variant="outlined"
                  name="description"
                  fullWidth
                  label="Description"
                  value={itemData.description}
                  helperText="Enter 10 characters."
                  error={itemData.description.trim().length > 9 ? false : true}
                  onChange={(e) => {
                    setItemData({ ...itemData, description: e.target.value });
                  }}
                  className={classes.textField}
                  style={{ fontWeight: "bold" }}
                  InputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                />
                <TextField
                  variant="outlined"
                  name="cpa"
                  helperText="Cost should be greater then zero."
                  fullWidth
                  error={itemData.cpa > 0 ? false : true}
                  label="Cost Per Hour"
                  value={itemData.cpa}
                  onChange={(e) => {
                    setItemData({ ...itemData, cpa: e.target.value });
                  }}
                  type="number"
                  className={classes.textField}
                  style={{ fontWeight: "bold" }}
                  InputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                />
                <TextField
                  variant="outlined"
                  name="city"
                  fullWidth
                  label="City"
                  value={itemData.city}
                  onChange={(e) => {
                    setItemData({ ...itemData, city: e.target.value });
                  }}
                  className={classes.textField}
                  style={{ fontWeight: "bold" }}
                  InputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                />
                <TextField
                  variant="outlined"
                  name="state"
                  fullWidth
                  label="State"
                  value={itemData.state}
                  onChange={(e) => {
                    setItemData({ ...itemData, state: e.target.value });
                  }}
                  className={classes.textField}
                  style={{ fontWeight: "bold" }}
                  InputProps={{ style: { fontSize: 13 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                />
                <div style={{ paddingTop: "10px", height: "fit-content" }}>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setItemData({ ...itemData, images: base64 })
                    }
                    style={{ color: "red" }}
                  />
                </div>
                <div style={{ height: "fit-content" }}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    color="secondary"
                    type="submit"
                    className={classes.button}
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    Add
                  </Button>
                </div>
              </form>
            </div>
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
      </div>
    </div>
  );
}
