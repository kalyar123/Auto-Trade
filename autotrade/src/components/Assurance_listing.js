import React, { useState, useEffect,useContext} from "react";
import Footer from "./Footer";
import Header from "./Header";
import  Assurance from "./Assurance";
import axios from "axios";
import { AuthContext } from './authContext';
import { Link } from "react-router-dom";

const Assurance_listing = () => {
  const [addCar, setCar] = useState(false);
  const [loader,setLoader]=useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const {authState,addToCart} = useContext(AuthContext);
  const addNewCar = () => {
    setCar(!addCar);
  };

  useEffect(() => {
    loadData();
  }, []);
  function handleChange(event) {
    setSelectedOption(event.target.value);
    if (event.target.value === "lowToHigh") {
      const sortedLowToHigh = [...data].sort((a, b) => a.price - b.price);
      setData(sortedLowToHigh);
    } else {
      const sortedHighToLow = [...data].sort((a, b) => b.price - a.price);
      setData(sortedHighToLow);
    }
  }

  function handleChangeFilter(event) {
    setFilter(event.target.value);
    const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(event.target.value.toLowerCase()) || item.price.toString().includes(event.target.value)
  );
   setData(filtered);
   if(event.target.value===''){
    loadData();
  }
  }
 
  
  function loadData() {
    setLoader(true);
    axios
      .get("http://localhost:5000/api/Assurance")
      .then((response) => {
        console.log(response.data.Image);
        setData(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <div>
      <Header />

      {/* <!-- Page Title start --> */}
      {!addCar ? (
        <div className="pageTitle">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <h1 className="page-heading">Listing</h1>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="breadCrumb">
                  <Link to="/">Home</Link> / <Link to="/">Search</Link> /{" "}
                  <span>Search Result</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* <!-- Page Title End --> */}
      {addCar ? (
        <Assurance onClick={addNewCar} onClickTwo={loadData} />
      ) : (
        <div>
          <div className="listpgWraper">
            <div className="container">
              {/* add new car */}
              {!addCar && authState.isAuthenticated ? (
                <button
                  className="btn btn-primary"
                  style={{ marginBottom: "8px" }}
                  onClick={addNewCar}
                >
                  Add Cars Insurance
                </button>
              ) : (
                ""
              )}
              {/* <!-- Sortby start --> */}
              <div className="sortbybar">
                <div className="row">
                  <div className="col-sm-4">
                    {" "}
                    <Link
                      to="listing"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      className="listby"
                      data-original-title="Result by List View"
                    >
                      <i className="fa fa-th-list" aria-hidden="true"></i>
                    </Link>{" "}
                  </div>
                  <div className="col-sm-4">
                    <div className="input-group">
                      {" "}
                      <span className="input-group-addon" id="basic-addon3">
                        Sort By
                      </span>
                      <select
                        className="form-control"
                        defaultValue={selectedOption}
                        onChange={handleChange}
                      >
                        <option value="">Select option</option>
                        <option value="lowToHigh">Price: Rs Low to High</option>
                        <option value="highToLow">Price: Rs High to Low</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="found">
                      Total Records: {data && data.length}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3 col-sm-5">
                  {/* <!-- Side Bar start --> */}
                  <div className="sidebar">
                    {/* <!-- By Keyword --> */}
                    <div className="widget" style={{height:'100vh'}}>
                      <h4 className="widget-title">Search By Keyword</h4>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          name="filter"
                          values={filter}
                          placeholder="Keyword"
                          onChange={handleChangeFilter}
                        />
                      </div>
                    </div>

                 
                  </div>
                  {/* <!-- Side Bar end -->  */}
                </div>
                <div className="col-md-9 col-sm-7">
                  {/* <!-- Search List --> */}
                  <ul className="searchList">
                    {/* <!-- ad start --> */}
                    {
                    
                    data.map((item, index) => (
                      <li key={index}>
                        <div className="row">
                          <div className="col-md-3 col-sm-4">
                            <div className="ribbon_3 popular">
                              <span>Featured</span>
                            </div>
                            <div className="adimg">
                              <img src={item.Image} alt="Ad Name" />
                            </div>
                          </div>
                          <div className="col-md-9 col-sm-8">
                            <div className="jobinfo">
                              <div className="row">
                                <div className="col-md-8 col-sm-7">
                                  <h3>
                                    <Link to="#">{item.name}</Link>
                                  </h3>
                                  <div className="location">
                                    <i
                                      className="fa fa-calendar"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    <span>{item.model}</span>
                                  </div>
                                  <div className="location">
                                    <i
                                      className="fa fa-tachometer"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    <span>{item.price}</span>
                                  </div>
                                  <div className="location">
                                    <i
                                      className="fa fa-map-marker"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    <span>{item.city}</span>
                                  </div>
                                  <div className="clearfix"></div>
                                 
                                  <div className="vinfo">
                                    <span>{item.transmition}</span>
                                  </div>
                                  <div className="clearfix"></div>
                                 
                                </div>
                                <div className="col-md-4 col-sm-5 text-right">
                                  <div className="adprice">
                                    ${item.price || item.price}
                                  </div>
                                  <div className="listbtn">
                                    <Link to={`details/${item._id}`}>
                                      View Details
                                      <i
                                        className="fa fa-arrow-circle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </Link>
                                    <button onClick={()=>addToCart({ Id:item._id, Name:item.name,Image:item.Image, Price:item.price, })} className="btn apply" style={{marginTop:'10px'}}><i class="fa fa-solid fa-cart-plus"></i> Add To CART</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                    {loader && <p className="text-center">loading...</p>}
                    {!loader && data.length===0 && <p className="text-center">No Data Found</p>}
                    {/* <!-- ad end --> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Assurance_listing;
