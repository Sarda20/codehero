import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Service.css'

const Service = () => {
    const [courses] = useCourses();
    return (

        //All the courses

        <div>
            <h1 className='service-text'>Choose the Courses from here</h1>
            <div className='course-box'>
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Service;