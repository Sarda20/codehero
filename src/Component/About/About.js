import React from 'react';
import useFounder from '../../hooks/useFounder';
import Founder from '../Founder/Founder';

const About = () => {
    const [founders] = useFounder();
    console.log(founders);
    return (
        <div style={{ margin: '40px' }}>
            {
                founders.map(founder => <Founder founder={founder}></Founder>)
            }
        </div>
    );
};

export default About;