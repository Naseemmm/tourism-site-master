import React, { Component } from "react";
import { Container, Row, Col, NavbarToggler } from "reactstrap";
import "../App.css";
import MainCarousel from "./Carousel";
import { ReactComponent as Shield } from "../assets/svg/shield.svg";
import { ReactComponent as Compass } from "../assets/svg/compass.svg";
import { ReactComponent as Heart } from "../assets/svg/heart.svg";
import { ReactComponent as Weather } from "../assets/svg/weather.svg";



class About extends Component {
  render() {
    return (
      <div id='about'>
        <MainCarousel />

        <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
            <p>CATEGORY</p>
              <h1><b>We Offer Best Services</b></h1>
              
            </header>
            <section className="svg-group ">
              <Row>
              
                    
      
                    
              
                
                <Col lg="3" md="6" sm="6">
                <div className="svg-card">&emsp;&emsp;
                  <Weather  />
                    <nobr><b>Calculated Weather</b></nobr>
                    <p> Built Wicket longer admire do barton vanity itself do in it.</p></div>
                    
                  
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">&emsp;&emsp;
                    <Shield  />
                    <nobr><b>Best Flights</b></nobr>
                    <p>Engrossed listening Park gate sell they west hard for the.</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">&emsp;&emsp;
                    <Heart  />
                    <nobr><b>Local Events</b></nobr>
                    <p>Braton vanity itself do in it.Preferd to engrossed listening</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">&emsp;&emsp;
                    <Compass />
                    <nobr><b>Customization</b></nobr>
                    <p>We deliver outsourced aviation services for military customers</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
