import { useState, useEffect } from "react";
import SearchTiles from "../components/searchTIles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH, CITYNAME } from "../components/actions/actionType";
import "./slideshow.css"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {  useHistory } from "react-router-dom";
function Header() {
  let history = useHistory();
  //   const [userData, setUserData] = useState({
  //     name: "",
  //     state: "",
  //     city: "",
  //     email: "",
  //     password: "",
  //   });
  const dispatch = useDispatch();
  const [searchdata, setsearchdata] = useState({
    state: "",
    city: "",
    tool: "",
  });
  //search box
  const items = [
    {
      _id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  const [filterdata, setFilterdata] = useState([]);

  const postdata = useSelector((state) => state.searchu);
  const citynamesData = useSelector((state) => state.cityu);
  var citynamesData2 = [];
const[showfilterbox,setFilterbox]=useState(false);
  //console.log(citynamesData);
  for (var i = 0; i < citynamesData.length; i++) {
    citynamesData2.push(citynamesData[i].city);
  }
  const set1 = new Set(citynamesData2);
  const citynamesData3 = Array.from(set1);
  //console.log(set1);

  useEffect(() => {
    //dispatch(showallposts());
    console.clear();
    console.log("Happy Shopping !!!");
    console.log(user.toString());
    if(user.toString()==="null"){
      history.push("/SignIn");
    }
   // history.push("/SignIn");
  }, [postdata, citynamesData]);

  //console.log(postdata);
/* eslint-disable */
  const user = localStorage.getItem("email");
function logout(){
  
  localStorage.setItem("name", null);
        localStorage.setItem("state", null);
        localStorage.setItem("city", null);
        localStorage.setItem("email", null);
        alert("Logged out successfully");
        history.push("/SignIn")
}
  const handleSubmit = async (e) => {
    //console.log(searchdata);

    const searchmee = {
      state: searchdata.state,
      city: searchdata.city,
      tool: searchdata.tool,
    };
    //console.log(searchmee);

    e.preventDefault();
    try {
      const dataw = await axios.post(
        "https://tools-on-rent.herokuapp.com/post/search",
        searchmee
      );
      dispatch({ type: SEARCH, payload: dataw.data });
      //console.log("qq");
      //console.log(dataw.data);
      var arr1 = dataw.data;
      var newarr = [];
      for (let i = 0; i < arr1.length; i++) {
        newarr.push({ title: arr1[i].title });

      }
      const finalarr = newarr;
     // console.log("hm");
      //console.log(finalarr);
      setFilterdata(dataw.data);
      setFilterbox(true);
      //console.log(postdata);
    } catch (err) {
      /* eslint-disable */
      console.log(err);
    }
  };

  ////////////
  const findcityname = async (e) => {
    // console.log(searchdata);

    const searchmee = {
      state: e,
    };
    //console.log(searchmee);

    // e.preventDefault();
    try {
      const dataw = await axios.post(
        "https://tools-on-rent.herokuapp.com/post/cityname",
        searchmee
      );
      dispatch({ type: CITYNAME, payload: dataw.data });

      //console.log("ok");
    } catch (err) {
      /* eslint-disable */
      console.log(err);
    }
  };
  const slideImages = [
    {
      url: 'https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2022/01/The-Best-Tool-Rental-Service-Options.jpg',

    },
    {
      url: 'https://craftsmanprotools.com/wp-content/uploads/2020/06/buying-reconditioned-tools.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'https://files.sysers.com/cp/upload/rentals9700/gallery/full/toolsrental.jpg',
      caption: 'Slide 3'
    },
  ];



  return (
    <div>
      <div className="topportion">
        <div className="Mheader ">
          <div>
            <img className="logoheader" src="logo192.png" />
            <div style={{ display:"inline-block"}}  className="a">Hi {user}</div>
            <a className="a" href="/products">
              Rent your tools
            </a>
            <a className="a" href="/aboutUs">
              About
            </a>
            <a className="a" href="/signIn">
              Login
            </a>
            <a className="a" onClick={logout}>
              Logout
            </a>
          </div>
        </div>


        <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', flex: 1 }}>

          <div className="texti">
            <h1 className="text ">Earn Passive </h1>
            <h1 className="text">Rental Income </h1>
            <a href="/products" className="buttonexplore ">Rent Your Tools Today  </a>
          </div>

          <div className="slide-container">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>

                  </div>
                </div>
              ))}
            </Slide>
          </div>

        </div>
      </div>




      <div className="searchme">
        <form >
          <div style={{ display: 'inline-block' }}>
            <select
              className="searchname a1"
              value={searchdata.state}
              name="state"
              id="state"
              onChange={(e) => {
                setsearchdata({ ...searchdata, state: e.target.value });
                findcityname(e.target.value);
              }}
            >
              <option key="0" value="Select your state">Select your state</option>
              <option key="1" value="Rajasthan">Rajasthan</option>
              <option key="2" value="Madhya Pradesh">madhya pradesh</option>
              <option key="3" value="Uttar Pradesh">Uttar Pradesh</option>
              <option key="4" value="Goa">Goa</option>
            </select>
            <select
              className="searchname a1"
              value={searchdata.city}
              name="city"
              id="city"
              onChange={(e) => {
                setsearchdata({ ...searchdata, city: e.target.value });
                handleSubmit(e);
              }}
            >
              <option value="Select your city">Select your city</option>

              {citynamesData3.map((post) => (
                <option key={post} value={post}> 1 {post}</option>

                //<SearchTiles postdetails={post} />
              ))}
               </select>

           {showfilterbox?<>
            <input className="searchname a1" type="text" placeholder="Filter results...."
              onChange={(e) => {
                //  setUserData({ ...userData, pass: e.target.value });
                //console.log(postdata);
                let newdata = postdata.filter((unit) => {
                  var t1 = unit.title.toLowerCase();
                  var e1 = e.target.value.toLowerCase();
                  return t1.indexOf(e1) !== -1;
                });
               // console.log(newdata);
                setFilterdata(newdata);

              }}

            />
           </>:<></>}
          </div>



        </form>
      </div>





      <div className="tiles">
        {filterdata.map((post) => (
          <SearchTiles postdetails={post} />
        ))}
      </div>

    </div>
  );
}

export default Header;
