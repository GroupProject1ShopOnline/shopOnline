import react, { useState, useEffect } from "react";
import SearchTiles from "../components/searchTIles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH, CITYNAME } from "../components/actions/actionType";
import "./slideshow.css"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
function Header() {
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
  const [filterdata, setFilterdata] = useState([{ title: "green", id: "1" }]);

  const postme = [
    { tool: "hammer", state: "Rajputana", city: "jaipur" },
    { tool: "drill", state: "raj", city: "degana" },
  ];
  const postdata = useSelector((state) => state.searchu);
  const citynamesData = useSelector((state) => state.cityu);
  var citynamesData2 = [];

  console.log(citynamesData);
  for (var i = 0; i < citynamesData.length; i++) {
    citynamesData2.push(citynamesData[i].city);
  }
  const set1 = new Set(citynamesData2);
  const citynamesData3 = Array.from(set1);
  //console.log(set1);

  useEffect(() => {
    //dispatch(showallposts());
  }, [postdata, citynamesData]);

  console.log(postdata);

  const user = localStorage.getItem("name");

  const handleSubmit = async (e) => {
    console.log(searchdata);

    const searchmee = {
      state: searchdata.state,
      city: searchdata.city,
      tool: searchdata.tool,
    };
    console.log(searchmee);

    e.preventDefault();
    try {
      const dataw = await axios.post(
        "https://tools-on-rent.herokuapp.com/post/search",
        searchmee
      );
      dispatch({ type: SEARCH, payload: dataw.data });
      console.log("qq");
      console.log(dataw.data);

       setFilterdata(dataw.data);
      //console.log(postdata);
    } catch (err) {
      console.log(err);
    }
  };

  ////////////
  const findcityname = async (e) => {
    // console.log(searchdata);

    const searchmee = {
      state: e,
    };
    console.log(searchmee);

    // e.preventDefault();
    try {
      const dataw = await axios.post(
        "https://tools-on-rent.herokuapp.com/post/cityname",
        searchmee
      );
      dispatch({ type: CITYNAME, payload: dataw.data });

      console.log("ok");
    } catch (err) {
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

  //search box
  const items = [
    {
      id: 0,
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

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log("1");
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.title}</span>
      </>
    )
  }


  return (
    <div>
      <div className="topportion">
        <div className="Mheader ">
          <div>
            <img className="logoheader" src="logo192.png" />
            <a className="a">Help</a>
            <a className="a" href="/products">
              Rent your tools
            </a>
            <a className="a" href="/aboutUs">
              About
            </a>
            <a className="a" href="/signIn">
              Login
            </a>
          </div>
        </div>


        <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', flex: 1 }}>

          <div className="texti">
            <h1 className="text ">Earn Passive </h1>
            <h1 className="text">Rental Income </h1>
            <button className="buttonexplore ">Rent Your Tools Today  </button>
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
        <form noValidate onSubmit={handleSubmit}>
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
            <option value="Select your state">Select your state</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Madhya Pradesh">madhya pradesh</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Goa">Goa</option>
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
              <option value={post}> 1 {post}</option>

              //<SearchTiles postdetails={post} />
            ))}
            <option value="null">we only have services in Above Cities</option>
          </select>

          {/* <input
            className="searchname a1"
            type="text"
            placeholder="type tool name"
            value={searchdata.tool}
            onChange={(e) => {
              setsearchdata({ ...searchdata, tool: e.target.value });
            }}
          /> */}
          {/* <button className="buttonSearch ">
            <img src="https://img.icons8.com/pastel-glyph/64/000000/search--v3.png" />
          </button> */}

          <div style={{ width: 400 }}>
            <ReactSearchAutocomplete
              items={filterdata}
              fuseOptions={{ keys: ["title","description"] }}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            />
          </div>



        </form>
      </div>

      <div className="tiles">
        {postdata.map((post) => (
          <SearchTiles postdetails={post} />
        ))}
      </div>

    </div>
  );
}

export default Header;
