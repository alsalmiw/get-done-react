import React, {useContext, useState} from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import UserContext from "../Context/UserContext";
import ModalContext from '../Context/ModalContext';
import { useNavigate } from "react-router-dom";
import {login, GetLoggedInUserData, getProjectItemsByUserId, getAllProjects, GetAllUsersInfo} from "../Services/DataServices";
import "./LoginStyle.css";
import dummy from "../LoginPhoto/dummy.jpg";


export default function LoginPage() {
    let navigate = useNavigate();
    let {username, setUsername, userId, setUserId, isAdmin, setIsAdmin, password, setPassword, isOwner, setIsOwner, token, setToken, allUsers, setAllUsers} = useContext(UserContext);
    let {setAllProjects, setAllProjectsByID} = useContext(ModalContext)

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
            localStorage.setItem("Token" , loginToken.token)
            console.log("goes in")
          let userInfo = await GetLoggedInUserData(username);
            console.log(userInfo.id)
              
            if(!userInfo.isRevoked || !userInfo.isDeleted)
                    {
                        //console.log(userData.isAdmin)
                    setUserId(userInfo.id)
                    setUsername(userInfo.username)
                    setIsAdmin(userInfo.isAdmin)
                    // setIsAdmin(true)
                    setIsOwner(userInfo.isOwner)
                    let projects = await getProjectItemsByUserId(userInfo.id)
                        if(!projects==[])
                        {
                        setAllProjectsByID(projects)
                        }
                
                        let allProjects = await getAllProjects()
                        setAllProjects(allProjects)
                      

                    if(isAdmin)
                    {
                        let personnelData = await GetAllUsersInfo()
                        if(!personnelData==[])
                        {
                            setAllUsers(personnelData)
                        }
                    }
                   

                    }
                    else if (userInfo.isRevoked || userInfo.isDeleted){
                        setToken(null)
                    }

                     navigate('/');
                       
                      
                       

 
        //   }, 1000);
       
         
        }
      }

    return ( //create the create account page and the login page!
        //background purple
        <Container fluid className='HeroImage1'>
            <Row className='mt-5 LoginBoxBack d-flex justify-content-center align-items-center'>
                <Col md={4} className='LoginBox '>
                        <Row>
                        <Col className="mt-5 mb-3 d-flex justify-content-center">
                            <h1>Login</h1>
                        </Col>
                        <hr />
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col md={8} className="mt-2">
                            <Form>
                                <Form.Group className="mb-4" controlId="formUsername">
                                    <Form.Control type="text" placeholder="Username" onChange={({target})=>setUsername(target.value)}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" onChange={({target:{value}})=>setPassword(value)} />
                                </Form.Group>
                                <div className="d-flex justify-content-center">
                                    <Button className="mt-2 LoginBtn SameWidth" variant="primary" onClick={handleSubmit}>
                                        Login
                                    </Button>
                                </div>
                                <div className="mt-3 d-flex justify-content-center">
                                {/* <a onClick={()=>navigate('/create-account')}> <h6>Create Account</h6> </a> */}
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
            {/* Center the placeholder text in the forms! */}
        </Container>
    )
}
