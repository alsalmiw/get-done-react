import React, {useState} from 'react'
import {Container, Modal, Button} from "react-bootstrap"

export default function Dashboard() {

  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit]=useState(false);

  const handleViewClose = () => setShow(false);
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
    <>
    <Container fluid>

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
      <Button variant="primary" onClick={handleEditShow}>
        Edit
      </Button>
        </div>

      </div>

    </Container>
    <>
     

      <Modal
        show={show}
        onHide={handleViewClose}
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
          <Button variant="secondary" onClick={handleViewClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

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
    </>
  )
}
