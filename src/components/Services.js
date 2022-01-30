import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import { ReactComponent as Destination } from "../assets/svg/destination.svg";
import { ReactComponent as Payment } from "../assets/svg/payment.svg";
import { ReactComponent as Car } from "../assets/svg/car.svg";



class Services extends Component {
  render() {
    return (
      
          <Container>
            <p>Easy and Fast</p>
            <h3><b>Book Your Next Trip</b><br></br><b>In 3 Easy Steps</b></h3> 
             
            <Destination/>&emsp;&emsp;
            <b>Choose Destination</b>
            <p>Lorem ipsum dolor sit amet. Rem quis dolores aut ratione <br></br>alias et repudiandae dolores est unde corporis</p>
            <Payment/>&emsp;&emsp;
            <b>Make Payment</b>
            <p>Lorem ipsum dolor sit amet. Rem quis dolores aut ratione <br></br>alias et repudiandae dolores est unde corporis</p>
            <Car/>&emsp;&emsp;
            <b>Reach Airport on Selected Date</b>
            <p>Lorem ipsum dolor sit amet. Rem quis dolores aut ratione <br></br>alias et repudiandae dolores est unde corporis</p>
          </Container>
       
    );
  }
}

export default Services;
