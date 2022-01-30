import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import "../App.css";

class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="Black"
          dark
          expand="md"
          fixed={`top`}
          className="nav"

        >
          
          <Container>
            <NavbarBrand  href="#"><b>Jadoo</b></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <NavLink href="#packageBody">Destinations</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#packageBody">Hotels</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#servicesBody">Flights</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contactBody">Bookings</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contactBody">Login</NavLink>
                </NavItem>
                <Button >Sign up</Button>{" "}
                </Nav>
                <Navbar>
                  <select name="EN" id="EN">
                  <option value="EN">EN</option>
                  </select>  
                </Navbar>
            </Collapse>
          </Container>
        </Navbar>
      </div>
     
    );
  }
}

export default NavbarMain;
