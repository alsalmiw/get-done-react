import React, {useContext, useEffect, useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import ProjectSnippitComponent from '../Components/ProjectSnippitComponent';
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import ModalContext from '../Context/ModalContext';
import {getAllProjects, checkToken} from '../Services/DataServices'
// import { Button } from 'bootstrap';


export default function Home() {
  let navigate = useNavigate();
  let {token, username} = useContext(UserContext);
  let { allProjects, setAllProjects} = useContext(ModalContext)


  useEffect(async()=> {
console.log(allProjects)
     if (!checkToken())
  {
    navigate('/login');
  }
  else{

      let projects = await getAllProjects()
      console.log(username)
      setAllProjects(projects);
  }

  },[])

  const [everyProject, setEveryProject] = useState([]);

  
  
let sortByDate = [];
let sortByName = [];
let sortByPriority = [];
const handleSort = (e) => {
    // console.log(e.target.value);
    if(e.target.value === "Name")
    {
      sortByName = allProjects.sort((a, b) => a.projectName.localeCompare(b.projectName));
      console.log(sortByName);
      setEveryProject(sortByName);
      // everyProject.map((project, idx) => !project.isProjectArchived && !project.isProjectDeleted ? <ProjectSnippitComponent project={project} idx={idx} />: null)
    }
  }
  
  

  return (

    
    <Container fluid className='d-flex justify-content-center'>
       <Form.Group className="mb-3" controlId="Category">     
                    <Form.Select
                    aria-label="Default select example"
                    onChange={handleSort}
                    >
                  <option>Sort By</option>
                  <option value="Priority">By Priority</option>
                  <option value="DueDate">By Due Date</option>
                  <option value="Name">By Name</option>
                  </Form.Select>   
        </Form.Group>
    <div className='project-snippit-container'>

    {
      // (everyProject.length == 0) ?
      // (everyProject.map((project, idx) => (!project.isProjectArchived && !project.isProjectDeleted ? <ProjectSnippitComponent project={project} idx={idx} />: null)
      // : )
      
      // (a>b) ? ( a>c ? a : c) : ( b>c ? b : c)
    }

    
    
    ({
      
      allProjects.length!=0 ?
      allProjects.map((project, idx) => !project.isProjectArchived && !project.isProjectDeleted && project.priorityOfProject=="High"? <ProjectSnippitComponent project={project} idx={idx} />: null)
      :
      null
    }
     {
       !allProjects==[]?
       allProjects.map((project, idx) => !project.isProjectArchived && !project.isProjectDeleted && project.priorityOfProject=="Medium"? <ProjectSnippitComponent project={project} idx={idx} />: null)
       :
       null
      }
     {
       !allProjects==[]?
       allProjects.map((project, idx) => !project.isProjectArchived && !project.isProjectDeleted && project.priorityOfProject=="Low"? <ProjectSnippitComponent project={project} idx={idx} />: null)
       :
       null
      })
  
    
   
    </div>
    </Container>
  )
}
