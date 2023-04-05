import React from "react";
import img from "../images/macbook.jpg";

const RecentNews = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 shadow-lg" id="news" >
          <h2 className="news-head">Recent News</h2>
        </div>

        <div className="col-md-3">
          <div className="card mx-md-5 my-md-5">
            <img src={img} className="img-fluid" alt="" />
            <div className="card-title">
              <h2 className="news-heading">Imran Khan</h2>
            </div>
            <div className="card-body">
              <p className="cardprg">
                
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card mx-md-5 my-md-5">
            <img src={img} className="img-fluid" alt="" />
            <div className="card-title">
              <h2 className="news-heading">Nawaz Sharif</h2>
            </div>
            <div className="card-body">
              
              <p className="cardprg">
            
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna.
              </p>
              <button className="btn btn-primary">Read More</button>
              
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card mx-md-5 my-md-5">
            <img src={img} className="img-fluid" alt="" />
            <div className="card-title">
              <h2 className="news-heading">Shahbaz Sharif</h2>
            </div>
            <div className="card-body">
             <p className="cardprg">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>


        <div className="col-md-3">
          <div className="card mx-md-5 my-md-5">
            <img src={img} className="img-fluid" alt="" />
            <div className="card-title">
              <h2 className="news-heading">Bilo Rani</h2>
            </div>
            <div className="card-body">
             <p className="cardprg">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>

       











      </div>
    </div>
  );
};

export default RecentNews;
