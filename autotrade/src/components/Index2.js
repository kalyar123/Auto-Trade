import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Index2 = () => {
  return (
    <div>
      {/* <Header/> */}

      {/* <!-- Top Bar start --> */}
<div class="topbar-wrap">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <div class="tpinfo"> <a href="#"><i class="fa fa-phone" aria-hidden="true"></i> 1-800-123-4567</a> <a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> 123 X 4TH Street, San Jose, CA 123456</a> </div>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="toplinks"><a href="register.html">Sign Up</a> <a href="#">Sign In</a> <a href="#">Connect with Facebook</a></div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Header start --> */}
<div class="header">
  <div class="container">
    <div class="row">
      <div class="col-md-2 col-sm-3 col-xs-12"> <a href="index-2.html" class="logo"><img src="images/logo.png" alt="" /></a>
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="col-md-10 col-sm-12 col-xs-12"> 
        {/* <!-- Nav start --> */}
        <div class="navbar navbar-default" role="navigation">
          <div class="navbar-collapse collapse" id="nav-main">
            <ul class="nav navbar-nav">
              <li class="dropdown active"><a href="index-2.html">Home <span class="caret"></span></a> 
                {/* <!-- dropdown start --> */}
                <ul class="dropdown-menu">
                  <li class="active"><a href="index-2.html">Home Static Image</a></li>
                  <li><a href="index2.html">Home With Slider</a></li>
                </ul>
                {/* <!-- dropdown end -->  */}
              </li>
              <li><a href="listing.html">Used Cars</a></li>
              <li><a href="listing.html">New Cars</a></li>
              <li class="dropdown"><a href="#.">Pages <span class="caret"></span></a> 
                {/* <!-- dropdown start --> */}
                <ul class="dropdown-menu">
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="listing.html">Ad Listing</a></li>
                  <li><a href="detail.html">Ad Detail</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="register.html">Register</a></li>
                  <li><a href="forgot-password.html">Forgot Password</a></li>
                  <li><a href="change-password.html">Change Password</a></li>
                  <li><a href="dashboard.html">Dashboard</a></li>
                  <li><a href="active-ads.html">Active Ads</a></li>
                  <li><a href="pending-ads.html">Pending Ads</a></li>
                  <li><a href="edit-profile.html">Edit Profile</a></li>
                  <li><a href="ad-post.html">Ad Post</a></li>
                  <li><a href="packages.html">Packages</a></li>
                  <li><a href="faqs.html">FAQs</a></li>
                  <li><a href="404.html">404 Page</a></li>
                  <li><a href="typography.html">Typography</a></li>
                </ul>
                {/* <!-- dropdown end -->  */}
              </li>
              <li class="dropdown"><a href="blog.html">Blog <span class="caret"></span></a> 
                {/* <!-- dropdown start --> */}
                <ul class="dropdown-menu">
                  <li><a href="blog.html">Blog List</a></li>
                  <li><a href="blog-detail.html">Blog Detail</a></li>
                  <li><a href="blog-grid.html">Blog Grid</a></li>
                  <li><a href="blog-full-width.html">Blog Grid Full Width</a></li>
                </ul>
                {/* <!-- dropdown end -->  */}
              </li>
              <li><a href="contact-us.html">Contact</a></li>
              <li class="postad"><a href="ad-post.html">Post an Ad</a></li>
            </ul>
            {/* <!-- Nav collapes end -->  */}
          </div>
          <div class="clearfix"></div>
        </div>
        {/* <!-- Nav end -->  */}
      </div>
    </div>
    {/* <!-- row end -->  */}
  </div>
  {/* <!-- Header container end -->  */}
</div>
{/* <!-- Header end --> 

<!-- Search start --> */}
<div class="searchwrap">
  <div class="container">
    <h3>Find Used Cars In United States</h3>
    <p>Search from over 99,00,000 Active ads &amp; Post free unlimited classifieds ads!</p>
    <div class="searchbar">
      <div class="row">
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Car Make or Model" />
        </div>
        <div class="col-md-2">
          <select class="form-control">
            <option>Price</option>
            <option>$500 - $999</option>
            <option>$1000 - $1099</option>
            <option>$2000 - $2499</option>
            <option>$2500 - $2999</option>
            <option>$3000 - $3499</option>
            <option>$3500 - $3999</option>
            <option>About $4000</option>
          </select>
        </div>
        <div class="col-md-2">
          <select class="form-control">
            <option>City</option>
            <option>New York</option>
            <option>San Joes</option>
            <option>Atlanta</option>
            <option>Kennesaw</option>
            <option>Merry Land</option>
            <option>Star City</option>
          </select>
        </div>
        <div class="col-md-2">
          <input type="submit" class="btn" value="Search"/>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Search End --> 

<!-- Featured Cars start --> */}
<div class="section">
  <div class="container"> 
    {/* <!-- title start --> */}
    <div class="titleTop">
      <h3>Featured <span>Used</span> Cars</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
    </div>
    {/* <!-- title end --> */}
    
    <ul class="gridlist itemgrid">
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$184,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg">
          <div class="ribbon_3 popular"><span>Featured</span></div>
          <a href="detail.html"><img src="images/cars/01.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$120,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg">
          <div class="ribbon_3 popular"><span>Featured</span></div>
          <a href="detail.html"><img src="images/cars/02.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$99,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg">
          <div class="ribbon_3 popular"><span>Featured</span></div>
          <a href="detail.html"><img src="images/cars/03.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$59,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg">
          <div class="ribbon_3 popular"><span>Featured</span></div>
          <a href="detail.html"><img src="images/cars/04.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$69,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg">
          <div class="ribbon_3 popular"><span>Featured</span></div>
          <a href="detail.html"><img src="images/cars/05.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$58,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg">
          <div class="ribbon_3 popular"><span>Featured</span></div>
          <a href="detail.html"><img src="images/cars/06.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$184,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg">
          <div class="ribbon_3 popular"><span>Featured</span></div>
          <a href="detail.html"><img src="images/cars/07.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$89,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg">
          <div class="ribbon_3 popular"><span>Featured</span></div>
          <a href="detail.html"><img src="images/cars/08.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
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
      <div class="title"> <span>World's Leading Used Cars</span>
        <h1><span>Welcome to</span> Auto Car</h1>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien metus, consectetur et efficitur ut, mattis et nisl. Etiam aliquet erat lorem, sed rhoncus justo hendrerit ac. Donec vel lacus tincidunt, sagittis lorem sed, ultricies magna. Suspendisse gravida massa sit amet urna faucibus, fermentum fringilla tellus congue. Integer lacinia iaculis dolor, in convallis metus laoreet quis. Vestibulum pulvinar, felis sit amet dignissim feugiat, est urna congue orci, nec mattis felis nunc sed nulla.</p>
      <ul>
        <li>Nam rutrum tortor eget lorem mattis mattis.</li>
        <li>Duis fermentum sem nec lorem sodales egestas.</li>
        <li>Duis mattis diam et ante tempor, quis tristique quam sagittis.</li>
        <li>Cras blandit ante ac hendrerit sodales.</li>
        <li>Duis non massa id nisl imperdiet iaculis.</li>
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
    <div class="titleTop">
      <h3>Search Cars By <span>Make</span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
    </div>
    {/* <!-- title end --> */}
    <div class="topsearchwrap">
      <ul class="row makelist">
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/01.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/02.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/03.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/04.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/05.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/06.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/07.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/08.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/09.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/10.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/11.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/12.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/13.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/14.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/15.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/16.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/17.jpg" alt="" /> <strong>Car Brand</strong></a></li>
        <li class="col-md-2 col-sm-3 col-xs-6"><a href="listing.html"><img src="images/make/18.jpg" alt="" /> <strong>Car Brand</strong></a></li>
      </ul>
    </div>
  </div>
