import React, {useContext, useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UserContext from "../Context/UserContext";
import ModalContext from '../Context/ModalContext';
import ModalComponent from './ModalComponent';

export default function ProjectTile({project, idx}) {
  console.log(project.Id)
  let {isAdmin} = useContext(UserContext);
  let {show, setShow, isEdit, setIsEdit, isProjectView, setIsProjectView, isTaskView, 
    setIsTaskView, isTaskEdit, setIsTaskEdit, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject,
    priorityOfProject, setpriorityOfProject, projectName, setProjectName,projectId, setProjectId, projectStatus, setProjectStatus, projectDueDate, setProjectDueDate,
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, 
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, isArchived, setIsArchived,
    specialist, setSpecialist, allProjects, setAllProjects, allProjectsByID, setAllProjectsByID} = useContext(ModalContext);

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
    setIsCreateProject(false)
  }

  const handleDeleteProject = () => {
    console.log("first")
  }

  return (
    <>
    <div key={idx} className='project-container'>
        <div className='project-title center'><h4>TaskName: {project.projectName} </h4> </div>
        <div className='project-description'> 
        <p><strong>Description: </strong>{project.projectDescription} </p>
        </div>
        <p><strong>Priority: </strong> 
         {project.priorityOfProject=="High"? <span className="red">{project.priorityOfProject}</span>: project.priorityOfProject=="Medium"?<span className="orange">{project.priorityOfProject}</span>: <span className="green">{project.priorityOfProject}</span>}
        
         </p>
        <p><strong>Progress: </strong> 60%</p>
        <div className='project-buttons'>
        <Button className='m-1' variant="primary" onClick={() => {
          handleViewShow()
          setProjectId(project.projectId)
        setProjectName(project.projectName)
        setpriorityOfProject(project.priorityOfProject)
        setProjectStatus(project.projectStatus)
        setProjectDescription(project.projectDescription)
        setProjectDueDate(project.projectDueDate)
        }}>
        View
      </Button>
      {isAdmin?<><Button className='m-1' variant="warning" onClick={() => {
        handleEditShow()
        setProjectId(project.projectId)
        setProjectName(project.projectName)
        setpriorityOfProject(project.priorityOfProject)
        setProjectStatus(project.projectStatus)
        setProjectDescription(project.projectDescription)
        setProjectDueDate(project.projectDueDate)
        }}>Edit</Button>
      <Button className='m-1' variant="success" >Archive</Button>
      <Button className='m-1' variant="danger" onClick={handleDeleteProject} >Delete</Button>
      
      </>
      : null}
        </div>
       
      </div>
    
      </>
  )
}
