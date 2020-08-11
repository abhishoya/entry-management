import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavBar = (props) => {
  return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Entry Management</NavbarBrand>
          <Nav className="mr-1" navbar>
            <NavItem>
              <NavLink href="/checkin">CheckIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/checkout">Checkout</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
  );
}

export default NavBar;