</div>
{/* <!-- Cars By Make ends --> 

<!-- Popular Cars start --> */}
<div class="section">
  <div class="container"> 
    {/* <!-- title start --> */}
    <div class="titleTop">
      <h3>Popular <span>Used</span> Cars</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
    </div>
    {/* <!-- title end --> */}
    
    <ul class="gridlist itemgrid">
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$184,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/09.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$120,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/10.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$99,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/03.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$59,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/04.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$69,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/05.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$58,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/06.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$184,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/07.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$89,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/08.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
    </ul>
  </div>
</div>
{/* <!-- Popular Cars end --> 

<!-- Cars By Cities start --> */}
<div class="section whitebg">
  <div class="container"> 
    {/* <!-- title start --> */}
    <div class="titleTop">
      <h3>Used Cars By <span>Cities</span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
    </div>
    {/* <!-- title end --> */}
    <div class="topsearchwrap">
      <ul class="row catelist">
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">London <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">New York <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Atlanta <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Andalusia <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Anchorage <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Fairbanks <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Haines <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Flagstaff <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Prescott <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Arkadelphia <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Batesville <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Camden <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Forrest City <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Hot Springs <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Little Rock <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Alameda <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Arcadia <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Barstow <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Daly City <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Downey <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Huntington Beach <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Laguna Beach <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Modesto <span>(96)</span></a></li>
        <li class="col-md-3 col-sm-6 col-xs-6"><a href="#">Rancho Cucamonga <span>(96)</span></a></li>
      </ul>
    </div>
    <div class="wideBanner margintop40"><img src="images/google-ad-wide.jpg" alt=""/></div>
  </div>
