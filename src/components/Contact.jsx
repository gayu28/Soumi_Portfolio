import React from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

import { useEffect, useState } from "react"
import InputField from "./InputField"
import SelectField from "./SelectField";
import TextareaField from "./TextareaField";


const Contact = () => {
  const [values, setValues] = useState({
    fullName: '',
    u_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_qhfvxle', 'template_ox46i6h', values, 'user_nvv8pO0Z1WDyFQXZrQdnV')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          u_email: '',
          subject: '',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };
  

  

  return (
    <>
      <div className="contactform"> 
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
            <InputField value={values.fullName} handleChange={handleChange} label="Your Name" name="fullName" type="text" placeholder="John Doe" />

            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
            <InputField value={values.u_email} handleChange={handleChange} label="Your E-Mail" name="u_email" type="email" placeholder="jphn@example.com" />

            </div>
            
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
            {/* <SelectField handleChange={handleChange} name="role" label="Role" /> */}
            {/* <SelectField value={values.subject} handleChange={handleChange} label="Your Subject here" name="subject" /> */}
            <InputField value={values.subject} handleChange={handleChange} label="Your Subject" name="subject" type="text" placeholder="New" />


            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
            <TextareaField value={values.message} handleChange={handleChange} label="Your Message" name="message" />

            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
</div>
      {/* End contact */}
    </>
  );
};

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <h5>Your message has been sent successfully</h5>
  </div>
)

export default Contact;
