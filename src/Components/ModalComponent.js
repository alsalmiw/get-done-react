import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Row, Col, Form, Table, Accordion } from "react-bootstrap";
import ModalContext from "../Context/ModalContext";
import UserContext from "../Context/UserContext";
import {createProject, getProjectItemsByUserId, updateProjectDetails, AddTask, GetAllTasks, deleteTask, GetAllUsersInfo,  getAllProjects, GetTasksUsingProjectID, updateTask} from "../Services/DataServices";

export default function ModalComponent(props) {

  
  let {
    show, setShow, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject, isEditTask, setIsEditTask,
    priorityOfProject, setpriorityOfProject, projectName, setProjectName,projectId, setProjectId, statusOfProject, setstatusOfProject, projectDueDate, setProjectDueDate, createProjectName, setCreateProjectName, createPriorityOfProject, setCreatePriorityOfProject, taskId, setTaskId,
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, createProjectDueDate, setCreateProjectDueDate,
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, createTaskName, setCreateTaskName, createTaskSpecialist, setCreateTaskSpecialist, createTaskDescription, setCreateTaskDescription,createTaskPriority, specialistId, setSpecialistId, setCreateTaskPriority,createTaskDueDate, setCreateTaskDueDate,  createTaskSpecialistId, setCreateTaskSpecialistId, 
    specialist, setSpecialist, allProjects, setAllProjects, allProjectsByID, setAllProjectsByID, TasksProjectID,projectCode, isCreateTask, setIsCreateTask, setProjectCode, setTasksProjectID, projectTeam, setProjectTeam, createProjectDescription, setCreateProjectDescription
  } = useContext(ModalContext);
  let { isAdmin, userId, allUsers, setAllUsers } = useContext(UserContext);

  useEffect(async () => {
    let personnel = await GetAllUsersInfo();
    
    if(personnel.length!=0)
    {
      setAllUsers(personnel)
    }

    //let allTasks = GetAllTasks()

    // if(!allTasks.length == 0)
    // {

    // }
    
  }, [])

  const handleClose = () => setShow(false); 

 
  
const handleCreateProject = async() => {
  
  let newProject = {
      Id : 0,
      userId,
      projectName:createProjectName,
      projectDescription:createProjectDescription,
      dateCreate: new Date(),
      dueDate: createProjectDueDate,
      statusOfProject:"ToDo",
      priorityOfProject: createPriorityOfProject,
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

//update project, does not take in the user.Id
const handleUpdateProject = async () => {
  setShow(false)
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
console.log(updateProject.id);
console.log(updateProject)
  let result = await updateProjectDetails(updateProject);
  console.log(result)
  if (result)
  {
   if (isAdmin){
    let projects = await getAllProjects()
    setAllProjectsByID(projects)
   }else{
     let projects = await getProjectItemsByUserId(userId)
    setAllProjectsByID(projects)
   }
    
  }
}

const handleUpdateProjectStatus = async(status, projectId) => {
  // let result = ChangeStatus(`UpdateProjectStatus/${projectId}/${status}`)

  //  if (result)
  //  {
  //    if(isAdmin)
  //    {
  //     let projects = await getAllProjects()
  //     if(!projects.length==0)
  //     {
  //       setAllProjectsByID(projects)
  //     }
        
  //    }else{
  //      let projects = await getProjectItemsByUserId(userId)
  //      if(!projects.length==0)
  //      {
  //        setAllProjectsByID(projects)
  //      }
  //    }
  //  }
}

  const handleCreateTask = async() =>{
   let specialistInfo= createTaskSpecialist.split(',')
    let newTask = {
      id:0,
      specialistId: Number(specialistInfo[1]),
      projectId: projectId,
      taskName:createTaskName,
      taskDateCreate:new Date(),
      taskDescription:createTaskDescription,
      priorityOfTask:createTaskPriority,
      statusOfTask:"ToDo",
      taskDueDate:createTaskDueDate,
      taskIsDeleted:false,
      taskisArchived:false,
      specialistName: specialistInfo[0]
    }
    let result = await AddTask(newTask);
    
    if(result){
      let tasks= await GetTasksUsingProjectID(projectId)
      setTasksProjectID(tasks)
    }
  }

  const handleEditTask =async () => {
    setShow(false)
    let specialistInfo= specialist.split(',')
let taskUpdate ={
  id:taskId,
  specialistId: Number(specialistInfo[1]),
  projectId: projectId,
  taskName:taskName,
  taskDateCreate:new Date(),
  taskDescription:taskDescription,
  priorityOfTask:taskPriority,
  statusOfTask:taskStatus,
  taskDueDate:taskDueDate,
  taskIsDeleted: isTaskDeleted,
  taskisArchived: false,
  specialistName: specialistInfo[0]
}
console.log(taskUpdate)
    let result = await updateTask(taskUpdate);
  console.log(result)
    if (result)
    {
      let tasks = await GetTasksUsingProjectID(projectId);
      console.log(tasks)
      if (tasks.length != 0) {
        setTasksProjectID(tasks)
      }
    }

  }


  const handleDeleteTask = async (task)=>{

    let result = await deleteTask(task)
    if (result)
    {
      let tasks = await GetAllTasks()
      //set all tasks
    }

  }


  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{isEditProject ? "Edit Project" :  isCreateProject? "Create a Project": isCreateTask? "Create a Task": isEditTask?"Edit a Task": null}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* PROJECT MODEL */}
        {isEditProject || isCreateProject?  (
          //Create a Project and Edit a Project Code
          <>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Project Title</Form.Label>
                  {
                    isCreateProject? 
                    <Form.Control
                    type="text"
                    placeholder="Project Title"
                    onChange={(e) => setCreateProjectName(e.target.value)}
                  />
                    :

                      <Form.Control
                    type="text"
                    placeholder="Project Title"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
               
                  }
                 </Form.Group>
                <Form.Group className="mb-3" controlId="Description">
                  <Form.Label>Description</Form.Label>
                  {
                    isCreateProject? 
                    <Form.Control
                    as="textarea"
                    rows={6}
                    onChange={(e) => setCreateProjectDescription(e.target.value)}
                  />
                    :
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                  }
                </Form.Group>
                <Form.Group className="mb-3" controlId="Category">
                  <Form.Label>Priority</Form.Label>
                  {
                    isCreateProject? 
                    
                    <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setCreatePriorityOfProject(e.target.value)}
                  >
                  <option>Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                  </Form.Select>
                    :
                  <Form.Select
                    aria-label="Default select example"
                    value={priorityOfProject}
                    onChange={(e) => setpriorityOfProject(e.target.value)}
                  >
                    <option>Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                  }

                </Form.Group>
                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Due Date</Form.Label>
                  {
                    isCreateProject? 
                    <Form.Control
                    type="date"
                    placeholder="Due Date"
                    onChange={(e) => setCreateProjectDueDate(e.target.value)}
                  />
                    :
                  <Form.Control
                    type="date"
                    placeholder="Due Date"
                    value={projectDueDate}
                    onChange={(e) => setProjectDueDate(e.target.value)}
                  />
                  }
                </Form.Group>
              </Form>
            </Row>
          </>
        ) 
        // END PROJECT MODEL

        : 
        //START TASK MODEL
        isCreateTask || isEditTask? 
        (
          <>
           <Row>
              <Form>
                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Task Title</Form.Label>
                  {
                    isCreateTask? 
                    <Form.Control
                    type="text"
                    placeholder="Task Title"
                    onChange={(e) => setCreateTaskName(e.target.value)}
                  />
                    :

                      <Form.Control
                    type="text"
                    placeholder="Project Title"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                  />
               
                  }
                 </Form.Group>
                <Form.Group className="mb-3" controlId="Description">
                  <Form.Label>Description</Form.Label>
                  {
                    isCreateTask? 
                    <Form.Control
                    as="textarea"
                    rows={6}
                    onChange={(e) => setCreateTaskDescription(e.target.value)}
                  />
                    :
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                  }
                </Form.Group>
                <Form.Group className="mb-3" controlId="Category">
                  <Form.Label>Priority</Form.Label>
                  {
                    isCreateTask? 
                    
                    <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => setCreateTaskPriority(e.target.value)}
                  >
                  <option>Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                  </Form.Select>
                    :
                  <Form.Select
                    aria-label="Default select example"
                    value={taskPriority}
                    onChange={(e) => setTaskPriority(e.target.value)}
                  >
                    <option>Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                  }

                </Form.Group>

               
                <Form.Group className="mb-3" controlId="Category">
                  <Form.Label>Specialist</Form.Label>
                  {
                    isCreateTask? 
                    
                    <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                                         
                                      setCreateTaskSpecialist(e.target.value)}}
                  >
                  <option>Specialist</option>

                  {
                      allUsers.map((employee, idx) => {
                        const {username,id}=employee;
                      return <option key={idx} value={`${username},${id}`}>{employee.username}</option>})
                    }
                
                  </Form.Select>
                    :
                  <Form.Select
                    aria-label="Default select example"
                    value={specialist}
                    onChange={(e) => setSpecialist(e.target.value)}
                  >
                    <option>Specialist</option>
                    {
                      allUsers.map((employee, idx) =>{ 
                        const {username,id}=employee;
                        return employee.isAdmin? null: <option key={idx} value={`${username},${id}`}>{employee.username}</option>})
                    }
                    
                    
                  </Form.Select>
                  }

                </Form.Group>

                <Form.Group className="mb-3" controlId="Title">
                  <Form.Label>Due Date</Form.Label>
                  {
                    isCreateTask? 
                    <Form.Control
                    type="date"
                    placeholder="Due Date"
                    onChange={(e) => setCreateTaskDueDate(e.target.value)}
                  />
                    :
                  <Form.Control
                    type="date"
                    placeholder="Due Date"
                    value={taskDueDate}
                    onChange={(e) => setTaskDueDate(e.target.value)}
                  />
                  }
                </Form.Group>
              </Form>
            </Row>
          
          </>
        )
        
         // END TASK MODEL
        :
      
        null
}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {isEditProject?  <Button variant="primary" onClick={handleUpdateProject}>Update Project</Button> : isCreateProject?  <Button variant="primary" onClick={handleCreateProject}>Create Project</Button>: isCreateTask? <Button variant="primary" onClick={handleCreateTask}>Create Task</Button>:isEditTask? <Button variant="primary" onClick={handleEditTask}>Edit Task</Button>:null}
        
      </Modal.Footer>
    </Modal>
  );
}
