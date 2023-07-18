import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Contact_us = () => {
  return (
    <div>
      <Header/>


      {/* <!-- Page Title start --> */}
<div class="pageTitle">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h1 class="page-heading">Contact Us</h1>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="breadCrumb"><a href="#.">Home</a> / <span>Contact Us</span></div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Page Title End -->  */}

{/* <div class="googlemap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d193572.19492844533!2d-74.11808565615137!3d40.70556503857166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1481975053066" allowfullscreen></iframe>
          </div> */}


{/* <!-- Contact us --> */}
<div class="inner-page">
  <div class="container">
    <div class="contact-wrap">
      
      <div class="row"> 
        {/* <!-- Contact Info --> */}
        
        <div class="contact-now">
          <div class="col-md-4 column">
            <div class="contact"> <span><i class="fa fa-home"></i></span>
              <div class="information"> <strong>Address:</strong>
                <p>Wah Cantt Barrier No 2</p>
              </div>
            </div>
          </div>
          {/* <!-- Contact Info --> */}
          <div class="col-md-4 column">
            <div class="contact"> <span><i class="fa fa-envelope"></i></span>
              <div class="information"> <strong>Email Address:</strong>
                <p>areebkhan4876@gmail.com</p>
                
              </div>
            </div>
          </div>
          {/* <!-- Contact Info --> */}
          <div class="col-md-4 column">
            <div class="contact"> <span><i class="fa fa-phone"></i></span>
              <div class="information"> <strong>Phone No:</strong>
                <p>+92 347 7321276</p>
               
              </div>
            </div>
          </div>
          {/* <!-- Contact Info -->  */}
        </div>
        
        
        {/* <!-- Contact form --> */}
   
      </div>
    </div>
  </div>
</div>



      <Footer/>
    </div>
  )
}

export default Contact_us
