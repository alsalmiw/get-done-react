import React, {useContext, useState} from 'react'
import "../Pages/ProjectStyle.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import ModalContext from '../Context/ModalContext';
import ModalComponent from './ModalComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faCheckCircle, faThumbsDown, faTrashCan, faBoxArchive} from "@fortawesome/free-solid-svg-icons";
import {ArchiveDeleteProject, getProjectItemsByUserId} from '../Services/DataServices';

export default function ProjectTile({project, idx}) {
  let navigate = useNavigate();
  //console.log(project.Id)
  let {isAdmin, userId} = useContext(UserContext);
  let {show, setShow, isEdit, setIsEdit, isProjectView, setIsProjectView, isTaskView, 
    setIsTaskView, isTaskEdit, setIsTaskEdit, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject,
    priorityOfProject, setpriorityOfProject, projectName, setProjectName,projectId, setProjectId, statusOfProject, setstatusOfProject, projectDueDate, setProjectDueDate,
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, 
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, isArchived, setIsArchived,
    specialist, setSpecialist, allProjects, setAllProjects, allProjectsByID, setAllProjectsByID} = useContext(ModalContext);

  // const [isEdit, setIsEdit]=useState(false);

  const handleClose = () => setShow(false);
  const handleViewShow = () =>
  {
    //setShow(true);
    //setIsEdit(false);
    navigate('/project');
  }
  
  
  const handleEditClose = () => setShow(false);
  const handleEditShow = () => 
  {
    setShow(true);
    setIsEdit(true);
    setIsCreateProject(false)
  }

  const handleDeleteProject = async (id) => {
    let result = await ArchiveDeleteProject(`https://task-tracker-web-app.azurewebsites.net/project/DeleteProject/${id}`)
    if(result)
    {
      let projects = await getProjectItemsByUserId(userId)
      setAllProjectsByID(project)
    }
  }

  const handleArchiveProject = async(id) => {
    let result = await ArchiveDeleteProject(`https://task-tracker-web-app.azurewebsites.net/project/ArchiveProject${id}`)
    let projects = await getProjectItemsByUserId(userId)
      setAllProjectsByID(project)
  }

  return (
    <>
    <div key={idx} className='task-info'>
        <div className='task-title'>
          
          <h4> {project.projectName} </h4>
          <FontAwesomeIcon icon={faTrashCan} onClick={()=>handleDeleteProject(project.id)} />
           </div>
        <div className='project-description p-1'> 
        <p><strong>Description: </strong>{project.projectDescription} </p>
        </div>
        <p className="p-1"><strong>Priority: </strong> 
         {project.priorityOfProject=="High"? <span className="red">{project.priorityOfProject}</span>: project.priorityOfProject=="Medium"?<span className="orange">{project.priorityOfProject}</span>: <span className="green">{project.priorityOfProject}</span>}
        
         </p>
        <p><strong>Due Date: </strong> {project.dueDate}</p>
        <div className='project-buttons'>
        <Button className='m-1' variant="primary" onClick={() => {
          handleViewShow()
          setProjectId(project.id)
          console.log(project.id)
        setProjectName(project.projectName)
        setpriorityOfProject(project.priorityOfProject)
        setstatusOfProject(project.statusOfProject)
        setProjectDescription(project.projectDescription)
        setProjectDueDate(project.dueDate)
        }}>
        View
      </Button>
      {isAdmin?<>
      {/* <Button className='m-1' variant="warning" onClick={() => {
        handleEditShow()
        setProjectId(project.id)
        console.log(project.id)
        setProjectName(project.projectName)
        setpriorityOfProject(project.priorityOfProject)
        setstatusOfProject(project.statusOfProject)
        setProjectDescription(project.projectDescription)
        setProjectDueDate(project.projectDueDate)
        }}>Edit</Button> */}
      <Button className='m-1' variant="success" onClick={handleArchiveProject}><FontAwesomeIcon icon={faBoxArchive}/> Archive</Button>
      {/* <Button className='m-1' variant="danger" onClick={handleDeleteProject} >Delete</Button> */}
      
      </>
      : null}
        </div>
       
      </div>
    
      </>
  )
}
