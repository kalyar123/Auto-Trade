import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from "axios";
import Header from './Header'
const Register = () => {
  const [user,setUser]= useState({
    name:"",
    userType:"",
    userName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  const [error,setError]=useState(null);
  const [success,setSuccess]=useState(null);
  let name , value;
  const handleInput=(e)=>{
    name= e.target.name;
    value= e.target.value;
    setUser({...user,[name]:value});
  }
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000); // set the timeout to 2 seconds
    }
    if (success) {
      setTimeout(() => {
        setSuccess(null);
      }, 3000); // set the timeout to 2 seconds
    }
  }, [error,success]);
  const handleSubmit=()=>{
    const {name,userType,userName,email,password,confirmPassword}= user;
    axios.post('http://localhost:5000/api/authUser/register',{
      name,userType,userName,email,password,confirmPassword
    })
    .then(response => {
    console.log(response.data);
    setSuccess('User Added successfully')
     })
  .catch(error => {
    setError(error.response?.data?.message);
  });

    
  }
  return (
    <div>
        <Header/>
      {/* <!-- Page Title start --> */}
<div className="pageTitle">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <h1 className="page-heading">Register</h1>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="breadCrumb"><Link to="/">Home</Link> / <span>Register</span></div>
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
         {success &&  <div className="alert alert-success" role="alert">{success}</div>}
          { error && <div className="alert alert-danger" role="alert">{error && error}</div>}
          <div className="tab-content">
            <div id="wsell" className="formpanel tab-pane fade in active">
              <div className="formrow">
                <input type="text" name="name" className="form-control" placeholder="Full Name"
                value={user.name}
                onChange={handleInput}
                />

              </div>
              <div className="formrow">
                <select className="form-control" name="userType" onChange={handleInput}  value={user.userType}>
                  <option>Ad type</option>
                  <option>New</option>
                  <option>Used</option>
                </select>
              </div>
              <div className="formrow">
                <input type="text" name="userName" className="form-control" placeholder="userName"
                 value={user.userName}
                 onChange={handleInput}
               
                
                />
              </div>
              <div className="formrow">
                <input type="text" name="email" className="form-control" placeholder="Email"
                 value={user.email}
                 onChange={handleInput}
               
                />
              </div>
              <div className="formrow">
                <input type="password" name="password" className="form-control" placeholder="Password"
                 value={user.password}
                 onChange={handleInput}
               
                />
              </div>
              <div className="formrow">
                <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password"
                 value={user.confirmPassword}
                 onChange={handleInput}
               
                />
              </div>
              <input type="submit" className="btn" value="Register" onClick={handleSubmit}/>
            </div>
           
          </div>
          <div className="newuser"><i className="fa fa-user" aria-hidden="true"></i> Already a Member?  <Link to='login' className="Navbar_Link">Login Here</Link></div>
        </div>
      </div>
    </div>
  </div>
</div>
   
   <Footer/>
    </div>
  )
}

export default Register
