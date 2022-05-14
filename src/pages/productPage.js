import { useEffect } from "react";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";

var todayV = new Date();
var dd = todayV.getDate();
var mm = todayV.getMonth() + 1; //January is 0!
var yyyy = todayV.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

var today = yyyy + "-" + mm + "-" + dd;

function Product() {
  const postdata = useSelector((state) => state.productu);

  useEffect(() => {
    //dispatch(showallposts());
  }, postdata);

  // alert(postdata)
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d89sqjv",
        "template_2lfes0y",
        ".classnameform",
        "user_IIY4cwzcRcdxxEkqbL5pu"
      )
      .then(
        (result) => {
          alert(
            "Congrats 🎉  One confirmation mail is sent to your email regarding the order please resend it to us after verifying the order 👍 ! Happy Shopping :)"
          );
        },
        (error) => {
          /* eslint-disable */
          console.log(error.text);
        }
      );
  }

  return (
    <div style={{ width: "100vw" }}>
      <div className="Mheader " style={{ width: "100vw" }}>
        <div>
          <img className="logoheader" src="logo192.png" />
          <a className="a">Help</a>
          <a className="a" href="/products">
            Rent your tools
          </a>
          <a className="a" href="/aboutUs">
            About
          </a>
        </div>
      </div>
      <div style={{ display: "flex", width: "100vw", flexFlow: "row" }}>
        <div
          style={{
            flex: "1 1 auto",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="productimage"
            resizeMode={"contain"}
            style={{
              display: "flex",
              flex: 1,
              alignSelf: "stretch",
              scrollBehavior: "smooth",
            }}
            width={500}
            height={400}
            src={
              postdata[0].images ||
              "https://www.sicilywelcome.com/assets/images/placeholders/no-img-placeholder.png"
            }
          />
        </div>

        <div className="discription" style={{ flex: " 0 1 450px" }}>
          <h1>{postdata[0].title} </h1>
          <hr />
          <h2>₹ {postdata[0].cpa} per hour</h2>
          <h3>Product discription -- {postdata[0].description} </h3>
          <br />
          <br />
          <form onSubmit={sendEmail} className="classnameform">
            <h2>Select Proper date and timeing ⏲️ </h2>
            <br />
            <h3>RentIn</h3>
            <input
              className="inputproduct"
              type="date"
              min={today}
              name="date1"
              id=""
            />
            <input
              style={{ marginLeft: "40px" }}
              className="inputproduct"
              type="time"
              name="time1"
              min="9"
              placeholder="total no of hours"
            />
            <br />
            <br />
            <hr />
            <h3>RentOut</h3>
            <input
              className="inputproduct"
              id="datefield"
              name="date2"
              type="date"
            />

            <input
              style={{ marginLeft: "40px" }}
              className="inputproduct"
              type="time"
              name="time2"
              placeholder="total no of hours"
            />
            <br />
            <br />
            <hr />
            <br />
            <h3>Your Phone</h3>
            <input
              style={{ width: "370px" }}
              className="inputproduct"
              placeholder="+91 123456789"
              name="mytel"
              type="tel"
              pattern="[+]{1}[0-9]{10,12}"
            />
            <br />
            <br />
            <h3>Your Email</h3>
            <input
              style={{ width: "370px" }}
              className="inputproduct"
              placeholder="abc@mail.com"
              name="email"
              type="email"
            />
            <hr />
            <input type="hidden" name="toolname" value={postdata[0].title} />
            <input type="hidden" name="toolid" value={postdata[0]._id}></input>
            <input
              type="hidden"
              name="toolprice"
              value={postdata[0].cpa}
            ></input>
            <br />
            <br />
            <div style={{ marginLeft: "75px" }}>
              <button type="submit" className="buttonpro">
                Take on rent
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Product;
