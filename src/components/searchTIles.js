import React from "react";
import axios from "axios";
import { PRODUCTPAGELIVE } from "../components/actions/actionType";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Tiles({ postdetails }) {
 
  let history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const searchmee = { value: e.target.value };
    //console.log(e.target.value);
    e.preventDefault();

    try {
      const dataw = await axios.post(
        "https://tools-on-rent.herokuapp.com/post/updateliveproduct",
        searchmee
      );
      dispatch({ type: PRODUCTPAGELIVE, payload: dataw.data });
      //console.log(dataw.data);
      // console.log(postdata);
      history.push("/product");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="tilesIndividual" style={{ textAlign: "center" }}>
      <div
        style={{
          width: "100%",
          height: "140px",
          dipslay: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
        key={postdetails._id}
      >
        <img
          style={{
            height: "auto",
            width: "auto",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
          src={
            postdetails.images ||
            "https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI="
          }
          alt="an "
        />
      </div>

      <div style={{ paddingTop: "10px" }}>
        <h1> {postdetails.title}</h1>
        <h2>₹ {postdetails.cpa} /hr</h2>

        <button
          className="buttonexplore1"
          value={postdetails.pid}
          type="submit"
          onClick={handleSubmit}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
export default Tiles;

/*
<Link
  to={{
    pathname: "/product",
    data: postdata.dataw // your data array of objects
  }}
>

</Link>
*/
