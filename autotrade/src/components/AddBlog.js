import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik } from "formik";
import FileBase64 from "react-file-base64";

export const AddBlog = (props) => {
  const [fileData, setFileData] = useState();
  const initialValues = {
    name: "",
    author: "",
    description: "",
    date:""
  };
  async function handleSubmit(values, { setSubmitting, resetForm }) {
    try {
      const response = await axios.post("http://localhost:5000/api/blogs", {
        name: values.name,
        author: values.author,
        description: values.description,
        date: values.date,
        Image: fileData,
      });
      console.log("Upload successful:", response.data);
      resetForm();
      setFileData("");
      props.onClick();
      props.onClickTwo();
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
              <h1 class="page-heading">Post Blog</h1>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="breadCrumb">
                <Link to="/">Home</Link> / <span>Post Blog</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 classNameName="font-weight-bold">Add Blog</h2>
            </div>
            <div className="col-md-12">
              <div className="userccount">
                <div className="formpanel">
                  {/* <!-- Ad Information --> */}
                  <h5>Blog Information</h5>
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
                                <Form.Label>Blog Name*</Form.Label>
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

                                {errors.name && touched?.name ? (
                                  <p className="text-danger mb-4">
                                    {errors.name}
                                  </p>
                                ) : null}
                              </Col>
                              <Col sm="12" md="12" className="formrow">
                                <Form.Label>author</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="author"
                                  placeholder="author"
                                  value={values.author || ""}
                                  onChange={handleChange}
                                ></Form.Control>
                              </Col>
                              <Col sm="12" md="12" className="formrow">
                                <Form.Label>date</Form.Label>
                                <Form.Control
                                  type="date"
                                  name="date"
                                  style={{padding:'0px 13px'}}
                                  placeholder="date"
                                  value={values.date || ""}
                                  onChange={handleChange}
                                ></Form.Control>
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
                          Add Blog
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
  );
};
