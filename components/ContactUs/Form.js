import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const sendMail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());

    axios.post("/api/contactUs", formDataObj).then((response) => {
      if (response.status === 200)
        toast("Email Sent !", {
          position: "bottom-center",
          type: "success",
        });
    });
  };
  return (
    <section className="contact-area ptb-100">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch With Us</h2>
          <div className="bar"></div>
          <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
        </div>

        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <img src="/images/marketing.png" alt="image" />
          </div>

          <div className="col-lg-6 col-md-12">
            <form onSubmit={sendMail} id="contactForm">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      required={true}
                      data-error="Please enter your name"
                      placeholder="Name"
                      name="name"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      required={true}
                      data-error="Please enter your email"
                      name="email"
                      placeholder="Email"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="5"
                      required
                      data-error="Write your message"
                      placeholder="Your Message"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Form;
