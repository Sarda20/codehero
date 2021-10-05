import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        // Form for contact
        <div>
            <Form className='m-5'>
                <h4>Please fill up the form so that we can contact you for more information</h4>
                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" placeholder="Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {/* Codehero contact Information */}
            <div className='m-5'>
                <h4>Contact Us</h4>
                <p>Address : Houston Road, NewYork</p>
                <p>Email : abcdef@gmail.com</p>
                <p>Contact Number : 00182934932</p>
            </div>
        </div>
    );
};

export default Contact;