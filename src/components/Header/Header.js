import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "../App/App.css";
import { Container, Navbar, Nav, Card, Button, Row } from 'react-bootstrap';

export default class Header extends Component
{
    render()
    {
        return (
            <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Star Wars</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#planets">Planets</Nav.Link>
                            <Nav.Link href="#icles">Vehicles</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}