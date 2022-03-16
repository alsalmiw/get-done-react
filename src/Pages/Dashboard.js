import React, {useState, useContext} from 'react'
import {Container, Modal, Button, Row, Col} from "react-bootstrap";
import UserContext from "../Context/UserContext";
import ProjectTile from '../Components/ProjectTile';
import ModalContext from '../Context/ModalContext';
import useModal from '../Hooks/use-modal';
import ModalComponent from '../Components/ModalComponent';

export default function Dashboard() {

  let {isAdmin} = useContext(UserContext);
  //let {show, setShow} = useContext(ModalContext)

  //const [show, setShow] = useState(false);
  //const [isEdit, setIsEdit]=useState(false);

  // const handleClose = () => setShow(false);
  // const handleViewShow = () =>
  // {
  //   setShow(true);
  //   setIsEdit(false);
  // }
  
  
  // const handleEditClose = () => setShow(false);
  // const handleEditShow = () => 
  // {
  //   setShow(true);
  //   setIsEdit(true);
  // }

  return (
    <>
    {/* <Container fluid>
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
      </div>
    </Container> */}
<ModalContext.Provider value={useModal()}>
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
    </div>

    <div className='done'>
    <Row className='dashboard-status text-center'><h4>Completed</h4></Row>

    </div>

    </Container>



    <>
     

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{isEdit?'Edit Project':'View Project'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          {
            isEdit?

            //yes

            "yes"

            :

            //no
            "no"
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
       */}
    {/* EDIT */}

      {/* <Modal
        show={show}
        onHide={handleEditClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Model</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </> */}
    </>
    </ModalContext.Provider>
    </>
  
  )
}
