import React from "react";
import billgate from '../images/billgates.jpg';
import stevejob from '../images/stevejobs.jpg';

const Testimonial = () => {
  return (
    <div id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12 service-box">
            <h2 id="sec1">Testimonials</h2>
          </div>

          <div className="col-md-6 service-box">
            <div className="testimonials">
              <p id="prg">
                I just wanted to share a quick note and let you know that you
                guys do a really good job. I'm glad I decided to work with you.
              </p>
              <img src={billgate}  height={50} width={40} alt="" />
              <div className="author">Bill Gates</div>
              <div className="author-company">Microsoft</div>
            </div>
          </div>

          <div className="col-md-6 service-box">
            <div className="testimonials">
              <p id="prg">
                I just wanted to share a quick note and let you know that you
                guys do a really good job. I'm glad I decided to work with you.
              </p>
              <img src={stevejob} height={50} width={40} alt="" />
              <div className="author">Steve Jobs</div>
              <div className="author-company">Apple</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
