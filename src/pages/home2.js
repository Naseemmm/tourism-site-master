import React, { Component } from "react";
import "../App.css";

import Package from "../components/Package";
import Services from "../components/Services";

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <Hero />
        <About />
        <Package />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
