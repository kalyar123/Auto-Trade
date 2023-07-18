import React from 'react'
import Footer from './Footer'

const Dashboard = () => {
  return (
    <div>
      {/* <!-- Top Bar start --> */}
<div className="topbar-wrap">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div className="tpinfo"> <a href="#"><i className="fa fa-phone" aria-hidden="true"></i> 1-800-123-4567</a> <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i> 123 X 4TH Street, San Jose, CA 123456</a> </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="toplinks"><a href="register">Welcome: <strong>Jhon</strong></a> <a href="#">Logout</a></div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Header start --> */}
<div className="header">
  <div className="container">
    <div className="row">
      <div className="col-md-2 col-sm-3 col-xs-12"> <a href="index-2.html" className="logo"><img src="images/logo.png" alt="" /></a>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="col-md-10 col-sm-12 col-xs-12"> 
        {/* <!-- Nav start --> */}
        <div className="navbar navbar-default" role="navigation">
          <div className="navbar-collapse collapse" id="nav-main">
            <ul className="nav navbar-nav">
              <li className="dropdown"><a href="/">Home </a> 
              </li>
              <li><a href="listing">Used Cars</a></li>
              <li><a href="listing">New Cars</a></li>
              <li className="dropdown active"><a href="#.">Pages <span className="caret"></span></a> 
                {/* <!-- dropdown start --> */}
                <ul className="dropdown-menu">
                  <li><a href="aboutus">About Us</a></li>
                  <li><a href="listing">Ad Listing</a></li>
                  <li><a href="detail">Ad Detail</a></li>
                  <li><a href="login">Login</a></li>
                  <li><a href="register">Register</a></li>
                  <li><a href="forgotpassword">Forgot Password</a></li>
                  <li><a href="changepassword">Change Password</a></li>
                  <li className="active"><a href="dashboard">Dashboard</a></li>
                  <li><a href="activeads">Active Ads</a></li>
                  <li><a href="pendingads">Pending Ads</a></li>
                  <li><a href="adpost">Ad Post</a></li>
                  <li><a href="error">404 Page</a></li>
                </ul>
                {/* <!-- dropdown end -->  */}
              </li>
              <li className="dropdown"><a href="blog">Blog <span className="caret"></span></a> 
                {/* <!-- dropdown start --> */}
                <ul className="dropdown-menu">
                  <li><a href="blog">Blog List</a></li>
                  <li><a href="blogdetail">Blog Detail</a></li>
                </ul>
                {/* <!-- dropdown end -->  */}
              </li>
              <li><a href="contactus">Contact</a></li>
              <li className="postad"><a href="adpost">Post an Ad</a></li>
            </ul>
            {/* <!-- Nav collapes end -->  */}
          </div>
          <div className="clearfix"></div>
        </div>
        {/* <!-- Nav end -->  */}
      </div>
    </div>
    {/* <!-- row end -->  */}
  </div>
  {/* <!-- Header container end -->  */}
</div>
{/* <!-- Header end --> 

<!-- Page Title start --> */}
<div className="pageTitle">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <h1 className="page-heading">Dashboard</h1>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="breadCrumb"><span>Welcome Jhon</span></div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Page Title End --> */}

