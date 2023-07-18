import React,{useState,useEffect,useContext} from 'react'
import Footer from './Footer'
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { AuthContext } from './authContext';

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const {addToCart} = useContext(AuthContext);

  useEffect(() => {
    loadData();
  }, []);
 
  function loadData() {
    axios
      .get(`http://localhost:5000/api/autoParts/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleCart=() => {
    addToCart({
      Id:id,
      Name:data.name,
      Image:data.Image,
      Price:data.price,
    })
  }
  return (
    <div>
      <Header/>

      {/* <!-- Page Title start --> */}
<div className="pageTitle">
  <div className="container">
    <div className="row">
      <div className="col-md-7 col-sm-6">
        <h1 className="page-heading">{data.name && data.name}</h1>
      </div>
      <div className="col-md-5 col-sm-6">
        <div className="breadCrumb"><Link to='/'>Home</Link> / <span>Cars Details</span></div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Page Title End --> */}

<div className="listpgWraper">
  <div className="container"> 
    
    {/* <!-- ad Detail start --> */}
    <div className="row">
      <div className="col-md-8"> 
        {/* <!-- ad Description start --> */}
        <div className="advert-header">
          <div className="contentbox">
            <div className="adimages">
              <div id="" className="flexslider">
                <ul className="slides">
                  <li> <img src={data.Image || data.Image} alt="" /> </li>
                </ul>
              </div>
            </div>
           
           
          </div>
        </div>
        {/* <!-- Job Description end --> 
        
        <!-- Inspection start --> */}
     
        
        {/* <!-- related jobs start --> */}
      </div>
      {/* <!-- related jobs end --> */}
      
      <div className="col-md-4"> 
        {/* <!-- Ad Header start --> */}
        <div className="jbside">
          <div className="adsalary">Price <strong>${data.price && data.price}</strong></div>
          <div className="ptext"><i className="fa fa-map-marker" aria-hidden="true"></i>{data.location && data.location}</div>
          <div className="clearfix"></div>
          <div className="adButtons"> 
          <button onClick={handleCart} className="btn apply"><i class="fa fa-solid fa-cart-plus"></i> Add To CART</button> 
          </div>
        </div>
        
        {/* <!-- Job Detail start --> */}
        <div className="jbside">
          <h3>Auto Parts Detail</h3>
          <ul className="jbdetail">
           { <li className="row">
              <div className="col-xs-12" style={{fontWeight:"bold"}}>Description</div>
              <div className="col-xs-12" style={{marginTop:'10px'}}>{data.description ||data.description}</div>
            </li>}
          
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>




      <Footer/>
    </div>
  )
}

export default Details
