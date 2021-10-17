import React from 'react';
import { Card} from 'react-bootstrap';
import './WriterCart.css'
const WriterCart = (props) => {
    const items = props.writerCart;
    let total = 0;
    for (const singleCart of items) {
        total = total + (singleCart.earning);
    }
    const division = items.map(item =>
                <Card.Body className="small-card" key={item.id}>
                    <Card.Img src={item.image} />
                    <Card.Title>{item.name.slice(0, 10)}</Card.Title>
                </Card.Body>
            )
    return (
        <div>
            <h3>Added Person:{props.writerCart.length}</h3>
            <h2>Earning Total:${total}</h2>
            <div>{division}</div>
        </div>
    );
};

export default WriterCart;