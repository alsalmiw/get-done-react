import React, {useContext, useEffect} from 'react'
import {Container} from 'react-bootstrap'
import ProjectSnippitComponent from '../Components/ProjectSnippitComponent';
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import ModalContext from '../Context/ModalContext';
import {getAllProjects} from '../Services/DataServices'


export default function Home() {
  let navigate = useNavigate();
  let {token} = useContext(UserContext);
  let {setAllProjects} = useContext(ModalContext)

  useEffect(async()=> {

     if (token == null)
  {
    navigate('/login');
  }
  else{
    let projects = await getAllProjects()
    if(!projects==[])
    {
      setAllProjects(projects);
    }
  }
  },[])

  let allProjects = [

    {
      Id : 1,
      userId: 1,
      projectName:"logistics",
      projectDescription:"jksfhjj fsdklj ",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"Completed",
      projectPriority:"High",
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
      projectPriority:"Low",
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
      projectPriority:"High",
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
      projectPriority:"Low",
      isProjectDeleted: false,
      isProjectArchived: false,
    },
    {
      Id : 5,
      userId: 1,
      projectName:"monitors",
      projectDescription:"ilggi;ugiguui jkgjkhg;iu",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"InProgress",
      projectPriority:"Medium",
      isProjectDeleted: false,
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
      projectPriority:"Low",
      isProjectDeleted: false,
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
      projectPriority:"High",
      isProjectDeleted: false,
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
      projectPriority:"Medium",
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
      projectPriority:"Low",
      isProjectDeleted: false,
      isProjectArchived: false,
    },
    {
      Id : 10,
      userId: 1,
      projectName:"some more stuff",
      projectDescription:"fbfbfb",
      dateCreated: "2022-03-26",
      projectDueDate:"2022-03-26",
      projectStatus:"ToDo",
      projectPriority:"High",
      isProjectDeleted: false,
      isProjectArchived: false,
    }
  ]
  

  return (
   
    <Container fluid className='d-flex justify-content-center'>
    <div className='project-snippit-container'>
      
    {
      !allProjects==[]?
      allProjects.map((project, idx) => !project.isProjectArchived && !project.isProjectDeleted && project.projectPriority=="High"? <ProjectSnippitComponent project={project} idx={idx} />: null)
      :
      null
    }
     {
      !allProjects==[]?
      allProjects.map((project, idx) => !project.isProjectArchived && !project.isProjectDeleted && project.projectPriority=="Medium"? <ProjectSnippitComponent project={project} idx={idx} />: null)
      :
      null
    }
     {
      !allProjects==[]?
      allProjects.map((project, idx) => !project.isProjectArchived && !project.isProjectDeleted && project.projectPriority=="Low"? <ProjectSnippitComponent project={project} idx={idx} />: null)
      :
      null
    }
   
    </div>
    </Container>
  )
}
