import React, {useState, useContext, useEffect} from 'react'
import "./ProjectStyle.css";
import { useNavigate } from "react-router-dom";
import {Container, Modal, Button, Row, Col} from "react-bootstrap";
import UserContext from "../Context/UserContext";
import ProjectTile from '../Components/ProjectTile';
import ModalContext from '../Context/ModalContext';
import useModal from '../Hooks/use-modal';
import useUser from '../Hooks/use-user';
import ModalComponent from '../Components/ModalComponent';
import {getProjectItemsByUserId, getAllProjects} from "../Services/DataServices"

export default function Dashboard() {

  let {isAdmin, isOwner, userId, token} = useContext(UserContext);
  let navigate = useNavigate();
  let {show, setShow, isEdit, setIsEdit, isProjectView, setIsProjectView, isTaskView, 
    setIsTaskView, isTaskEdit, setIsTaskEdit, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject,
    priorityOfProject, setpriorityOfProject, projectName, setProjectName,projectId, setProjectId, statusOfProject, setstatusOfProject, projectDueDate, setProjectDueDate,
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, 
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, isArchived, setIsArchived,
    specialist, setSpecialist, allProjects,allProjectsByID, setAllProjects, setAllProjectsByID} = useContext(ModalContext)
  useEffect(async ()=> {

     if (token == null)
  {
    navigate('/');
  }
  else{
    if(isOwner)
    {
      let projects = await getAllProjects()
      if(projects.length!=0)
      {
        setAllProjectsByID(projects)
      }
    }
    else if (isAdmin)
    {
       let projects = await getProjectItemsByUserId(userId)
          if(projects.length!=0)
          {
            setAllProjectsByID(projects)
          }
    }
    else{
      let projects = await getAllProjects()
      if(projects.length!=0)
      {

        
       //get all projects
       //match project id to projectId in tasks
      }
    }
   
          
  }
  // else if (!token==null){
  //     if(isAdmin)
  //     {
  //       setAllProjectsByID(allProjects)
  //     }
  //     else{
  //       let projects = await getProjectItemsByUserId(userId)
  //       if(!projects==[])
  //       {
  //         setAllProjectsByID(projects)
  //       }
  // //     }
 //}

  
  },[])

  

  return (
    <>
   

    <Container fluid className='p-0 dashboard-container'>
    <div className='to-do'>
    <Row className='dashboard-status text-center'><h4>ToDo</h4></Row>
    <Row>
      <Col>
      {
        allProjectsByID.length !=0?
        allProjectsByID.map((project, idx) => (project.statusOfProject=="ToDo" && project.isArchived==false && project.isDeleted==false? <ProjectTile project={project} idx={idx} />: null ))
        : null
      }
      
      </Col>
    </Row>
    </div>
    <div className='in-progress '>
    <Row className='dashboard-status text-center'><h4 className="text-center project-title task-status">InProgress</h4></Row>
    <Row>
      <Col>
      {
         allProjectsByID.length !=0?
        allProjectsByID.map((project, idx) => project.statusOfProject=="InProgress" && project.isArchived==false && project.isDeleted==false? <ProjectTile project={project} idx={idx}/>: null )
        : null
      }
      </Col>
    </Row>
    </div>

    <div className='done'>
    <Row className='dashboard-status text-center'><h4>Completed</h4></Row>
    <Row>
      <Col>
      {
         allProjectsByID.length !=0?
        allProjectsByID.map((project, idx) => project.statusOfProject=="Completed" && project.isArchived==false && project.isDeleted==false? <ProjectTile project={project} idx={idx}/>: null ) 
        : null
      }
      </Col>
    </Row>

    </div>

    </Container>
    
    </>
  
  )
}
