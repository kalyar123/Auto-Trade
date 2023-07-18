import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Forgot_password = () => {
  return (
    <div>
      <Header/>

      {/* <!-- Page Title start --> */}
<div class="pageTitle">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h1 class="page-heading">Forgot Password</h1>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="breadCrumb"><a href="#">Home</a> / <span>Forgot Password</span></div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Page Title End --> */}

<div class="listpgWraper">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="userccount">
          <h5>Forgot Password</h5>
          <p>Nam ea eripuit assueverit, invenire delicatissimi ad pro, an dicam principes duo. Paulo prodesset duo ad. Duo eu summo verear. Natum gubergren definitionem id usu, graeco cetero ius ut.</p>
          
          {/* <!-- form --> */}
          <div class="formpanel">
            <div class="formrow">
              <input type="text" class="form-control" placeholder="Enter Email Address"/>
            </div>
            <input type="submit" class="btn" value="Sumbit"/>
          </div>
          {/* <!-- form  end-->  */}
          
        </div>
      </div>
    </div>
  </div>
</div>

      <Footer/>
    </div>
  )
}

export default Forgot_password