</div>
{/* <!-- Cars By Cities ends --> 

<!-- started start --> */}
<div class="taglinewrap">
  <div class="container">
    <h2>Get Started Today</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed posuere eros sapien id quam.</p>
    <a href="#">Do You Want To Buy a Car? <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></a> <a href="#" class="buy">Do You Want To Sell a Car? <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></a> </div>
</div>
{/* <!-- started end --> 

<!-- Latest Cars start --> */}
<div class="section">
  <div class="container"> 
    {/* <!-- title start --> */}
    <div class="titleTop">
      <h3>Latest <span>Used</span> Cars</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
    </div>
    {/* <!-- title end --> */}
    
    <ul class="gridlist itemgrid">
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$184,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/01.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$120,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/02.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$99,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/03.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$59,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/04.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$69,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/09.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$58,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/06.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$184,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/10.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
      <li class="item">
        <div class="innerad">
          <h3><a href="detail.html">Car Name 2016</a></h3>
          <div class="price">$89,900</div>
          <div class="location"><i class="fa fa-map-marker" aria-hidden="true"></i> Atlanta, GA</div>
        </div>
        <div class="adimg"><a href="detail.html"><img src="images/cars/08.jpg" alt=""/></a></div>
        <div class="innerad"> <a href="detail.html" class="readmore">View Details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a> </div>
      </li>
    </ul>
  </div>
</div>
{/* <!-- Latest Cars end --> 

<!-- How it Works start --> */}
<div class="section whitebg howitwrap">
  <div class="container">
    <ul class="howlist row">
      {/* <!--step 1--> */}
      <li class="col-md-4 col-sm-4">
        <div class="iconcircle"><img src="images/avatar.png" alt="" /></div>
        <h4>Create a Free Account</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.</p>
      </li>
      {/* <!--step 1 end--> 
      
      <!--step 2--> */}
      <li class="col-md-4 col-sm-4">
        <div class="iconcircle"><img src="images/car.png" alt="" /></div>
        <h4>Post your Free Car</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.</p>
        </li>
      {/* </li>
      <!--step 2 end-->  */}
      
      {/* <!--step 3--> */}
      <li class="col-md-4 col-sm-4">
        <div class="iconcircle"><img src="images/sell-icon.png" alt="" /></div>
        <h4>Sold or Buy</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.</p>
      </li>
      {/* <!--step 3 end--> */}
    </ul>
  </div>
</div>
{/* <!-- How it Works Ends --> 

<!-- Testimonials start --> */}
<div class="section">
  <div class="container"> 
    {/* <!-- title start --> */}
    <div class="titleTop">
      <h3>Happy <span>Customers</span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis.</p>
    </div>
    {/* <!-- title end --> */}
    
    <ul class="testimonialsList">
      <li>
        <div class="testinner">
          <div class="testimg"><img src="images/coment-avatar-1.jpg" alt=""/></div>
          <div class="clientname">Garry Miller Jr (Tutor)</div>
          <div class="clientinfo">London, United Kingdom</div>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra id nunc at finibus. Etiam sollicitudin faucibus cursus. Proin luctus cursus nulla sed iaculis. Quisque vestibulum augue nec aliquet aliquet."</p>
        </div>
      </li>
      <li>
        <div class="testinner">
          <div class="testimg"><img src="images/coment-avatar-2.jpg" alt=""/></div>
          <div class="clientname">David Jackson (Student)</div>
          <div class="clientinfo">London, United Kingdom</div>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra id nunc at finibus. Etiam sollicitudin faucibus cursus. Proin luctus cursus nulla sed iaculis. Quisque vestibulum augue nec aliquet aliquet."</p>
        </div>
      </li>
      <li>
        <div class="testinner">
          <div class="testimg"><img src="images/coment-avatar-1.jpg" alt=""/></div>
          <div class="clientname">Garry Miller Jr (Tutor)</div>
          <div class="clientinfo">London, United Kingdom</div>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra id nunc at finibus. Etiam sollicitudin faucibus cursus. Proin luctus cursus nulla sed iaculis. Quisque vestibulum augue nec aliquet aliquet."</p>
        </div>
      </li>
      <li>
        <div class="testinner">
          <div class="testimg"><img src="images/coment-avatar-2.jpg" alt=""/></div>
          <div class="clientname">David Jackson (Student)</div>
          <div class="clientinfo">London, United Kingdom</div>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra id nunc at finibus. Etiam sollicitudin faucibus cursus. Proin luctus cursus nulla sed iaculis. Quisque vestibulum augue nec aliquet aliquet."</p>
        </div>
      </li>
    </ul>
  </div>
