// @flow
import React, { Component } from 'react';
import './MainNav.css';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import logo from './logo.png';

export default class MainNav extends Component {
    render() {
        return (
            <Navbar className="main-nav" fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={logo} alt="Sansofi Hostel Logo" />
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav>
                    <LinkContainer to="/home">
                        <NavItem>Home</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <NavItem>About</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/prices-rooms">
                        <NavItem>Prices & Rooms</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/booking">
                        <NavItem>Booking</NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <NavDropdown id="languageNav" title="Languages">
                        <NavItem>English</NavItem>
                        <NavItem>Spanish</NavItem>
                        <NavItem>German</NavItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}