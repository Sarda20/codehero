import React from 'react';
import { Carousel, NavLink } from 'react-bootstrap';
import pic from '../../images/head.jpg';
import pic2 from '../../images/head2.jpg';
import pic3 from '../../images/head3.jpg';
import './Home.css';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';

const Home = () => {

    //Usecourse function called from hooks

    const [courses] = useCourses();
    const results = courses.filter(course => course.id < 114);
    return (
        //Main body part
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100 img-holder"
                        src={pic}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='img-text'>THE BEST PLACE TO LEARN TO CODE</h3>
                        <p>EAT | SLEEP | CODE | REPEAT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-holder"
                        src={pic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='img-text'>THE BEST PLACE TO LEARN TO CODE</h3>
                        <p>EAT | SLEEP | CODE | REPEAT</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-holder"
                        src={pic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='img-text'>THE BEST PLACE TO LEARN TO CODE</h3>
                        <p>EAT | SLEEP | CODE | REPEAT</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='welcome-text'>
                <h1>Welcome To <span className='codehero-text'>Codehero</span></h1>
                <p>Welcome to Codehero collection of world-class learning opportunities. We try the best to make learning a wonderful experience for our students.</p>
            </div>

            <div className='course-container'>
                <h1><span className='codehero-text'>Popular</span> Courses</h1>
                <p>Listed Below Our Most Popular Courses
                </p>

                <div className='d-flex justify-content-evenly' style={{ height: '36rem' }}>
                    {
                        results.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
                <div className='d-flex justify-content-center mb-5'>
                    <button className='view-btn'>
                        <Link className="text" to="/service">View More Courses</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;