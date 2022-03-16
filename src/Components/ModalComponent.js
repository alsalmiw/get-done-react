import React, { useContext, useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import ModalContext from "../Context/ModalContext";

export default function ModalComponent(props) {
  let { show, setShow, isEdit, setIsEdit } = useContext(ModalContext);

  const [priority, setPriority] = useState("ToDo");
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');
  const [taskDueDate, setTaskDueDate] = useState('')
  const [taskStatus, setTaskStatus] = useState('');
  const [isTaskDeleted, setIsTaskDeleted] = useState(false);
  const [isArchived, setIsArchived] = useState(false);


  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit ? "Edit Project" : "View Project"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isEdit ? (
          //yes
          <>
          <Row>
          <Form>
          <Form.Group className="mb-3" controlId="Title">
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Project Title"
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={6}  onChange={(e) => setProjectDescription(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Category">
          <Form.Label>Priority</Form.Label> 
          <Form.Select aria-label="Default select example" onChange={(e)=>setPriority(e.target.value)}>
            <option>Priority</option>
            <option value="Top">Top</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Title">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Due Date"
              onChange={(e) => setTaskDueDate(e.target.value)}
            />
          </Form.Group>
         
          </Form>
          </Row>
        
         </>
        ) : (
          //show project
          <>
            <Row className="text-center">
              <h6>Project Title</h6>
            </Row>
            <Row>
              <p>Task Description</p>
            </Row>
            <Row>
              <p>Priority: Top </p>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="Category">
                  <Form.Label>Status</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setTaskStatus(e.target.value)}
                  >
                    <option>Status</option>
                    <option value="ToDo">ToDo</option>
                    <option value="InProgress">InProgress</option>
                    <option value="Completed">Completed</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Row>
            <Row>
              <p>Due Date: 22-03-2022</p>
            </Row>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Update</Button>
      </Modal.Footer>
    </Modal>
  );
}