</div>
{/* <!-- Testimonials End --> 

<!-- App Start --> */}
<div class="appwraper">
  <div class="container"> 
    
    {/* <!--app info Start--> */}
    <div class="titleTop">
      <h3>Download Our App</h3>
    </div>
    <div class="subtitle2">A world market in your hand</div>
    <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non, semper orci.</p>
    <div class="appbtn"> <a href="#" data-toggle="tooltip" data-placement="bottom" title="Download From Play Store"><i class="fa fa-android" aria-hidden="true"></i> Download</a> <a href="#" data-toggle="tooltip" data-placement="bottom" title="Download From App Store"><i class="fa fa-apple" aria-hidden="true"></i> Download</a> <a href="#" data-toggle="tooltip" data-placement="bottom" title="Download From Windows Store"><i class="fa fa-windows" aria-hidden="true"></i> Download</a> </div>
    {/* <!--app info end-->  */}
    
  </div>
</div>
{/* <!-- App End --> 

<!-- Blog start --> */}
<div class="section whitebg">
  <div class="container"> 
    {/* <!-- title start --> */}
    <div class="titleTop">
      <h3>Latest From <span>Blog</span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius, orci id facilisis egestas, neque purus sagittis arcu, nec maximus quam odio nec elit Pellentesque eget ipsum mattis</p>
    </div>
    {/* <!-- title end --> */}
    <ul class="blogGrid row">
      <li class="col-md-4 col-sm-4">
        <div class="int"> 
          {/* <!-- Blog Image --> */}
          <div class="postimg"> <img src="images/blog/1.jpg" alt="Blog Title"/> </div>
          
          {/* <!-- Blog info --> */}
          <div class="post-header">
            <h4><a href="#.">Duis ultricies aliquet mauris</a></h4>
            <div class="postmeta">By : <span>Jhon Doe </span> Category : <a href="#.">Job Search </a></div>
            <div class="date"> 17 SEP 2017</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus...</p>
          <a href="blog-detail.html" class="readmore">Read More</a> </div>
      </li>
      <li class="col-md-4 col-sm-4">
        <div class="int"> 
          {/* <!-- Blog Image --> */}
          <div class="postimg"> <img src="images/blog/2.jpg" alt="Blog Title"/> </div>
          
          {/* <!-- Blog info --> */}
          <div class="post-header">
            <h4><a href="#.">Duis ultricies aliquet mauris</a></h4>
            <div class="postmeta">By : <span>Jhon Doe </span> Category : <a href="#.">Job Search </a></div>
            <div class="date"> 17 SEP 2017</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus...</p>
          <a href="blog-detail.html" class="readmore">Read More</a> </div>
      </li>
      <li class="col-md-4 col-sm-4">
        <div class="int"> 
          {/* <!-- Blog Image --> */}
          <div class="postimg"> <img src="images/blog/3.jpg" alt="Blog Title"/> </div>
          
          {/* <!-- Blog info --> */}
          <div class="post-header">
            <h4><a href="#.">Duis ultricies aliquet mauris</a></h4>
            <div class="postmeta">By : <span>Jhon Doe </span> Category : <a href="#.">Job Search </a></div>
            <div class="date"> 17 SEP 2017</div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros rhoncus...</p>
          <a href="blog-detail.html" class="readmore">Read More</a> </div>
      </li>
    </ul>
  </div>
</div>
{/* <!-- Blog ends -->  */}



      <Footer/>
    </div>
  )
}

export default Index2
