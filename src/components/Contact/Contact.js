import React, { useState } from "react";
import "../Contact/Contact.css";
import { EnvelopeFill, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import { TextField, Button } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone is required'),
  message: Yup.string().required('Message is required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};


const Contact = () => {

  const handleSubmit = (values) => {
    console.log(values);
  };


  return (
    <div className="contact-container">
      <div className="text-center mt-5">
        <div className="row w-100">
          <h1 className="fw-bold">Contact Us</h1>
        </div>
        <div className="row w-100 mb-5">
          <h4 className="blur-color">
            Any question or remarks? Just write us a message!
          </h4>
        </div>
      </div>
      <div className="row gx-0 contact-card w-100 ">
        <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 col-xs-12 m-2 card-background w-100">
          <div className="p-5">
          <div>
            <h2>Our address</h2>
            <h6>Connect with us</h6>
          </div>
          <div className="mt-5">
            <div className="d-flex">
              <TelephoneFill />
              <p className="mx-3">+91-9072700085</p>
            </div>
            <div className="d-flex">
              <EnvelopeFill />
              <p className="mx-3">info@scanntek.com</p>
            </div>
            <div className="d-flex">
              <GeoAltFill />
              <p className="mx-3">
                2nd-floor, Kedhar Tower Puthiyapalam, Calicut Pin: 673002
              </p>
            </div>
          </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xl-6 col-lg-6 col-xs-12 form-container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="form-container">
                <div className="name-fields">
                  <div>
                    <Field
                      as={TextField}
                      variant="standard"
                      label="First Name"
                      type="text"
                      name="firstName"
                      fullWidth
                    />
                    <ErrorMessage className="error" name="firstName" component="div" />
                  </div>

                  <div>
                    <Field
                      as={TextField}
                      variant="standard"
                      label="Last Name"
                      type="text"
                      name="lastName"
                      fullWidth
                      
                    />
                    <ErrorMessage className="error" name="lastName" component="div" />
                  </div>
                </div>

                <div className="mail-fields">
                  <div>
                    <Field
                      as={TextField}
                      variant="standard"
                      label="Email"
                      type="email"
                      name="email"
                      fullWidth
                     
                    />
                    <ErrorMessage className="error" name="email" component="div" />
                  </div>

                  <div>
                    <Field
                      as={TextField}
                      variant="standard"
                      label="Phone"
                      type="number"
                      name="phone"
                      fullWidth
                      
                    />
                    <ErrorMessage className="error" name="phone" component="div" />
                  </div>
                </div>


                <div className="row w-100 gx-0">
                  <Field
                    as={TextField}
                    variant="standard"
                    label="Message"
                    type="text"
                    name="message"
                    multiline
                    rows={4}
                    fullWidth
                  
                  />
                  <ErrorMessage className="error" name="message" component="div" />
                </div>

                <Button variant="contained"  type="submit" id="submit-btn">
                  submit
                </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1819562221453!2d75.79039327504879!3d11.248021488930881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659b4b8aba8a3%3A0x551eb222c8d36280!2sScanntek%20IT%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1697522298603!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  );
};

export default Contact;