<div className="inner-page">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-4">
        <ul className="usernavdash">
          <li className="active"><a href="dashboard"><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</a></li>
          <li><a href="pendingads"><i className="fa fa-desktop" aria-hidden="true"></i> My Pending Ads</a></li>
          <li><a href="activeads"><i className="fa fa-laptop" aria-hidden="true"></i> My Active Ads</a></li>
          <li><a href="changepassword"><i className="fa fa-lock" aria-hidden="true"></i> Account Setting</a></li>
          <li><a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
        </ul>
        <div className="adimages"> <img src="images/large-ad.jpg" alt="google ad"/> </div>
      </div>
      <div className="col-md-9 col-sm-8"> 
        
        {/* <!-- Mailbox --> */}
        <div className="mailboxheader"> <a href="#."><i className="fa fa-plus-circle" aria-hidden="true"></i> New</a> <a href="#."><i className="fa fa-envelope-o" aria-hidden="true"></i> From autotrade</a> <a href="#."><i className="fa fa-envelope-o" aria-hidden="true"></i> Inbox <span>45</span></a> <a href="#."><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Sent</a> <a href="#."><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search Mail"/>
            <span className="input-group-btn">
            <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
            </span> </div>
          <div className="clearfix"></div>
        </div>
        <div className="mainboxouter">
          <div className="titlebox">
            <h4><i className="fa fa-envelope" aria-hidden="true"></i> Inbox <span>34</span></h4>
            <div className="count"> <span>1-50 of 1404</span> <a href="#"><i className="fa fa-chevron-right" aria-hidden="true"></i></a> <a href="#"><i className="fa fa-chevron-left" aria-hidden="true"></i></a> </div>
            <div className="clearfix"></div>
          </div>
          <div className="msgbox">
            <ul className="mailList">
              <li className="head">
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sort By Attachment"><i className="fa fa-paperclip"></i></a></div>
                <div className="mailico"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sort By Flag"><i className="fa fa-flag" aria-hidden="true"></i></a></div>
                <div className="actionbtns"> <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Refresh"><i className="fa fa-refresh" aria-hidden="true"></i></a> <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><i className="fa fa-trash-o" aria-hidden="true"></i></a> <a href="#">Mark as Read</a> <a href="#">Mark as Unread</a> </div>
                <div className="clearfix"></div>
              </li>
              <li className="unread">
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><i className="fa fa-paperclip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email has attachement"></i></div>
                <div className="mailico flaged"><i className="fa fa-flag" aria-hidden="true"></i></div>
                <a href="#." className="user">Sharjeel786 (10)</a> <a href="#.">Welcome to autotrade Lorem ipsum dolor sit amet, consectetur...</a>
                <div className="date">july 9, 2017</div>
                <div className="clearfix"></div>
              </li>
              <li>
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><i className="fa fa-paperclip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email has attachement"></i></div>
                <div className="mailico"><i className="fa fa-flag" aria-hidden="true"></i></div>
                <a href="#." className="user">Sharjeel786 (5)</a> <a href="#.">Welcome to autotrade Lorem ipsum dolor sit amet, consectetur...</a>
                <div className="date">july 9, 2017</div>
                <div className="clearfix"></div>
              </li>
              <li>
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><i className="fa fa-paperclip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email has attachement"></i></div>
                <div className="mailico"><i className="fa fa-flag" aria-hidden="true"></i></div>
                <a href="#." className="user">Sharjeel786 (10)</a> <a href="#.">Welcome to autotrade Lorem ipsum dolor sit amet, consectetur...</a>
                <div className="date">july 9, 2017</div>
                <div className="clearfix"></div>
              </li>
              <li>
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><i className="fa fa-paperclip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email has attachement"></i></div>
                <div className="mailico"><i className="fa fa-flag" aria-hidden="true"></i></div>
                <a href="#." className="user">Sharjeel786 (10)</a> <a href="#.">Welcome to autotrade Lorem ipsum dolor sit amet, consectetur...</a>
                <div className="date">july 9, 2017</div>
                <div className="clearfix"></div>
              </li>
              <li>
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><i className="fa fa-paperclip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email has attachement"></i></div>
                <div className="mailico"><i className="fa fa-flag" aria-hidden="true"></i></div>
                <a href="#." className="user">Sharjeel786 (10)</a> <a href="#.">Welcome to autotrade Lorem ipsum dolor sit amet, consectetur...</a>
                <div className="date">july 9, 2017</div>
                <div className="clearfix"></div>
              </li>
              <li>
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><i className="fa fa-paperclip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email has attachement"></i></div>
                <div className="mailico"><i className="fa fa-flag" aria-hidden="true"></i></div>
                <a href="#." className="user">Sharjeel786 (10)</a> <a href="#.">Welcome to autotrade Lorem ipsum dolor sit amet, consectetur...</a>
                <div className="date">july 9, 2017</div>
                <div className="clearfix"></div>
              </li>
              <li>
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><i className="fa fa-paperclip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email has attachement"></i></div>
                <div className="mailico"><i className="fa fa-flag" aria-hidden="true"></i></div>
                <a href="#." className="user">Sharjeel786 (10)</a> <a href="#.">Welcome to autotrade Lorem ipsum dolor sit amet, consectetur...</a>
                <div className="date">july 9, 2017</div>
                <div className="clearfix"></div>
              </li>
              <li>
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><i className="fa fa-paperclip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email has attachement"></i></div>
                <div className="mailico"><i className="fa fa-flag" aria-hidden="true"></i></div>
                <a href="#." className="user">Sharjeel786 (10)</a> <a href="#.">Welcome to autotrade Lorem ipsum dolor sit amet, consectetur...</a>
                <div className="date">july 9, 2017</div>
                <div className="clearfix"></div>
              </li>
              <li>
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><i className="fa fa-paperclip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email has attachement"></i></div>
                <div className="mailico flaged"><i className="fa fa-flag" aria-hidden="true"></i></div>
                <a href="#." className="user">Sharjeel786 (10)</a> <a href="#.">Welcome to autotrade Lorem ipsum dolor sit amet, consectetur...</a>
                <div className="date">july 9, 2017</div>
                <div className="clearfix"></div>
              </li>
              <li>
                <div className="check">
                  <input type="checkbox" name="" id="mail1"/>
                  <label for="mail1"></label>
                </div>
                <div className="mailico"><i className="fa fa-paperclip" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email has attachement"></i></div>
                <div className="mailico"><i className="fa fa-flag" aria-hidden="true"></i></div>
                <a href="#." className="user">Sharjeel786 (10)</a> <a href="#.">Welcome to autotrade Lorem ipsum dolor sit amet, consectetur...</a>
                <div className="date">july 9, 2017</div>
                <div className="clearfix"></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="instoretxt">
          <div className="credit">Your on site available credit is: <strong>$99.00</strong></div>
          <a href="#.">Update Package</a> <a href="#." className="history">Payment History</a> </div>
        <div className="myads">
          <h3>My Recent Ads</h3>
          <ul className="searchList">
            {/* <!-- ad start --> */}
            <li>
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="ribbon_3 popular"><span>Featured</span></div>
                  <div className="adimg"><img src="images/cars/01.jpg" alt="Ad Name"/></div>
                </div>
                <div className="col-md-9 col-sm-8">
                  <div className="jobinfo">
                    <div className="row">
                      <div className="col-md-8 col-sm-7">
                        <h3><a href="#.">Sue gate F 1.0 for Sale</a></h3>
                        <div className="location"><i className="fa fa-calendar" aria-hidden="true"></i> <span>2014</span></div>
                        <div className="location"><i className="fa fa-tachometer" aria-hidden="true"></i> <span>38,000 km</span></div>
                        <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> <span>New York</span></div>
                        <div className="clearfix"></div>
                        <div className="vinfo"><span>Petrol</span></div>
                        <div className="vinfo"><span>1300 cc</span></div>
                        <div className="vinfo"><span>Automatic</span></div>
                        <div className="clearfix"></div>
                        <div className="date">Last Updated: 1 day ago</div>
                      </div>
                      <div className="col-md-4 col-sm-5 text-right">
                        <div className="adprice">$456.00</div>
                        <div className="listbtn"><a href="#." className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></a> <a href="#." className="edit"><i className="fa fa-times" aria-hidden="true"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- ad end --> 
            
            <!-- ad start --> */}
            <li>
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="adimg"><img src="images/cars/02.jpg" alt="Ad Name"/></div>
                </div>
                <div className="col-md-9 col-sm-8">
                  <div className="jobinfo">
                    <div className="row">
                      <div className="col-md-8 col-sm-7">
                        <h3><a href="#.">Sue gate F 1.0 for Sale</a></h3>
                        <div className="location"><i className="fa fa-calendar" aria-hidden="true"></i> <span>2014</span></div>
                        <div className="location"><i className="fa fa-tachometer" aria-hidden="true"></i> <span>38,000 km</span></div>
                        <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> <span>New York</span></div>
                        <div className="clearfix"></div>
                        <div className="vinfo"><span>Petrol</span></div>
                        <div className="vinfo"><span>1300 cc</span></div>
                        <div className="vinfo"><span>Automatic</span></div>
                        <div className="clearfix"></div>
                        <div className="date">Last Updated: 1 day ago</div>
                      </div>
                      <div className="col-md-4 col-sm-5 text-right">
                        <div className="adprice">$456.00</div>
                        <div className="listbtn"><a href="#." className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></a> <a href="#." className="edit"><i className="fa fa-times" aria-hidden="true"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <!-- ad end --> 
            
            <!-- ad start --> */}
            <li>
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="ribbon_3 popular"><span>Featured</span></div>
                  <div className="adimg"><img src="images/cars/03.jpg" alt="Ad Name"/></div>
                </div>
                <div className="col-md-9 col-sm-8">
                  <div className="jobinfo">
                    <div className="row">
                      <div className="col-md-8 col-sm-7">
                        <h3><a href="#.">Sue gate F 1.0 for Sale</a></h3>
                        <div className="location"><i className="fa fa-calendar" aria-hidden="true"></i> <span>2014</span></div>
                        <div className="location"><i className="fa fa-tachometer" aria-hidden="true"></i> <span>38,000 km</span></div>
                        <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i> <span>New York</span></div>
                        <div className="clearfix"></div>
                        <div className="vinfo"><span>Petrol</span></div>
                        <div className="vinfo"><span>1300 cc</span></div>
                        <div className="vinfo"><span>Automatic</span></div>
                        <div className="clearfix"></div>
                        <div className="date">Last Updated: 1 day ago</div>
                      </div>
                      <div className="col-md-4 col-sm-5 text-right">
                        <div className="adprice">$456.00</div>
                        <div className="listbtn"><a href="#." className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></a> <a href="#." className="edit"><i className="fa fa-times" aria-hidden="true"></i></a></div>
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

{/* <!--Footer--> */}
    <Footer/>
{/* <!--Footer end--> 

<!--Copyright--> */}
<div className="copyright">
  <div className="container">
    <div className="bttxt">Copyright &copy; 2017 Your Company Name. All Rights Reserved. Design by: <a href="http://graphicriver.net/user/ecreativesol" target="_blank">eCreativeSolutions</a></div>
  </div>
</div>

{/* <!-- Bootstrap's JavaScript -->  */}
<script src="js/jquery-2.1.4.min.js"></script> 
<script src="js/bootstrap.min.js"></script> 

{/* <!-- Owl carousel -->  */}
<script src="js/owl.carousel.js"></script> 

{/* <!-- Flex slider -->  */}
<script src="js/jquery.flexslider.js"></script> 

{/* <!-- Custom js -->  */}
<script src="js/script.js"></script>
    </div>
  )
}

export default Dashboard
