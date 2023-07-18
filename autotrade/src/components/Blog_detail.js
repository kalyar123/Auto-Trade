import React,{useCallback,useState,useEffect} from 'react'
import Footer from './Footer'
import Header from './Header';
import { useParams } from 'react-router-dom';
import { Link,useLocation} from 'react-router-dom';
import axios from "axios";


const Blog_detail = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const location = useLocation();
  const loadData=useCallback(()=> {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    loadData();
  }, [loadData]);
 
  return (
    <div>
      <Header/>


      {/* <!-- Page Title start --> */}
<div class="pageTitle">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h1 class="page-heading">Blog Detail</h1>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="breadCrumb"><Link to="/blog">Blog</Link> / <span>Blog Name</span></div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Page Title End --> */}

<div class="listpgWraper">
  <div class="container"> 
  {/* <!-- Blog start --> */}
    <div class="row">
      <div class="col-md-8"> 
        {/* <!-- Blog List start --> */}
        <div class="blogWraper">
          <div class="blogList blogdetailbox">
            <div class="postimg"><img src={data.Image && data.Image} alt="Blog Title"/>
              <div class="date">{data.date && data.date}</div>
            </div>
            <div class="post-header margin-top30">
              <h4><a href="#.">{data.name && data.name}</a></h4>
              <div class="postmeta">By : <span>{data.author && data.author} </span> Category : <Link to="#.">Movers, Shifting, Packers </Link></div>
            </div>
            <p> {data.description && data.description},</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
<div/>




      <Footer/>
    </div>
  )
}

export default Blog_detail
