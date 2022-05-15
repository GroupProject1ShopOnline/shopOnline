
import React from "react";
import niket from "../images/niket.jpg";
import aditya from "../images/aditya.jpeg";

export default function aboutPage() {
  return (
    <div
      align="center"
      style={{
        fontSize: "16px",
       
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/002/074/327/large_2x/empty-clean-white-room-with-branches-decor-in-3d-rendering-free-photo.jpg")`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        color: "black",
      }}
    >
      <div
        style={{
          width: "90%",
          alignItems: "left",
          backgroundColor: "rgb(85, 84, 84, 0.2)",
          padding: "10px",
        }}
      >
        <h1 style={{ fontWeight: "bold",fontFamily:"cursive",padding: "10px",color: "yellow" }}>About the Site</h1>
        <div>
          This site is designed for providing support to small workers (
          Carpainter, Electriction, plumber, etc..) who have to take tools on
          rent from others and have to struggle for finding cheap tools nearby.
          The solution to this is this site which shows the worker his/her
          required tool nearby at compareable prices.
          <br />
        </div>
        <h1 style={{ fontWeight: "bold",fontFamily:"cursive",padding: "10px",color: "yellow" }}>Creators</h1>
        <div>
          The website has been made as a group project of the following students
          of Indian Institute of Information Technology Una:
        </div>
        <div style={{ alignItems: "center" }} className="row">
          <div
            style={{
              width: "50%",
              alignItems: "center",
              
            }}
          >
            <img
              src={niket}
              alt="Niket Agrawal"
              style={{ borderRadius: "50%", height: "auto", width: "180px"}}
            />
            <h3>Niket Agrawal</h3>
            <a href="https://niket-iiitu.github.io/Portfolio/">Portfolio</a>
          </div>
          <div
            style={{
              width: "50%",
              alignItems: "center",
            
            }}
          >
            <img
              src={aditya}
              alt="Aditya Singh"
              style={{ borderRadius: "100%", height: "auto", width: "190px" }}
            />
            <h3>Aditya Singh</h3>
            <a href="https://github.com/Aditya-code-collab">Portfolio</a>
          </div>
        </div>
      </div>
    </div>
  );
}
