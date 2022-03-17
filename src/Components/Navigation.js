import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Dashboard from '../Pages/Dashboard'
import CreateAccount from "../Pages/CreateAccount";
import UserContext from "../Context/UserContext";
import Home from "../Pages/Home";
import Personnel from "../Pages/Personnel";
import LoginPage from "../Pages/LoginPage";
import ModalContext from "../Context/ModalContext";
import useModal from "../Hooks/use-modal";
import ModalComponent from "./ModalComponent";

export default function Navigation() {

  let {isAdmin, token, setToken} = useContext(UserContext);
  let {show, setShow, isEdit, setIsEdit} = useContext(ModalContext);

 

  const handleCreateShow =() => {

    setShow(true);
    setIsEdit(true);
  }

  const handleLogOut =() => {
    setToken(null)
  }

  return (
    // <ModalContext.Provider value={useModal()}>
    <>
    <BrowserRouter>
      <Container fluid className="p-0">
        <Navbar className="purpleBG" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Get Shit Done</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
             {token==null? <Nav.Link as={Link} to="login">Login</Nav.Link>:<Nav.Link onClick={handleLogOut}>Logout</Nav.Link>}   
                {/* <Nav.Link as={Link} to="create-account">Create Account</Nav.Link> */}
                <Nav.Link as={Link} to="dashboard">Dashboard</Nav.Link>
               {isAdmin?<Nav.Link as={Link} to="personnel">Personnel</Nav.Link> : null} 
              </Nav>
              <Nav>
              {isAdmin?<Button variant="outline-light" onClick={handleCreateShow}> Create Project</Button> : null}
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
      </Routes>
    </BrowserRouter>
    <ModalComponent />
    </>
    // </ModalContext.Provider>
  );
}
