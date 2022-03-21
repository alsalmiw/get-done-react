import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightToBracket, faRightFromBracket, faPooStorm} from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../Pages/Dashboard'
import CreateAccount from "../Pages/CreateAccount";
import UserContext from "../Context/UserContext";
import Home from "../Pages/Home";
import Personnel from "../Pages/Personnel";
import LoginPage from "../Pages/LoginPage";
import ModalContext from "../Context/ModalContext";
import useModal from "../Hooks/use-modal";
import ModalComponent from "./ModalComponent";
import Project from "../Pages/Project";

export default function Navigation() {
  // let navigate = useNavigate();
  let {isAdmin, token, setToken, setIsAdmin} = useContext(UserContext);
  let {show, setShow, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject, isEditTask, setIsEditTask,
    priorityOfProject, setpriorityOfProject, projectName, setProjectName,projectId, setProjectId, statusOfProject, setstatusOfProject, projectDueDate, setProjectDueDate, 
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, 
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, isArchived, setIsArchived,
    specialist, setSpecialist, allProjects, setAllProjects, allProjectsByID, setAllProjectsByID, TasksProjectID,projectCode, isCreateTask, setIsCreateTask, setProjectCode, setTasksProjectID, projectTeam, setProjectTeam} = useContext(ModalContext);
  
 //how to move to a another page useNavigate gives an error

  const handleCreateProject =() => {

    setShow(true);
    setIsEditProject(false);
    setIsCreateProject(true);
   
  }

  const handleLogOut =() => {
    
    setToken(null)
    setIsAdmin(false)
  }

  return (
    // <ModalContext.Provider value={useModal()}>
    <>
    <BrowserRouter>
      <Container fluid className="p-0">
        <Navbar className="purpleBG" expand="lg">
          <Container>
            <Navbar.Brand href="#home">GET <FontAwesomeIcon icon={faPooStorm}/> DONE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
             
                {/* <Nav.Link as={Link} to="create-account">Create Account</Nav.Link> */}
                <Nav.Link as={Link} to="dashboard">Dashboard</Nav.Link>
               {isAdmin?<><Nav.Link as={Link} to="personnel">Personnel</Nav.Link>
               <Nav.Link as={Link} to="personnel">Archived Projects</Nav.Link></> : null} 
               {token==null? <Nav.Link as={Link} to="login">Login <FontAwesomeIcon icon={faRightToBracket} /></Nav.Link>:<Nav.Link as={Link} to="login" onClick={handleLogOut}>Logout  <FontAwesomeIcon icon={faRightFromBracket} /></Nav.Link>}   
              </Nav>
              <Nav>
              {isAdmin?<Button variant="outline-light" onClick={handleCreateProject}> Create Project</Button> : null}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Routes>
      <Route path="/" element={<Home />} key='home' />
      <Route path="login" element={<LoginPage />} key="login" />
      <Route path="create-account" element={<CreateAccount />} key="create-account" />
      <Route path="dashboard" element={<Dashboard />} key="dashboards" />
      <Route path="personnel" element={<Personnel />} key="personnel" />
      <Route path="archive" element={<Personnel />} key="archive" />
      <Route path="project" element={<Project />} key="project" />
      </Routes>
    </BrowserRouter>
    <ModalComponent />
    </>
    // </ModalContext.Provider>
  );
}
