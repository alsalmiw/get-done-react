import React from 'react'
import {Modal, Button} from "react-bootstrap"
import ModalContext from '../Context/ModalContext'

export default function ModalComponent(props) {
  let {show, setShow} = useContext(ModalContext)
  const handleClose = () => setShow(false);
{isEdit}
  return (
    
    <Modal
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
  )
}
