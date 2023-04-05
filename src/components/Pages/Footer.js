import React from "react";

const Footer = () => {
  return (
    <div>
    <div className="container-fluid" id="footer-head">
      <div className="row"  id="footer">
        <div className="col-md-4">
          <h2>About company</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna.
          </p>
        </div>

        <div className="col-md-4" id="footer-news">
            <h2>&nbsp;Latest News</h2>
            <ul>
                <li><a href="">Sheikh Muhammad Goes to</a></li>
                <li><a href="">Prince Fazza's hobbies</a></li>
                <li><a href="">SRK's Pathan Collection</a></li>
                <li><a href="">UBL Bank Notice</a></li>
                <li><a href="">Mustafa Butt's New Project</a></li>
            </ul>
        </div>

        <div className="col-md-4">
            <h2>Company Address</h2>
            <h5>Al Naboodah, Construction Group
                LLC. United Arab Emirates.
                Contact : +971507869189
                Email : mzohaib27@gmail.com
            </h5>
        </div>
     
     
     
     
     
      </div>
    </div>

  <div className="container-fluid" id="copy">
    <div className="row">
        <div className="col-md-12">
            <h6>2023-2033,Al Naboodah Construction Group LLC,All rights reserved.</h6>
        </div>
    </div>
   

  </div>










    </div>
  );
};

export default Footer;
