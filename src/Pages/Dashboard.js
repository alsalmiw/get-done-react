import React, {useState, useContext, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import {Container, Modal, Button, Row, Col} from "react-bootstrap";
import UserContext from "../Context/UserContext";
import ProjectTile from '../Components/ProjectTile';
import ModalContext from '../Context/ModalContext';
import useModal from '../Hooks/use-modal';
import ModalComponent from '../Components/ModalComponent';

export default function Dashboard() {

  let {isAdmin} = useContext(UserContext);
  let navigate = useNavigate();
  let {token} = useContext(UserContext);
  useEffect(()=> {

     if (token == null)
  {
    navigate('/login');
  }
  
  },[])

  return (
    <>
   

    <Container fluid className='p-0 dashboard-container'>
    <div className='to-do'>
    <Row className='dashboard-status text-center'><h4>ToDo</h4></Row>
    <Row>
      <Col>
      <ProjectTile />
      </Col>
    </Row>
    </div>
    <div className='in-progress '>
    <Row className='dashboard-status text-center'><h4>InProgress</h4></Row>
    <Row>
      <Col>
      <ProjectTile />
      </Col>
    </Row>
    </div>

    <div className='done'>
    <Row className='dashboard-status text-center'><h4>Completed</h4></Row>
    <Row>
      <Col>
      <ProjectTile />
      </Col>
    </Row>

    </div>

    </Container>
    
    </>
  
  )
}
