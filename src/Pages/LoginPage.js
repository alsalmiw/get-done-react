import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export default function CreateLogin() {
    return ( //create the create account page and the login page!
        //background purple
        <Container fluid>
            <Row>
                <Col className="mt-3 mb-3 d-flex justify-content-center">
                    <h1>Login</h1>
                </Col>
                <hr />
            </Row>
            <Row className="mt-4 d-flex justify-content-center">
                <Col md={8} className="">
                    <Form>
                        <Form.Group className="mb-4" controlId="formUsername">
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button className="mt-4" variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                        <div className="mt-3 d-flex justify-content-center">
                            <p>Create Account?</p>
                        </div>
                    </Form>
                </Col>
            </Row>
            {/* Center the placeholder text in the forms! */}
        </Container>
    )
}
