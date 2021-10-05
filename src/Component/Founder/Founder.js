import React from 'react';
import './Founder.css';

const Founder = (props) => {
    const { name, about, img } = props.founder;
    return (

        //For the about part

        <div className='founder'>
            <div className='founder-img'>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{about}</p>
            </div>
        </div>
    );
};

export default Founder;