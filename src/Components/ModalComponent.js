import React, { useContext, useState } from "react";
import { Modal, Button, Row, Col, Form, Table, Accordion } from "react-bootstrap";
import ModalContext from "../Context/ModalContext";
import UserContext from "../Context/UserContext";
import {createProject, getProjectItemsByUserId, updateProjectDetails, AddTask, GetAllTasks} from "../Services/DataServices";

export default function ModalComponent(props) {
  let {
    show, setShow, isEdit, setIsEdit, isProjectView, setIsProjectView, isTaskView, 
    setIsTaskView, isTaskEdit, setIsTaskEdit, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject,
    priorityOfProject, setpriorityOfProject, projectName, setProjectName,projectId, setProjectId, statusOfProject, setstatusOfProject, projectDueDate, setProjectDueDate,
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, 
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, isArchived, setIsArchived,
    specialist, setSpecialist, allProjects, setAllProjects, allProjectsByID, setAllProjectsByID
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
      dueDate: projectDueDate,
      statusOfProject:"ToDo",
      priorityOfProject,
      isProjectDeleted: false,
      isProjectArchived: false,
  }
    setShow(false);
    console.log(newProject)
    let result = await createProject(newProject)

    if (result)
    {
      
      console.log(userId)
      
        let projects = await getProjectItemsByUserId(userId)
        setAllProjectsByID(projects)
      
      
    }

}

const handleUpdateProject = async () => {
  let updateProject = {
    id: projectId,
    userId,
    projectName,
    projectDescription,
    dateCreated: new Date(),
    projectDueDate,
    statusOfProject,
    priorityOfProject,
    isProjectDeleted,
    isProjectArchived,
}
console.log(updateProject)
  let result = await updateProjectDetails(updateProject);
  console.log(result)
  if (result)
  {
    let projects = await getProjectItemsByUserId(userId)
    setAllProjectsByID(projects)
  }
}

  const handleSubmitNewTask = async() =>{

    let newTask = {
      Id:0,
      ProjectId: projectId,
      TaskName:taskName,
      TaskDateCreate:new Date(),
      TaskDescription:taskDescription,
      PriorityOfTask:taskPriority,
      StatusOfTask:"ToDo",
      TaskDueDate:taskDueDate,
      TaskIsDeleted:false,
      TaskisArchived:false
    }

    let result = await AddTask(newTask);
    console.log(newTask)
    console.log(result)
    // if(result){
    //   let tasks= await GetAllTasks()
    // }
    
  }

  const handleUpdateTask =async () => {
let updateTask ={
  Id:0,
  ProjectId: projectId,
  TaskName:taskName,
  TaskDateCreate:new Date(),
  TaskDescription:taskDescription,
  PriorityOfTask:taskPriority,
  StatusOfTask:taskStatus,
  TaskDueDate:taskDueDate,
  TaskIsDeleted: isTaskDeleted,
  TaskisArchived: isArchived
}

    let result = await updateTask(updateTask);

    if (result)
    {
      
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
                    value={priorityOfProject}
                    onChange={(e) => setpriorityOfProject(e.target.value)}
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
          //show projectf
          <>
            <Row className="text-center">
              <h6>{projectName}</h6>
            </Row>
            <Row>
              <p>{projectDescription}</p>
            </Row>
            <Row>
              <p>Priority: {priorityOfProject} </p>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="Category">
                  <Form.Label>Status</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    value={statusOfProject}
                    onChange={(e) => setstatusOfProject(e.target.value)}
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
                    onChange={(e) => isTaskEdit? setTaskName(e.target.value): ""}
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
                    onChange={(e) => setSpecialist(e.target.value)}
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
            
         <Button className='m-1' variant="warning" onClick={handleSubmitNewTask}>Submit New Task</Button>

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
     
     <p><strong>Task Description: </strong>
     {
       isAdmin? 
        <span contentEditable onKeyDown={(e) => console.log(e.target.textContent)}> we are doing the things </span>
       :
        "things to do"
     }
     </p>
     
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
   
    

     <Button variant="outline-primary" onClick={handleUpdateTask}>Update Task</Button>
     {
       isAdmin? <> <Button variant="outline-danger">Delete Task</Button></>:null
     }
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
