import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as RSNavbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FaGithub } from 'react-icons/fa';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <RSNavbar color="light" light expand="md">
      <NavbarBrand tag={Link} to="/">Movie Database</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/favorites">Favorites</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/mamiyaso" target="_blank" rel="noopener noreferrer">
            <FaGithub />  My GitHub Profile
          </NavLink>
        </NavItem>
      </Nav>
      <SearchBar />
    </RSNavbar>
  );
};

export default Navbar;