import React, { useEffect } from "react";
import axios from "axios";
import { PRODUCTPAGELIVE } from "../components/actions/actionType";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function Tiles({ postdetails }) {
  const postdata = useSelector((state) => state.productu);
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
    <div className="tilesIndividual" style={{textAlign:"center"}}>
      <img style={{width:"60%", height:"auto"}}  src={ postdetails.images ||"https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI="}/>
      <h1> {postdetails.title}</h1>
      <h2>₹ {postdetails.cpa} /hr</h2>
     
      <button className="buttonexplore1" value={postdetails.pid} type="submit" onClick={handleSubmit}>
      View Details
      </button>
     
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
