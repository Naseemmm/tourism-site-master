import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import imgCard1 from "../img/img-card (1).jpg";


import imgCard5 from "../img/img-card (5).jpg";

import imgCard8 from "../img/img-card (8).jpg";


const tours = [
  {
    id: 1,
    category: ["resort", "honeymoon"],
    img: imgCard1,
    alt: "blah blah",
    title: "Rome,",
    Price:"$5.2k",
    trip:"10 Days Trip",
    subtitle: "Italy"
    
  
  },

  {
    id: 5,
    category: ["beach", "mountain"],
    img: imgCard5,
    alt: "blah blah",
    title: "London,",
    subtitle: " UK",
    Price: "$4.2k",
    trip:"12 Days Trip"
  },
  
    
  
  
  
  {
    id: 8,
    category: ["honeymoon", "beach", "resort"],
    img: imgCard8,
    alt: "blah blah",
    title: "Full Europe",
    Price: "$15k",
    trip:"28 Days Trip"
  },
  
];

const itemCategories = [
  "all",
  "beach",
  "mountain",
  "honeymoon"
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: tours });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
          <p>Top Selling</p>
            <h1><b>Top Destinations</b></h1>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(tourcard => {
                    return tourcard.category.map(catItem => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                    });
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
