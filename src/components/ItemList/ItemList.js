import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "../App/App.css";
import { Container, Navbar, Nav, Card, Button, Row } from 'react-bootstrap';

export default class ItemList extends Component
{
    render()
    {
        return(
            <Card className="mt-4 ml-4 cont">
                        <Nav className = "flex-column">
                            <Nav.Link className = "nav_link"href="/home">Mercury</Nav.Link>
                            <Nav.Link className = "nav_link">Venus</Nav.Link>
                            <Nav.Link className = "nav_link">Earth</Nav.Link>
                            <Nav.Link className = "nav_link">Mars</Nav.Link>
                            <Nav.Link className = "nav_link">Jupiter</Nav.Link>
                            <Nav.Link className = "nav_link">Saturn</Nav.Link>
                            <Nav.Link className = "nav_link">Uranaus</Nav.Link>
                            <Nav.Link className = "nav_link">Neptune</Nav.Link>
                        </Nav>
                    </Card>
        )
    }
}