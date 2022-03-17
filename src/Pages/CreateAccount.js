import React, {useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UserContext from "../Context/UserContext";
import { createAccount } from '../Services/DataServices';

export default function CreateAccount() {
  let navigate = useNavigate();
  let {username, setUsername, password, setPassword, setIsAdmin, setToken} = useContext(UserContext);
  
  const handleSubmit = async() => {

    let userData = {
      Id : 0,
      username,
      password
    }
    let result = await createAccount(userData);
    console.log(result)
    if(result == true)
    {
       navigate('/');
    setIsAdmin(false)
    setToken("notnull")
    //How to get a token here? 
    }
   
    
  }

  return (
    //create the create account page and the login page!
    //background purple
    <Container fluid>
      <Row>
        <Col className="mt-3 mb-3 d-flex justify-content-center">
          <h1>Create Account</h1>
        </Col>
        <hr />
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={10} className="">
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Control type="text" placeholder="Username" onChange={({target})=>setUsername(target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={({target:{value}})=>setPassword(value)}/>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" onClick={handleSubmit}>
                Create
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      {/* Center the placeholder text in the forms! */}
    </Container>
  )
}
