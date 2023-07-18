import React, { useState, useEffect,useContext} from "react";
import Footer from "./Footer";
import Header from "./Header";
import { AddBlog } from "./AddBlog";
import axios from "axios";
import { AuthContext } from './authContext';
import { Link } from "react-router-dom";

const Blog = () => {
  const [addblogState, setBlogState] = useState(false);
  const [loader,setLoader]=useState(false);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const {authState} = useContext(AuthContext);
  const addblog = () => {
    setBlogState(!addblogState);
  };

  useEffect(() => {
    loadData();
  }, []);
  function handleChangeFilter(event) {
    console.log("hello")
    setFilter(event.target.value);
    const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(event.target.value.toLowerCase())
  );
   setData(filtered);
   if(event.target.value===''){
    loadData();
  }
  }
 
  
  function loadData() {
    setLoader(true);
    axios
      .get("http://localhost:5000/api/blogs")
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
      {!addblogState ? (
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
      {addblogState ? (
        <AddBlog onClick={addblog} onClickTwo={loadData} />
      ) : (
        <div>
          <div className="listpgWraper">
            <div className="container">
              {/* add new car */}
              {!addblogState && authState.isAuthenticated ? (
                <button
                  className="btn btn-primary"
                  style={{ marginBottom: "8px" }}
                  onClick={addblog}
                >
                  Add Blog
                </button>
              ) : (
                ""
              )}
              {/* <!-- Sortby start --> */}
              <div className="sortbybar">
                <div className="row">
                  <div className="col-sm-6">
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
                 
                  <div className="col-sm-6">
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
                  
                  <ul className="blogList">
                    {/* <!-- ad start --> */}
                    {
                    
                    data.map((item, index) => (
                      <li key={index}>
                       <div className="row">
                        <div className="col-md-5">
                          <div className="postimg"><img src={item.Image} alt={item.name}/></div>
                        </div>
                        <div className="col-md-7">
                          <div className="post-header">
                            <h4><Link to={`blogs_detail/${item._id}`}>{item.name}</Link></h4>
                            <div className="postmeta">By : <span>{item.author || item.author} </span> Category : <a href="#.">Movers, Shifting, Packers </a></div>
                            <div className="date"><i className="fa fa-calendar" aria-hidden="true"></i> {item.date || item.date}</div>
                          </div>
                          <p> {typeof item.description === 'string' && item.description.length > 270? `${item.description.slice(0, 270)}...`: item.description}</p>
                          <Link to={`blogs_detail/${item._id}`} className="readmore">Read More  <i className="fa fa-caret-right" aria-hidden="true"></i></Link> </div>
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

export default Blog;
