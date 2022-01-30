import React from "react";
import { ReactComponent as Playstore } from "../assets/svg/playstore.svg";
import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";
import { ReactComponent as Applestore } from "../assets/svg/apple.svg";

const Footer = () => {
 
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Jadoo</h2>
                  <ul>
                    <li>
                      <p>Book your trip in minute,get full control for much longer.</p>
                    </li>
                   
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Mobile</a>
                    </li>
                   
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>More info</h2>
                  <ul>
                    <li>
                      <a href="#">Airelinesfees</a>
                    </li>
                    <li>
                      <a href="#">Airline</a>
                    </li>
                    <li>
                      <a href="#">Low fare tips</a>
                    </li>
                    
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <Facebook/>
                    </div>
                    <div className="col-3 mx-auto">
                     <Instagram/>
                    </div>
                   
                    
                    
                    <div className="row">
                    <b>Discover Our App</b><br></br>
                    <div className="col-3 mx-auto">
                      
                    </div>
                    <div className="col-3 mx-auto">
                     <Playstore/>
                    </div>
                    <div className="col-3 mx-auto">
                     <Applestore/>
                    </div>
                    
                    </div>
                    
                    
                    
                    
                    
                  </div>
                </div>

                
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  All rights reserved@jadoo.co
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;