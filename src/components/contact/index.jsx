import React from "react";
import "./style.scss";

const Contact = () => {
  return (
    <div className="contact">
      {/* Left side - image */}
      <div className="contact-left">
  <div className="image-wrapper">
    <img src="/images/Contact.jpg" alt="Hire me" />
  </div>
</div>


      {/* Right side - form */}
      <div className="contact-right">
        <h2>Let's Work Together</h2>
        <form>
          {/* Name */}
         {/* Name + Email inline */}
<div className="form-row inline">
  <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" placeholder="Name" id="name" required />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" placeholder="Name" id="email" required />
  </div>
</div>


          {/* Dropdown */}
          <div className="form-row">
            <label htmlFor="service">Service Needed</label>
            <select id="service" required>
              <option value="">Select Service</option>
              <option value="web">Web Development</option>
              <option value="app">App Development</option>
              <option value="design">UI/UX Design</option>
              <option value="seo">SEO & Marketing</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-row">
            <label htmlFor="message">What can I help you with?</label>
            <textarea id="message"placeholder="Hello,I'd like to enquire about"  rows="5" required />
          </div>

          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
