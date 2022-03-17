import React, {useState, useContext, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import {Container, Modal, Button, Row, Col} from "react-bootstrap";
import UserContext from "../Context/UserContext";
import ProjectTile from '../Components/ProjectTile';
import ModalContext from '../Context/ModalContext';
import useModal from '../Hooks/use-modal';
import ModalComponent from '../Components/ModalComponent';
import {getProjectItemsByUserId} from "../Services/DataServices"

export default function Dashboard() {

  let {isAdmin, userId, token} = useContext(UserContext);
  let navigate = useNavigate();
  let {show, setShow, isEdit, setIsEdit, isProjectView, setIsProjectView, isTaskView, 
    setIsTaskView, isTaskEdit, setIsTaskEdit, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject,
    priorityOfProject, setpriorityOfProject, projectName, setProjectName,projectId, setProjectId, projectStatus, setProjectStatus, projectDueDate, setProjectDueDate,
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, 
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, isArchived, setIsArchived,
    specialist, setSpecialist, allProjects, setAllProjects, setAllProjectsByID} = useContext(ModalContext)
  useEffect(async ()=> {

     if (token == null)
  {
    navigate('/login');
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

  let allProjectsByID = [

    {
      Id : 1,
      userId: 1,
      projectName:"logistics",
      projectDescription:"jksfhjj fsdklj ",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"Completed",
      priorityOfProject:"High",
      isProjectDeleted: false,
      isProjectArchived: false,
    },
    {
      Id : 2,
      userId: 1,
      projectName:"computers",
      projectDescription:"sdfdsf sdfsdf dfgd g sdfg",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"Completed",
      priorityOfProject:"Low",
      isProjectDeleted: false,
      isProjectArchived: false,
    },
    {
      Id : 3,
      userId: 1,
      projectName:"desks",
      projectDescription:"grsg  rgrsfrg ssg s ",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"InProgress",
      priorityOfProject:"High",
      isProjectDeleted: false,
      isProjectArchived: false,
    },
    {
      Id : 4,
      userId: 1,
      projectName:"chairs",
      projectDescription:"dfgsgf srg gs  ",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"ToDo",
      priorityOfProject:"Low",
      isProjectDeleted: false,
      isProjectArchived: false,
    },
    {
      Id : 5,
      userId: 1,
      projectName:"monitors",
      projectDescription:"",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"InProgress",
      priorityOfProject:"Medium",
      isProjectDeleted: true,
      isProjectArchived: false,
    },
    {
      Id : 6,
      userId: 1,
      projectName:"keyboards",
      projectDescription:"fsdgfsg sdfg sg wgtwegt wer t ",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"ToDo",
      priorityOfProject:"Low",
      isProjectDeleted: true,
      isProjectArchived: false,
    },
    {
      Id : 7,
      userId: 1,
      projectName:"other stuff",
      projectDescription:"sgg s gsfgsfgsrg sgsfgwrgtr trt",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"Completed",
      priorityOfProject:"High",
      isProjectDeleted: true,
      isProjectArchived: false,
    },
    {
      Id : 8,
      userId: 1,
      projectName:"laptops",
      projectDescription:"sgggsgsg",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"ToDo",
      priorityOfProject:"Medium",
      isProjectDeleted: false,
      isProjectArchived: false,
    },
    {
      Id : 9,
      userId: 1,
      projectName:"iPhones",
      projectDescription:"sdfbfb",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"InProgress",
      priorityOfProject:"Low",
      isProjectDeleted: true,
      isProjectArchived: true,
    },
    {
      Id : 10,
      userId: 1,
      projectName:"some more stuff",
      projectDescription:"fbfbfb",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"ToDo",
      priorityOfProject:"High",
      isProjectDeleted: true,
      isProjectArchived: true,
    }
  ]

  

  return (
    <>
   

    <Container fluid className='p-0 dashboard-container'>
    <div className='to-do'>
    <Row className='dashboard-status text-center'><h4>ToDo</h4></Row>
    <Row>
      <Col>
      {
        !allProjectsByID==[]?
        allProjectsByID.map((project, idx) => project.projectStatus=="ToDo" && project.isProjectArchived==false && project.isProjectDeleted==false? <ProjectTile project={project} idx={idx} />: null )
        : null
      }
      
      </Col>
    </Row>
    </div>
    <div className='in-progress '>
    <Row className='dashboard-status text-center'><h4>InProgress</h4></Row>
    <Row>
      <Col>
      {
        !allProjectsByID==[]?
        allProjectsByID.map((project, idx) => project.projectStatus=="InProgress" && project.isProjectArchived==false && project.isProjectDeleted==false? <ProjectTile project={project} idx={idx}/>: null )
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
        !allProjectsByID==[]?
        allProjectsByID.map((project, idx) => project.projectStatus=="Completed" && project.isProjectArchived==false && project.isProjectDeleted==false? <ProjectTile project={project} idx={idx}/>: null ) 
        : null
      }
      </Col>
    </Row>

    </div>

    </Container>
    
    </>
  
  )
}
