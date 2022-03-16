import React, {useContext, useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UserContext from "../Context/UserContext";
import ModalContext from '../Context/ModalContext';
import ModalComponent from './ModalComponent';

export default function ProjectTile() {

  let {isAdmin} = useContext(UserContext);
  let {show, setShow, isEdit, setIsEdit} = useContext(ModalContext);

  // const [isEdit, setIsEdit]=useState(false);

  const handleClose = () => setShow(false);
  const handleViewShow = () =>
  {
    setShow(true);
    setIsEdit(false);
  }
  
  
  const handleEditClose = () => setShow(false);
  const handleEditShow = () => 
  {
    setShow(true);
    setIsEdit(true);
  }

  return (
    <div className='project-container'>
        <div className='project-title center'><h4>TaskName: Airport Logistics</h4> </div>
        <div className='project-description'> 
        <p><strong>Description: </strong>remove all dead bodies from the airport and transport to morgue </p>
        </div>
        <p><strong>Priority:</strong> Top</p>
        <p><strong>Progress: </strong> 60%</p>
        <div className='project-buttons'>
        <Button className='m-1' variant="primary" onClick={handleViewShow}>
        View
      </Button>
      {isAdmin?<><Button className='m-1' variant="warning" onClick={handleEditShow}>Edit</Button>
      <Button className='m-1' variant="success" >Archive</Button>
      <Button className='m-1' variant="danger" >Delete</Button></>
      : null}
        </div>
        <div className='tasks'>
        <div className='task-container'>
        <Row>
          <Col>Task Title</Col>
          <Col>Assigned To: </Col>
          <Col>Due Date: </Col>
          <Col><Button className='m-1' variant="primary" onClick={handleViewShow}>
        View
      </Button>
         
         {
           isAdmin?<Button  variant="warning" onClick={handleEditShow}>Edit</Button>: null
         }
         </Col>
        </Row>
        </div>
        </div>
        <ModalComponent />
      </div>


  )
}
