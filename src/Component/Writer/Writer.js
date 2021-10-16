import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Writer.css'
const Writer = (props) => {
    console.log(props.writer)
    const shoppingBag = <FontAwesomeIcon icon={faShoppingBag} />
    return (
        <div>
            <CardGroup>
                <Card id="card-container">
                        <div className="cardImage-container" >
                            <Card.Img src={props.writer.image} />
                        </div>
                        <Card.Body className="card-body">
                            <Card.Title className="title">Name:{props.writer.name}</Card.Title>
                            <div className="social-icon">
                                <a href="https://linkedin.com/"> <i class="fab fa-linkedin fa-2x"></i></a>
                                <a href="https://facebook.com/"><i class="fab fa-facebook-square fa-2x"></i></a>
                                <a href="https://twitter.com/"><i class="fab fa-twitter-square fa-2x"></i></a>
                            </div>
                            <Card.Text>Email:{props.writer.email}</Card.Text>
                            <Card.Text>Gender:{props.writer.gender}</Card.Text>
                            <Card.Text>Earning:{props.writer.earning}</Card.Text>
                            <Button variant="warning">{shoppingBag} Add To Money</Button>
                        </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Writer;