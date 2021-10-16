import React, { useEffect, useState } from 'react';
import Writer from '../Writer/Writer';
import './Writers.css'
const Writers = () => {
    const [writers, setWriters] = useState([]);
    useEffect(() => {
        fetch('./writers.json')
            .then(response => response.json())
            .then(data=>setWriters(data))
    },[])
    return (
        <div className="container">
            <div className="writers-container">
                {
                    writers.map(writer=><Writer key={writer.id} writer={writer}></Writer>)
                }
            </div>
            <div className="writerCart-container">
                <h1>This Cart</h1>
            </div>
        </div>
    );
};

export default Writers;