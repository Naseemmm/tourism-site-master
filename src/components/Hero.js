import React from "react";
import { Button } from "reactstrap";
import { Col } from "reactstrap";
import { ReactComponent as Monitor } from "../assets/svg/monitor.svg";
import "../App.css";
const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          
          <span id="destinations"><p>BEST DESTINATIONS AROUND THE WORLD</p></span>
          <h3 id="text"> <b><span>Travel, enjoy <br></br></span></b> <b><span>and  live  a  new<br></br></span></b><b><span>and  full  life<br></br></span></b></h3>
          <p className="footer li">Built Wicket longer admire do barton vanity itself do in it.<br></br> Preferred to sportsmen it engrossed listening. Park gate<br></br>sell they west hard for the.</p>
          <Button outline color="warning" href="#about">
            Explore More
          </Button>
                
                &emsp;&emsp;<a id="play" href="#">
                  < Monitor />
                    <nobr><b>Play Demo</b></nobr></a>
                    </div>
                    
                  
                
        
      </section>
    </main>
  </div>
);

export default Hero;
