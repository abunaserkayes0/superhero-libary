import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import './Writer.css'
const Writer = (props) => {
    const {image,name,email,gender,earning} = props.writer;
    const shoppingBag = <FontAwesomeIcon icon={faShoppingBag} />
    return (
        <div>
            <CardGroup>
                <Card id="card-container">
                        <div className="cardImage-container" >
                            <Card.Img src={image} />
                        </div>
                        <Card.Body className="card-body">
                            <Card.Title className="title">Name:{name}</Card.Title>
                            <div className="social-icon">
                                <a href="https://linkedin.com/"> <i className="fab fa-linkedin fa-2x"></i></a>
                                <a href="https://facebook.com/"><i className="fab fa-facebook-square fa-2x"></i></a>
                                <a href="https://twitter.com/"><i className="fab fa-twitter-square fa-2x"></i></a>
                            </div>
                            <Card.Text>Email:{email}</Card.Text>
                            <Card.Text>Gender:{gender}</Card.Text>
                            <Card.Text>Earning:${earning}</Card.Text>
                            <Button variant="warning" onClick={()=>props.handelButton(props.writer)}>{shoppingBag} Add To Money</Button>
                        </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Writer;