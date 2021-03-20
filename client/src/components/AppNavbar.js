import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink
} from 'reactstrap';
import Logout from './auth/Logout';
import  RegisterModal  from './auth/RegisterModal';

class AppNavbar extends Component {
  state = {
    isOpen : false
  }

  toggle = () => {
    this.setState({
        isOpen : !this.state.isOpen
      });
  }
  
  render() {
    return(
      <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Image List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <RegisterModal></RegisterModal>
                </NavItem>
              <NavItem><Logout/></NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>

    
    )}
}

export default AppNavbar;