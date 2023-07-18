import React,{useState,useEffect,useCallback,useContext} from 'react'
import Footer from './Footer'
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  

  const loadData = useCallback(() => {
    axios
    .get(`http://localhost:5000/api/addcar/${id}`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [id]);
 
  useEffect(() => {
    loadData();
  },[loadData]);

  const handleCart=() => {
    addToCart({
      Id:data._id,
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
        <div className="breadCrumb"><Link to="/">Home</Link> / <span>Car Details</span></div>
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
                  <li> <img src={data?.Image} alt="" /> </li>
                </ul>
              </div>
            </div>
           
           
          </div>
        </div>
      </div>
      <div className="col-md-4"> 
        {/* <!-- Ad Header start --> */}
        <div className="jbside">
          <div className="adsalary">Price <strong>${data.price && data.price}</strong></div>
          <div className="ptext"><i className="fa fa-map-marker" aria-hidden="true"></i>{data.location && data.location}</div>
          <div className="clearfix"></div>
          <div className="adButtons"> 
          {/* <button onClick={handleCart} className="btn apply"><i class="fa fa-solid fa-cart-plus"></i> Add To CART</button>  */}
          </div>
        </div>
        
        {/* <!-- Job Detail start --> */}
        <div className="jbside">
          <h3>About This Car</h3>
          <ul className="jbdetail">
           {/* { <li className="row">
              <div className="col-md-6 col-xs-6">Registered City</div>
              <div className="col-md-6 col-xs-6"><span>{data.city ||data.city }</span></div>
            </li>} */}
            <li className="row">
              <div className="col-md-6 col-xs-6">Color</div>
              <div className="col-md-6 col-xs-6"><span>{data.color ||data.color }</span></div>
            </li>
            <li className="row">
              <div className="col-md-6 col-xs-6">Assembly</div>
              <div className="col-md-6 col-xs-6"><span>{data.assembly ||data.assembly }</span></div>
            </li>
            <li className="row">
              <div className="col-md-6 col-xs-6">Engine Capacity</div>
              <div className="col-md-6 col-xs-6"><span>{data.capacity || data.capacity}</span></div>
            </li>
            <li className="row">
              <div className="col-md-6 col-xs-6">Body Type</div>
              <div className="col-md-6 col-xs-6"><span>{data.bodyType || data.bodyType}</span></div>
            </li>
            <li className="row">
              <div className="col-md-6 col-xs-6">Model</div>
              <div className="col-md-6 col-xs-6"><span>{data.model || data.model}</span></div>
            </li>
        
            <li className="row">
              <div className="col-md-6 col-xs-6">Fuel</div>
              <div className="col-md-6 col-xs-6"><span>{data.fuel || data.fuel}</span></div>
            </li>
            <li className="row">
              <div className="col-md-6 col-xs-6">Transmission</div>
              <div className="col-md-6 col-xs-6"><span>{data.transmission || data.transmission}</span></div>
            </li>
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

export default CarDetails
