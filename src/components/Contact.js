import React, { Component } from "react";
import { Field, Formik } from "formik";

class Contact extends Component {
  submitform = () => {
    console.log("OK");
  };

  formhtml = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        ></Field>
        <Field
          type="email"
          name="email"
          placeholder="Enter a valid email address"
          required
        ></Field>
        <Field
          component="textarea"
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
        ></Field>
        <button type="submit">Submit</button>
      </form>
    );
  };
  render() {
    return (
      <div className="contact-wrap">
        <div className="contact">
          <h2>Contact Us</h2>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            onSubmit={this.submitform}
            render={this.formhtml}
          />
        </div>
        <div className="contact-info">
          <div>
            <h3>
              <i className="fa fa-phone"></i>
              Call us
            </h3>
            <p>1 (234) 567-891, 1 (234) 987-654</p>
          </div>
          <div>
            <h3>
              <i className="fa fa-map-marker"></i>
              Location
            </h3>
            <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
          </div>
          <div>
            <h3>
              <i className="fa fa-calendar"></i>
              Working Hours
            </h3>
            <p>Mon – Fri …… 11 am – 8 pm, Sat, Sun …… 6 am – 8 pm</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
