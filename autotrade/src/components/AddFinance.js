import React,{useState} from 'react'
import Footer from './Footer'
import Header from './Header';
import { Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Formik } from "formik";
import { Link } from 'react-router-dom';

const AddFinance = (props) => {
  const [success, setSuccess] = useState(false);
  const initialValues = {
    bankName:props.bankName,personName:'',carName:'',model:'',totalInstallments:'',perInstallment:'',totalPrice:''
  };
  async function handleSubmit(values, { setSubmitting, resetForm }) {
    try {
      const response = await axios.post("http://localhost:5000/api/finance", {
        bankName: values.bankName,
        personName: values.personName,
        carName: values.carName,
        model: values.model,
        totalInstallments: values.totalInstallments,
        perInstallment: values.perInstallment,
        totalPrice: values.totalPrice,
      });
      console.log("Upload successful:", response.data);
      resetForm();
      setSuccess(true)
      setTimeout(()=>{
        setSuccess(false)
      },2000)
      setTimeout(()=>{
        props.onClick();
      },2000)
      
      // props.onClickTwo();
    } catch (error) {
      console.error("Upload failed:", error);
    }
    setSubmitting(false);
  }
  return (
  <div>
<div class="pageTitle">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h1 class="page-heading">Add Finance</h1>
      </div>
      <div class="col-md-6 col-sm-6">
        <div class="breadCrumb"><Link href="#.">Home</Link> / <span>Add Finance</span></div>
      </div>
    </div>
  </div>
</div>
{success && <div className="alert alert-success" role="alert">Finance added successfully</div>} 
{/* <!-- Page Title End --> */}

<div class="listpgWraper">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="userccount">
          <div class="formpanel"> 
            
            {/* <!-- Ad Information --> */}
            <h5>Finance Information</h5>
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
                                <Form.Label>Bank Name*</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="bank name"
                                  name="bankName"
                                  value={values.bankName || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.bankName && touched?.bankName
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>
                              <Col md="6" className="formrow">
                                <Form.Label>Person Name*</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="ali"
                                  name="personName"
                                  value={values.personName || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.personName && touched?.personName
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>
                              <Col md="6" className="formrow">
                                <Form.Label>Car Name*</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Car name"
                                  name="carName"
                                  value={values.carName || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.carName && touched?.carName
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>

                              <Col md="4" className="formrow">
                                <Form.Label>Model</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="model"
                                  name="model"
                                  value={values.model || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.model && touched?.model
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>
                              <Col md="4" className="formrow">
                                <Form.Label>Total Installment</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="4"
                                  name="totalInstallments"
                                  value={values.totalInstallments || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.totalInstallments && touched?.totalInstallments
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>
                              <Col md="4" className="formrow">
                                <Form.Label>Per Installment</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="$400"
                                  name="perInstallment"
                                  value={values.perInstallment || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.perInstallment && touched?.perInstallment
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>
                              <Col md="12" className="formrow">
                                <Form.Label>Total Price</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="$2000"
                                  name="totalPrice"
                                  value={values.totalPrice || ""}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className={
                                    errors.totalPrice && touched?.totalPrice
                                      ? "mb-1"
                                      : "mb-4"
                                  }
                                />
                              </Col>                       
                            </Row>
                          </Col>
                        </Row>
                        <Button className="btnprimary mb-0 w-100" type="submit">
                          Add Finance
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

    </div>
  )
}

export default AddFinance
