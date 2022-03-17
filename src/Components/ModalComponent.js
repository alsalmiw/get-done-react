import React, { useContext, useState } from "react";
import { Modal, Button, Row, Col, Form, Table, Accordion } from "react-bootstrap";
import ModalContext from "../Context/ModalContext";
import UserContext from "../Context/UserContext";
import {createProject, getProjectItemsByUserId, updateProjectDetails} from "../Services/DataServices";

export default function ModalComponent(props) {
  let {
    show, setShow, isEdit, setIsEdit, isProjectView, setIsProjectView, isTaskView, 
    setIsTaskView, isTaskEdit, setIsTaskEdit, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject,
    projectPriority, setProjectPriority, projectName, setProjectName, projectId, setProjectId, projectStatus, setProjectStatus, projectDueDate, setProjectDueDate,
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, 
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, isArchived, setIsArchived,
    specialist, setSpecialist, allProjects, setAllProjects
  } = useContext(ModalContext);
  let { isAdmin, userId } = useContext(UserContext);

  const handleClose = () => setShow(false); 

 

  
const handleCreateProject = async() => {
  
  let newProject = {
      Id : 0,
      userId,
      projectName,
      projectDescription,
      dateCreate: new Date(),
      projectDueDate,
      projectStatus,
      projectPriority,
      isProjectDeleted: false,
      isProjectArchived: false,
  }
    setShow(false);
    console.log(newProject)
    let result = await createProject(newProject)

    if (result)
    {
      let projects;
     
      if(isAdmin)
      {
        projects = getProjectItemsByUserId(userId)
        setAllProjects(projects)
      }
      
    }

}

const handleUpdateProject = async () => {
  let updateProject = {
    projectId,
    userId,
    projectName,
    projectDescription,
    dateCreated: new Date(),
    projectDueDate,
    projectStatus,
    projectPriority,
    isProjectDeleted,
    isProjectArchived,
}

  let result = await updateProjectDetails(updateProject);
  if (result)
  {
    let projects = getProjectItemsByUserId(userId)
      setAllProjects(projects)
  }
}

  

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{isEdit && !isCreateProject ? "Edit Project" : isEdit && isCreateProject? "Create a Project": "View Project"}</Modal.Title>
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
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Category">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={projectPriority}
                    onChange={(e) => setProjectPriority(e.target.value)}
                  >
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
                    value={projectDueDate}
                    onChange={(e) => setProjectDueDate(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Row>
          </>
        ) : (
          //show project
          <>
            <Row className="text-center">
              <h6>{projectName}</h6>
            </Row>
            <Row>
              <p>{projectDescription}</p>
            </Row>
            <Row>
              <p>Priority: {projectPriority} </p>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="Category">
                  <Form.Label>Status</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    value={projectStatus}
                    onChange={(e) => setProjectStatus(e.target.value)}
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
              <p>Due Date: {projectDueDate}</p>
            </Row>
            <Row className="p-2">
             <Col sm={10}><h5>Tasks Information</h5></Col> 
             {
               isAdmin? 

               <>
            
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header className="purple-border">Create a New Task</Accordion.Header>
    <Accordion.Body>
     
    
              <Form>
                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Task Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Project Title"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Category">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.value)}
                  >
                    <option>Priority</option>
                    <option value="Top">Top</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Category">
                  <Form.Label>Task Specialist</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.value)}
                  >
                    <option>Specialist</option>

                    <option value="Top">Top</option>
                    
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Due Date"
                    value={taskDueDate}
                    onChange={(e) => setTaskDueDate(e.target.value)}
                  />
                </Form.Group>
              </Form>
            
         <Button className='m-1' variant="warning">Submit New Task</Button>

    </Accordion.Body>
  </Accordion.Item>
</Accordion>

               </>
              //  <Col sm={2}><Button className='m-1' variant="info" >Create Task</Button></Col>
               
               
               
               
               :null
             }
             
              </Row>
              <Row>
              <Accordion>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h6>PROJ01 Things to do </h6></Accordion.Header>
    <Accordion.Body>
     <h5>Task Title: PROJ01 - Things to do </h5>
    {isAdmin? <><p><strong>Specialist: </strong></p>
          
    <Form>
                        <Form.Group className="mb-3" controlId="Category">
                          <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setSpecialist(e.target.value)}
                          >
                            <option>Specialist</option>
                            <option value="PersonName">userName</option>
                            
                          </Form.Select>
                        </Form.Group>
                      </Form>
    
    </> :<p><strong>Specialist: </strong>John Smith</p>}
     
     
     <p><strong>Task Status:</strong></p>
     <Form>
                        <Form.Group className="mb-3" controlId="Category">
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
   
     <p><strong>Task Description: </strong>
     {
       isAdmin? 
        <span contentEditable onKeyDown={(e) => console.log(e.target.textContent)}> we are doing the things </span>
       :
        "things to do"
     }
     </p>
     

     <Button variant="outline-primary">Update Task</Button>
    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
                
              </Row>
              
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {isEdit && !isCreateProject ?  <Button variant="primary" onClick={handleUpdateProject}>Update Project</Button> : isEdit && isCreateProject?  <Button variant="primary" onClick={handleCreateProject}>Create</Button>:  <Button variant="primary">Update Status</Button>}
        
      </Modal.Footer>
    </Modal>
  );
}
