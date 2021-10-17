import React from 'react';
import { Card } from 'react-bootstrap';
import './ItemCart.css'

const ItemCart = (props) => {
    const { image, name } = props.item;
    return (
        <div>
             <Card.Body className="small-card">
                    <Card.Img src={image} />
                    <Card.Title>{name.slice(0, 10)}</Card.Title>
            </Card.Body> 
        </div>
    );
};

export default ItemCart;