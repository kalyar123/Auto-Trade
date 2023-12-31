import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Change_password = () => {
  return (
    <div>
      <Header/>

      {/* <!-- Page Title start --> */}
<div class="pageTitle">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h1 class="page-heading">Change Password</h1>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="breadCrumb"><a href="#">Home</a> / <span>Change Password</span></div>
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
          <h5>Change Password</h5>
          {/* <!-- form --> */}
          <div class="formpanel">
            <div class="formrow">
              <input type="text" class="form-control" placeholder="New Password"/>
            </div>
            <div class="formrow">
              <input type="text" class="form-control" placeholder="Confirm Password"/>
            </div>
            <input type="submit" class="btn" value="Update"/>
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

export default Change_password
