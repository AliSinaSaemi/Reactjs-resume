import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link, withRouter } from 'react-router-dom';


const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Container>
    <Link className="navbar-brand" exact to="/">Alisina</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
	  	<NavLink className="nav-link" exact to='/' activeClassName="active">Home</NavLink>
        <NavLink className="nav-link" to="/skills">Skills</NavLink>
        <NavLink className="nav-link" to="/bio">Bio</NavLink>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default withRouter(Navigation);