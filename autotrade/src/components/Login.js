import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useState,useContext,useEffect } from 'react'
import jwt_decode from 'jwt-decode'; 
import { AuthContext } from './authContext';
const Login = () => {
  const [user,setUser]=useState({
    email:"",
    password:""
  })
  const {error,success,login} = useContext(AuthContext);
  const handleChange=e=>{
    const {name,value}=e.target
    setUser({
      ...user,
      [name]:value
    })
  }

   const handleSubmit=()=>{
    const {email,password}=user;
    login(email,password);
  }
  return (
    <div>
      <Header/>
{/* <!-- Page Title start --> */}
<div className="pageTitle">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <h1 className="page-heading">Login</h1>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="breadCrumb"><Link to="/">Home</Link> / <span>Login</span></div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Page Title End --> */}

<div className="listpgWraper">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="userccount">
           {error && <div className="alert alert-danger" role="alert">{error}</div>} 
           {success && <div className="alert alert-success" role="alert">{success}</div>} 
          <h5>User Login</h5>
          {/* <!-- login form --> */}
          <div className="formpanel">
            <div className="formrow">
              <input type="text" className="form-control"  name="email"
                value={user.email} onChange={handleChange} placeholder="Email"
              />
             
            </div>
            <div className="formrow">
              <input type="password" className="form-control"  name="password"
                value={user.password} onChange={handleChange} placeholder="Password"
              />
              
            </div>
            <input type="submit" className="btn" 
            onClick={handleSubmit}
             value="Login"/>
          </div>
          {/* <!-- login form  end--> 
          
          <!-- sign up form --> */}
          <div className="newuser" ><i className="fa fa-user" aria-hidden="true"></i> New User? 
          <Link to="register"> Register Here</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <!--Footer--> */}
<Footer/>
{/* <!--Footer end--> 



{/* <!-- Bootstrap's JavaScript -->  */}
<script src="js/jquery-2.1.4.min.js"></script> 
<script src="js/bootstrap.min.js"></script> 

{/* <!-- Owl carousel -->  */}
<script src="js/owl.carousel.js"></script> 

{/* <!-- Custom js -->  */}
<script src="js/script.js"></script>
    </div>
  )
}

export default Login
