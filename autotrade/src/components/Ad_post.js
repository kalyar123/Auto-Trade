import React,{useState} from 'react'
import Footer from './Footer'
import Header from './Header';
import { Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Formik } from "formik";
import FileBase64 from "react-file-base64";
import { Link, useHistory } from 'react-router-dom';

const Ad_post = () => {
  const [fileData, setFileData] = useState();
  const history =useHistory();
  const initialValues = {
    name:'',
    type:'',
    carType:'',
    category:'',
    make:'',
    model:'',
    assembly:'',
    bodyType:'',
    transmission:'',
    color:'',
    capacity:'',
    fuel:'',
    location:'',
    state:'',
     city:'',
    country:'',
    price:'',
    description:''
  };
  async function handleSubmit(values, { setSubmitting, resetForm }) {
    try {
      const response = await axios.post("http://localhost:5000/api/addcar", {
        name: values.name,
        type: values.type,
        carType: values.carType,
        category: values.category,
        make: values.make,
        model: values.model,
        assembly: values.assembly,
        bodyType: values.bodyType,
        transmission: values.transmission,
        color: values.color,
        capacity: values.capacity,
        fuel: values.fuel, 
        location: values.location,
        state: values.state,
        city: values.city,
        country: values.country,
        price: values.price,
        description: values.description,
        Image: fileData,
      });
      console.log("Upload successful:", response.data);
      resetForm();
      setFileData("");
      history.push('/');
      // props.onClick();
      // props.onClickTwo();
    } catch (error) {
      console.error("Upload failed:", error);
    }
    setSubmitting(false);
  }
  return (
  <div>
  <Header/>
<div class="pageTitle">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h1 class="page-heading">Post A Car</h1>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="breadCrumb"><Link href="#.">Home</Link> / <span>Post ad</span></div>
      </div>
    </div>
  </div>
</div>
{/* <!-- Page Title End --> */}

<div class="listpgWraper">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="userccount">
          <div class="formpanel"> 
            
            {/* <!-- Ad Information --> */}
            <h5>Car Information</h5>
                <Formik
                    enableReinitialize={true}
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                  >
                    {({
                      handleSubmit,
                      setFieldValue,
                      handleChange,
                      values,
                      errors,
                      touched,
                      handleBlur,
                    }) => (
                      <Form
                        className="stepperformstyle"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <Row className="mb-3">
                          <Col md="12">
                            <Row>
                              <Col md="12" className="formrow">
                                <Form.Label>Car Name*</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Car name"
                                  name="name"
                                  value={values.name || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.name && touched?.name
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>
                              <Col md="6" className="formrow">
                               <Form.Label>Type</Form.Label>
                               <Form.Control
                                as="select"
                                name="type"
                                placeholder="Open"
                                value={values.type || ""}
                                onChange={handleChange}
                                className={
                                errors.type && touched?.type ? "mb-1" : "mb-4"
                                } >
                               <option>Type</option>
                               <option>I want to Sell</option>
                               <option>I want to Buy</option>
                               </Form.Control>
                            
                             </Col>
                             <Col md="6" className="formrow">
                               <Form.Label>Car type</Form.Label>
                               <Form.Control
                                as="select"
                                name="carType"
                                placeholder="Open"
                                value={values.carType || ""}
                                onChange={handleChange}
                                className={
                                errors.carType && touched?.carType ? "mb-1" : "mb-4"
                                } >
                               <option>Car type</option>
                               <option>New</option>
                               <option>Used</option>
                               </Form.Control>
                            
                             </Col>
                             <Col sm='12' md="6" className="formrow">
                               <Form.Label>Category</Form.Label>
                               <Form.Control
                                as="select"
                                name="category"
                                placeholder="category"
                                value={values.category || ""}
                                onChange={handleChange}
                                className={
                                errors.category && touched?.category ? "mb-1" : "mb-4"
                                } >
                               <option>Select Catgory</option>
                                <option>Cars</option>
                               </Form.Control>
                             </Col>
                             <Col sm='12' md="6" className="formrow">
                               <Form.Label>Make</Form.Label>
                               <Form.Control
                                as="select"
                                name="make"
                                placeholder="make"
                                value={values.make || ""}
                                onChange={handleChange}
                                className={
                                errors.make && touched?.make ? "mb-1" : "mb-4"
                                } >
                               <option>Select Make</option>
                                <option>Honda</option>
                                <option>Toyota</option>
                                <option>BMW</option>
                                <option>Suzuki</option>
                                <option>Audi</option>
                               </Form.Control>
                             </Col>
                             <Col sm='12' md="4" className="formrow">
                               <Form.Label>Model</Form.Label>
                               <Form.Control
                                as="select"
                                name="model"
                                placeholder="model"
                                value={values.model || ""}
                                onChange={handleChange}
                                className={
                                errors.model && touched?.model ? "mb-1" : "mb-4"
                                } >
                                <option>Select Mdel</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                               </Form.Control>
                             </Col>
                             <Col sm='12' md="4" className="formrow">
                               <Form.Label>Assembly</Form.Label>
                               <Form.Control
                                as="select"
                                name="assembly"
                                placeholder="Open"
                                value={values.assembly || ""}
                                onChange={handleChange}
                                className={
                                errors.assembly && touched?.assembly ? "mb-1" : "mb-4"
                                } >
                               <option>Assembly</option>
                               <option>Local</option>
                               <option>Imported</option>
                               </Form.Control>
                             </Col>
                             <Col sm='12' md="4" className="formrow">
                               <Form.Label>Body type</Form.Label>
                               <Form.Control
                                as="select"
                                name="bodyType"
                                placeholder="Open"
                                value={values.bodyType || ""}
                                onChange={handleChange}
                                className={
                                errors.bodyType && touched?.bodyType ? "mb-1" : "mb-4"
                                } >
                               <option>Body Type</option>
                               <option>Mini Van</option>
                               <option>Hatchback</option>
                               </Form.Control>
                            
                             </Col>
                             <Col sm='12' md="6" className="formrow">
                               <Form.Label>Transmission</Form.Label>
                               <Form.Control
                                as="select"
                                name="transmission"
                                placeholder="transmission"
                                value={values.transmission || ""}
                                onChange={handleChange}
                                className={
                                errors.transmission && touched?.transmission ? "mb-1" : "mb-4"
                                } >
                                <option>Transmission</option>
                                <option>Automatic</option>
                                <option>Manual</option>
                               </Form.Control>
                            
                             </Col>

                             <Col sm='12' md="6" className="formrow">
                               <Form.Label>Color</Form.Label>
                               <Form.Control
                                as="select"
                                name="color"
                                placeholder="color"
                                value={values.color || ""}
                                onChange={handleChange}
                                className={
                                errors.color && touched?.color ? "mb-1" : "mb-4"
                                } >
                                <option>Color</option>
                                <option>White</option>
                                <option>Black</option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Silver</option>
                               </Form.Control>
                            
                             </Col>
                             <Col sm='12' md="6" className="formrow">
                                <Form.Label>Capacity</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="capacity"
                                  name="capacity"
                                  value={values.capacity || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.capacity && touched?.capacity
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>
                              <Col sm='12' md="6" className="formrow">
                                <Form.Label>Fuel</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="fuel"
                                  name="fuel"
                                  value={values.fuel || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  classname={
                                    errors.fuel && touched?.fuel
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>
                              <Col sm='12' className="formrow">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="location"
                                  name="location"
                                  value={values.location || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  classname={
                                    errors.location && touched?.location
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>
                              <Col sm='12' md="4" className="formrow">
                               <Form.Label>State</Form.Label>
                               <Form.Control
                                as="select"
                                name="state"
                                placeholder="state"
                                value={values.state || ""}
                                onChange={handleChange}
                                className={
                                errors.state && touched?.state ? "mb-1" : "mb-4"
                                } >
                                <option>state</option>
                                <option>White</option>
                                <option>Black</option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Silver</option>
                               </Form.Control>
                            
                             </Col>
                             <Col sm='12' md="4" className="formrow">
                               <Form.Label>City</Form.Label>
                               <Form.Control
                                as="select"
                                name="city"
                                placeholder="city"
                                value={values.city || ""}
                                onChange={handleChange}
                                className={
                                errors.city && touched?.city ? "mb-1" : "mb-4"
                                } >
                                <option>city</option>
                                <option>White</option>
                                <option>Black</option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Silver</option>
                               </Form.Control>
                            
                             </Col>
                             <Col sm='12' md="4" className="formrow">
                               <Form.Label>Country</Form.Label>
                               <Form.Control
                                as="select"
                                name="country"
                                placeholder="country"
                                value={values.country || ""}
                                onChange={handleChange}
                                className={
                                errors.country && touched?.country ? "mb-1" : "mb-4"
                                } >
                                <option>country</option>
                                <option>White</option>
                                <option>Black</option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>Silver</option>
                               </Form.Control>
                            
                             </Col>
                              <Col sm="12" md="12" className="formrow">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  name="description"
                                  placeholder="Write some thing..."
                                  value={values.description || ""}
                                  onChange={handleChange}
                                ></Form.Control>
                              </Col>
                              <Col sm='12' className="formrow">
                                <Form.Label>price</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="price"
                                  name="price"
                                  value={values.price || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  classname={
                                    errors.price && touched?.price
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>
                              <Col sm="12" md="12" className="formrow">
                                <Form.Group
                                  className="mb-4"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label className="mb-1 ">
                                    Image
                                  </Form.Label>
                                  <br />
                                  <FileBase64
                                    multiple={false}
                                    onDone={(base64) =>
                                      setFileData(base64.base64)
                                    }
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Button className="btnprimary mb-0 w-100" type="submit">
                          Add car
                        </Button>
                      </Form>
                    )}
                  </Formik>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <Footer/>
    </div>
  )
}

export default Ad_post
