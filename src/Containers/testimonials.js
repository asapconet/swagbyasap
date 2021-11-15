import React from "react";
import Button from "../Components/buttons";

const Testimonials = () => {
  return (
    <section className="testimonial">
      <div className="gen-body">
        <div className="gen-head">
          <h4>Member Testimonials</h4>
          <h3>What users say about our platform</h3>
        </div>
        <div className="disclaimer">
          The members posting their reviews are of their own opinion and not
          made in consultation with anyone at The Swag Academy. Anyone posting
          about having specific results within The Academy have not been
          personally verified by The Swag Academy. Any comments that you see are
          their personal opinion and we are not in partnership with them
          whatsoever.
        </div>
      </div>
      <div className="slide-box">
        <div className="slide-container"></div>
        <div className="btn-box">
          <Button className="last-btn">Register Now --</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
