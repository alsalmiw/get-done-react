import React, {useContext, useState} from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import {login, GetLoggedInUserData} from "../Services/DataServices";


export default function LoginPage() {
    let navigate = useNavigate();
    let {username, setUsername, password, setPassword, token, setToken, setUserId} = useContext(UserContext);

    const handleSubmit =async () => {
        console.log("hello")
        let userData = {
          username,
          password
        }
        let loginToken = await login (userData)
        console.log(loginToken)
        if (loginToken.token !=null)
        {
          setToken(loginToken.token)
          setUsername(username);
          let userData = await GetLoggedInUserData(username);
          
          navigate('/');
        }
      }

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
                            <Form.Control type="text" placeholder="Username" onChange={({target})=>setUsername(target.value)}/>
                        </Form.Group>
                        <Form.Group className="" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" onChange={({target:{value}})=>setPassword(value)} />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <Button className="mt-4" variant="primary" onClick={handleSubmit}>
                                Login
                            </Button>
                        </div>
                        <div className="mt-3 d-flex justify-content-center">
                        <a onClick={()=>navigate('/create-account')}> <h6>Create Account</h6> </a>
                        </div>
                    </Form>
                </Col>
            </Row>
            {/* Center the placeholder text in the forms! */}
        </Container>
    )
}
