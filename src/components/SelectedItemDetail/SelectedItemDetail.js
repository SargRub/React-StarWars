import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import "../App/App.css";
import { Container, Navbar, Nav, Card, Button, Row } from 'react-bootstrap';


export default class SelectedItemDetail extends Component
{
    render()
    {
        return (
            <Card style={{ width: '45rem' }} className="ml-5 sec_cont">
                    <Row>
                        <Card.Img style={{ width: '20rem' }} className = "ml-3" src="https://upload.wikimedia.org/wikipedia/commons/0/06/Neptune.jpg" />
                        <Card.Body>
                            <Card.Title>Neptune</Card.Title>
                            <Card.Text>
                            Neptune is the eighth and farthest known planet from the Sun in the Solar System. 
                            <br />
                            In the Solar System, it is the fourth-largest planet by diameter,
                            <br /> 
                            the third-most-massive planet, and the densest giant planet. Neptune is 17 times 
                            <br /> 
                            the mass of Earth, slightly more massive than its near-twin Uranus.
                            <br /> 
                            Neptune is denser and physically smaller than Uranus because its greater mass
                            <br /> 
                            causes more gravitational compression of its atmosphere. Neptune orbits the Sun
                            <br /> 
                            once every 164.8 years at an average distance of 30.1 au  (4.5 billion km;
                            <br /> 
                            2.8 billion mi). It is named after the Roman god of the sea and
                            <br/>
                            has the astronomical symbol ♆, a stylised version of the god Neptune's trident.
                            <br/>
                            Neptune is not visible to the unaided eye and is the only planet in the Solar 
                            <br/>
                            System found by mathematical prediction rather than by empirical observation. 
                            <br/>
                            Unexpected changes in the orbit of Uranus led Alexis Bouvard to deduce that its 
                            <br/>
                            orbit was subject to gravitational perturbation by an unknown planet. 
                            <br/>
                            The position of Neptune was subsequently calculated from Bouvard's observations,
                            <br/>
                            independently, by John Couch Adams and Urbain Le Verrier after his death.
                            
                            </Card.Text>
                        </Card.Body>
                    </Row>
                </Card>
        )
    }
}