import React, { useEffect, useState } from 'react';
import Writer from '../Writer/Writer';
import WriterCart from '../WriterCart/WriterCart';
import './Writers.css'
const Writers = () => {
    const [writers, setWriters] = useState([]);
    const[writerCart,setWriterCart]=useState([]);
    useEffect(() => {
        fetch('./writers.json')
            .then(response => response.json())
            .then(data=>setWriters(data))
    }, [])
    const handelButton = (writer) => {
        const newWriterCart = [...writerCart, writer];
        setWriterCart(newWriterCart);
    }
    return (
        <div className="container-item">
            <div className="writers-container">
                {
                    writers.map(writer=><Writer key={writer.id} writer={writer} handelButton={handelButton}></Writer>)
                }
            </div>
            <div className="writerCart-container">
                <WriterCart writerCart={writerCart}></WriterCart>
            </div>
        </div>
    );
};

export default Writers;