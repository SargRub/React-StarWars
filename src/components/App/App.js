import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "./App.css"
import { Container, Navbar, Nav, Card, Button, Row } from 'react-bootstrap';
import Header from "../Header/Header";
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import SelectedItemDetail from '../SelectedItemDetail/SelectedItemDetail';



export default class App extends Component {
    render() {
        return (
            <Container>
                <Header />
                <RandomPlanet />
                <Row className = "row_2">
                    <ItemList />
                    <SelectedItemDetail />
                </Row>
                
            </Container>
        )
    }
}