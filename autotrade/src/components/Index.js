import React,{useEffect,useContext,useState} from 'react';
import Footer from './Footer';
import Header from './Header';
import axios from "axios";
import { AuthContext } from './authContext';
import { Link } from 'react-router-dom';


const Index = () => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const [blog,setBlog]=useState([]);
  const {authState,addToCart} = useContext(AuthContext);
  useEffect(() => {
    loadData();
  }, []);

  function handleChangeFilter(event) {
    console.log(event.target.value)
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
    axios
      .get("http://localhost:5000/api/addcar")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => {
        console.log(response.data.Image);
        setBlog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
     <Header/>

{/* <!-- Search start --> */}
<div class="searchwrap">
  <div class="container">
    <h3>Find Cars</h3>
    <p>We want to provide the best tools to our customer that are high in quality, trusted and have upto hundred percent life time gurantee</p>
    <div class="searchbar">
      <div class="row">
        <div class="col-md-10">
          <input type="text" class="form-control" onChange={handleChangeFilter} name="carFilter" placeholder="Car Make or Model" />
        </div>
        <div class="col-md-2">
          <button class="btn">Search</button>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Search End -->  */}

{/* <!-- Featured Cars start --> */}
<div class="section">
  <div class="container"> 
    {/* <!-- title start --> */}
    <div class="titleTop">
      <h3>Featured  Cars</h3>
      <p>These are the following cars which include new cars, used cars and cool rides.</p>
    </div>
    {/* <!-- title end --> */}
    
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
                                    <span>{item.location}</span>
                                  </div>
                                  <div className="clearfix"></div>
                                 
                                 
                                  <div className="vinfo">
                                    <span>{item.transmission}</span>
                                  </div>
                                  <div className="vinfo">
                                    <span>{item.color}</span>
                                  </div>
                                  <div className="clearfix"></div>
                                 
                                </div>
                                <div className="col-md-4 col-sm-5 text-right">
                                  <div className="adprice">
                                    ${item.price || item.price}
                                  </div>
                                  <div className="listbtn">
                                    <Link to={`cardetails/${item._id}`}>
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
                    {/* {loader && <p className="text-center">loading...</p>}
                    {!loader && data.length===0 && <p className="text-center">No Data Found</p>} */}
                    {/* <!-- ad end --> */}
                  </ul>
  </div>
</div>
{/* <!-- Featured Cars end --> 

<!-- About start --> */}
<div class="about-wrap">
  <div class="col-md-6">
    <div class="about-image"></div>
  </div>
  <div class="col-md-6">
    <div class="aboutinfo">
      <div class="title"> <span>Pakistan's Leading Cars</span>
        <h1><span>Welcome to</span> Auto Trade</h1>
      </div>
      <p>This is the best idea for car buyers and sellers purpose is to digitalize and create an automated web system which provide online market place for cars buyers and sellers it aggregates so many new, used and certified secomd hand cars and auto parts from dealers and private sellers.</p>
      <ul>
        <li>Provide feature of car finance.</li>
        <li>Provide feature of car insurance.</li>
        <li>Provide feature of blog.</li>
        <li>Provide feature of car auto parts.</li>
      </ul>
    </div>
  </div>
  <div class="clearfix"></div>
</div>
{/* <!-- About end --> 

<!-- Cars By Make start --> */}
<div class="section whitebg">
  <div class="container"> 
    {/* <!-- title start --> */}
    {/* <div class="titleTop">
      <h3>Search Cars By <span>Model</span></h3>
      <p>From here you can easily found the cars by their specific models.</p>
    </div> */}
    {/* <!-- title end --> */}
    {/* <div class="topsearchwrap">
      <ul class="row makelist">
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/01.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/02.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/03.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/04.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/05.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/06.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/07.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/08.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/09.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/10.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/11.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/12.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/13.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/14.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/15.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/16.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/17.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing"><img src="images/make/18.jpg" alt="" /> <strong>Car Brand</strong></a></li>
      </ul>
    </div> */}
  </div>
</div>
{/* <!-- Cars By Make ends --> 


<!-- App Start --> */}

{/* <!-- App End --> 

<!-- Blog start --> */}
<div class="section whitebg">
  <div class="container"> 
    {/* <!-- title start --> */}
    <div class="titleTop">
      <h3>Latest From <span>Blog</span></h3>
      <p>Here is the articles about cars for more information </p>
    </div>
    {/* <!-- title end --> */}
    <ul class="blogGrid row">
      {blog && blog.map((item, index)=>(
        <li class="col-md-4 col-sm-4" key={index}>
        <div class="int" style={{height:'400px'}}> 
          {/* <!-- Blog Image --> */}
          <div class="postimg"> <img src={item.Image} alt={item.name}/> </div>
          
          {/* <!-- Blog info --> */}
          <div class="post-header">
            <h4><Link to={`blogs_detail/${item._id}`}>{item.name}</Link></h4>
            <div class="postmeta">By : <span>{item.author || item.author} </span> </div>
            <div class="date"> {item.date  || item.date}</div>
          </div>
          <p>{typeof item.description === 'string' && item.description.length > 150? `${item.description.slice(0, 150)}...`: item.description}</p>
          <Link to={`blogs_detail/${item._id}`} class="readmore">Read More</Link> </div>
      </li>
      ))}
    </ul>
  </div>
</div>
{/* <!-- Blog ends --> 

<!--Footer--> */}
   <Footer/>
{/* <!--Footer end--> 

<!--Copyright--> */}

    </div>
  )
}

export default Index
