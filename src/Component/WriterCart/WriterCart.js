import React from 'react';
import ItemCart from '../ItemCart/ItemCart';
import './WriterCart.css'
const WriterCart = (props) => {
    const items = props.writerCart;
    let total = 0;
    for (const singleCart of items) {
        total = total + (singleCart.earning);
    }                
    return (
        <div>
            <h3>Added Person:{props.writerCart.length}</h3>
            <h2>Earning Total:${total}</h2>
            {
                items.map(item =><ItemCart key={item.id} item={item}></ItemCart>)
            }
        </div>
    );
};

export default WriterCart;