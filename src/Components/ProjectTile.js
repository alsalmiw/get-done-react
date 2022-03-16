import React, {useContext, useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UserContext from "../Context/UserContext";
import ModalContext from '../Context/ModalContext';
import ModalComponent from './ModalComponent';

export default function ProjectTile() {

  let {isAdmin} = useContext(UserContext);
  let {show, setShow} = useContext(ModalContext);

  const [isEdit, setIsEdit]=useState(false);

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
    <div className='task-container'>
        <div className='task-title center'><h4>TaskName</h4> </div>
        <div className='task-description'> 
        <p><strong>Description:</strong> </p>
        </div>

        <div className='task-info'></div>
        <p><strong>Priority:</strong> </p>
        <p><strong>on Track?</strong> </p>
        <div>
        <Button variant="primary" onClick={handleViewShow}>
        View
      </Button>
      {isAdmin?<Button variant="primary" onClick={handleEditShow}>Edit</Button> : null}
        </div>
        <ModalComponent />
      </div>


  )
}
