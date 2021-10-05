import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css'

const Course = (props) => {
    const { name, img, tutor, price, rating, description, enrolled } = props.course;
    return (

        //Card to show each of the courses

        <Card border="dark" style={{ width: '16rem', margin: '30px' }} className='course-card'>
            <Card.Img style={{ height: '10rem' }} variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Card.Text style={{ fontSize: '11px', textAlign: 'start' }}>
                        {description}
                    </Card.Text>
                </ListGroupItem>
                <ListGroupItem><span style={{ fontWeight: '500' }}>Instructor:</span> {tutor}</ListGroupItem>
                <ListGroupItem className='d-flex justify-content-between'>
                    <div>$ {price}</div>
                    <div><span style={{ fontStyle: 'italic' }}>Enrolled - </span> {enrolled}</div>
                </ListGroupItem>
                <ListGroupItem><Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                </ListGroupItem>
                <ListGroupItem>
                    <button className='btn'>Enroll Now</button>
                </ListGroupItem>
            </ListGroup>
        </Card>
    );
};

export default Course;