import React from "react";
import "./Contact.css";
import ContactForm from "../Contact/ContactForm";
const Contact = () => {
  return (
    <div className="container">
      <h1 className="contact-h1">Contact Us</h1>{" "}
      <p className="content">
        Thank you for stopping by Recipe Finder We would love to hear from you
        about any questions, comments or inquiries. You can email our team at
        Recipe@Finder.com.
      </p>
      <h2 className="subheading">Recipe Questions</h2>
      <p className="content">
        If you have questions or feedback about a recipe, please fill the form
        below. We love hearing how recipes went and if you ever need help
        troubleshooting a recipe!
      </p>
      <div className="ContactForm">
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
