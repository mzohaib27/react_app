import React from "react";
import img from "../images/wallpapersden.com_macbook-camera-coffee_1600x900(2).jpg";
import img2 from "../images/wallpapersden.com_macbook-apple-cup_1600x900(3).jpg";
import img3 from "../images/wallpapersden.com_laptop-macbook-iphone_1600x900.jpg";
import img4 from '../images/pexels-cottonbro-studio-6153738.jpg';
import img5 from '../images/pexels-洋榤-郭-2399840.jpg';


const Contact = () => {
  return (
    <div>
      {/* Navbar */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      
        <div class="container" id="cont">
          
          <a class="navbar-brand" href="#">
            Web Develpment
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/topics"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Topics
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Web Develpment
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Support
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Write for us
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          
        </div>
      </nav>

      {/* CARAOUSEL */}

      


      {/* Bannner */}
      <div class="banner ">
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div class="banner-title ml-md-5 shadow">
          <h1 class="title pl-md-5 text-right">Muhammad Zohaib Hasan</h1>
          <p class="lead text-right" id="prgrph">I am a Web Developer, from Pakistan.</p>






         </div>
         </div>
       </div>
   </div>
   </div>

  
     
     
     



























     
      </div>
    
  );
};

export default Contact;
