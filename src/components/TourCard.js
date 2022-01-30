import React from "react";
import MainCarousel from "./Carousel";
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as Share } from "../assets/svg/share.svg";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  NavbarToggler
} from "reactstrap";
import "../App.css";

const TourCard = ({ tourcard }) => {
  const { img, alt, title, subtitle,Price, trip,} = tourcard;
  return (
    <Card>
      <CardImg top width="100%" src={img} alt={alt} />
      <CardBody>
      <CardTitle>{title}  {subtitle}<span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span>{Price} </CardTitle>
                    
      <section className="svg-group ">
              <Row>
              
                    
      
                    
              
                
                <Col lg="3" md="6" sm="6">
                  <div >
                   <nobr><span><Share width="15" height="15" strokeWidth="2" />&emsp;{trip}</span> </nobr>
                  
                  </div>
                
                </Col>
                
                </Row>
                </section>
                
      </CardBody>
    </Card>
  );
};
export default TourCard;
