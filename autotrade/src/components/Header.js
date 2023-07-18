import { useContext } from 'react'
import { AuthContext } from './authContext';
import { Link } from 'react-router-dom';
const Header = () => {
  const {authState,logout,totalCount} = useContext(AuthContext);
  const handleLogout=()=>{
    logout();
  }
  return (
<div>
<div className="topbar-wrap">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div className="tpinfo"> <Link to="/"><i className="fa fa-phone" aria-hidden="true"></i> 1-800-123-4567</Link> <Link to="/"><i className="fa fa-map-marker" aria-hidden="true"></i> 123 X 4TH Street,Areeb khan, CA 123456</Link> </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="toplinks">
          <Link to="register">Sign Up</Link> 
         { !authState?.isAuthenticated ? <Link to="/login">Sign In</Link> :<buttton className="btn" style={{color: 'white'}}  onClick={handleLogout} >Logout</buttton>  }
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!-- Header start --> */}
<div className="header">
  <div className="container">
    <div className="row">
      <div className="col-md-2 col-sm-3 col-xs-12"> <Link to="/" className="logo"><img src="images/logo1.png" alt="" /></Link>
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
              <li className="dropdown"><Link to="/">Home</Link> 
              </li>
            <li><Link to="/listing">Car Auto Parts</Link></li>
              <li >
                <Link to="/cart">Cart</Link> 
                {/* <ul className="dropdown-menu">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/listing">Ad Listing</Link></li>
                  <li><Link to="/detail">Ad Detail</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/forgotpassword">Forgot Password</Link></li>
                  <li><Link to="/changepassword">Change Password</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/activeads">Active Ads</Link></li>
                  <li><Link to="/pendingads">Pending Ads</Link></li>
                  <li><Link to="/adpost">Ad Post</Link></li>/
                  <li><Link to="/error">404 Page</Link></li>
                  <li><Link to="/autoparts">Auto Parts</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                </ul> */}
              </li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contactus">Contact</Link></li>
            {authState?.isAuthenticated &&  <li><Link to="/adpost">Post an Ad</Link></li>}
            {authState?.isAuthenticated &&  <li><Link to="/Assurance_listing">Insurance</Link></li>}
            {authState?.isAuthenticated &&  <li><Link to="/Finance">Finance</Link></li>}
            {authState?.isAuthenticated && totalCount>0 && <li><Link to="/cart" className='cart-design-css'>{totalCount && totalCount}</Link></li>}
            </ul>
           
          </div>
          <div className="clearfix"></div>
        </div>
       
      </div>
    </div>
    {/* <!-- row end -->  */}
  </div>
  {/* <!-- Header container end -->  */}
</div>
{/* <!-- Header end -->  */}
    </div>
  )
}

export default Header
