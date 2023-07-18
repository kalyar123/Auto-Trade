import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Active_ads = () => {
  return (
    <div>
      <Header/>
      {/* <!-- Page Title start --> */}
<div class="pageTitle">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h1 class="page-heading">My Active Ads</h1>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="breadCrumb"><a href="#">Dashboard</a> <span>My Active Ads</span></div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Page Title End --> */}

<div class="inner-page">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-4">
        <ul class="usernavdash">
          <li><a href="#"><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</a></li>
          <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i> My Details</a></li>
          <li><a href="#"><i class="fa fa-desktop" aria-hidden="true"></i> My Pending Ads</a></li>
          <li class="active"><a href="#"><i class="fa fa-laptop" aria-hidden="true"></i> My Active Ads</a></li>
          <li><a href="#"><i class="fa fa-lock" aria-hidden="true"></i> Account Setting</a></li>
          <li><a href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
        </ul>
        <div class="adimages"> <img src="images/large-ad.jpg" alt="google ad"/> </div>
      </div>
      <div class="col-md-9 col-sm-8">
        <div class="myads">
          <h3>My Active Ads</h3>
          <ul class="searchList">
            {/* <!-- ad start --> */}
            <li>
            <div class="row">
              <div class="col-md-3 col-sm-4">
              	<div class="ribbon_3 popular"><span>Featured</span></div>
                <div class="adimg"><img src="images/cars/01.jpg" alt="Ad Name"/></div>
              </div>
              <div class="col-md-9 col-sm-8">
                <div class="jobinfo">
                  <div class="row">
                    <div class="col-md-8 col-sm-7">
                      <h3><a href="#.">Sue gate F 1.0 for Sale</a></h3>
                      <div class="location"><i class="fa fa-calendar" aria-hidden="true"></i> <span>2014</span></div>
                      <div class="location"><i class="fa fa-tachometer" aria-hidden="true"></i> <span>38,000 km</span></div>
                      <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> <span>New York</span></div>
                      <div class="clearfix"></div>
                      
                      <div class="vinfo"><span>Petrol</span></div>
                      <div class="vinfo"><span>1300 cc</span></div>
                      <div class="vinfo"><span>Automatic</span></div>
                      <div class="clearfix"></div>
                      <div class="date">Last Updated: 1 day ago</div>
                      
                    </div>
                    <div class="col-md-4 col-sm-5 text-right">
                      <div class="adprice">$456.00</div>
                      <div class="listbtn"><a href="#." class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a> <a href="#." class="edit"><i class="fa fa-times" aria-hidden="true"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
            {/* <!-- ad end --> 
            
            <!-- ad start --> */}
            <li>
            <div class="row">
              <div class="col-md-3 col-sm-4">
                <div class="adimg"><img src="images/cars/02.jpg" alt="Ad Name"/></div>
              </div>
              <div class="col-md-9 col-sm-8">
                <div class="jobinfo">
                  <div class="row">
                    <div class="col-md-8 col-sm-7">
                      <h3><a href="#.">Sue gate F 1.0 for Sale</a></h3>
                      <div class="location"><i class="fa fa-calendar" aria-hidden="true"></i> <span>2014</span></div>
                      <div class="location"><i class="fa fa-tachometer" aria-hidden="true"></i> <span>38,000 km</span></div>
                      <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> <span>New York</span></div>
                      <div class="clearfix"></div>
                      
                      <div class="vinfo"><span>Petrol</span></div>
                      <div class="vinfo"><span>1300 cc</span></div>
                      <div class="vinfo"><span>Automatic</span></div>
                      <div class="clearfix"></div>
                      <div class="date">Last Updated: 1 day ago</div>
                      
                    </div>
                    <div class="col-md-4 col-sm-5 text-right">
                      <div class="adprice">$456.00</div>
                      <div class="listbtn"><a href="#." class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a> <a href="#." class="edit"><i class="fa fa-times" aria-hidden="true"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
            {/* <!-- ad end --> 
            
            <!-- ad start --> */}
            <li>
            <div class="row">
              <div class="col-md-3 col-sm-4">
              	<div class="ribbon_3 popular"><span>Featured</span></div>
                <div class="adimg"><img src="images/cars/03.jpg" alt="Ad Name"/></div>
              </div>
              <div class="col-md-9 col-sm-8">
                <div class="jobinfo">
                  <div class="row">
                    <div class="col-md-8 col-sm-7">
                      <h3><a href="#.">Sue gate F 1.0 for Sale</a></h3>
                      <div class="location"><i class="fa fa-calendar" aria-hidden="true"></i> <span>2014</span></div>
                      <div class="location"><i class="fa fa-tachometer" aria-hidden="true"></i> <span>38,000 km</span></div>
                      <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> <span>New York</span></div>
                      <div class="clearfix"></div>
                      
                      <div class="vinfo"><span>Petrol</span></div>
                      <div class="vinfo"><span>1300 cc</span></div>
                      <div class="vinfo"><span>Automatic</span></div>
                      <div class="clearfix"></div>
                      <div class="date">Last Updated: 1 day ago</div>
                      
                    </div>
                    <div class="col-md-4 col-sm-5 text-right">
                      <div class="adprice">$456.00</div>
                      <div class="listbtn"><a href="#." class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a> <a href="#." class="edit"><i class="fa fa-times" aria-hidden="true"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
            {/* <!-- ad end --> */}
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

export default Active_ads
