import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Dashboard from '../Pages/Dashboard'
import CreateAccount from "../Pages/CreateAccount";
import UserContext from "../Context/UserContext";

export default function Navigation() {

  let {isAdmin} = useContext(UserContext);
  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <Navbar className="purpleBG" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Get Shit Done</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link href="create-account">Create Account</Nav.Link>
                <Nav.Link href="dashboard">Dashboard</Nav.Link>
                <Nav.Link href="personnel">Personnel</Nav.Link>
              </Nav>
              <Nav>
              <Button variant="outline-light"> Create Project</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} key="dashboards" />
        <Route path="login" element={<Dashboard />} key="login" />
        <Route path="create-account" element={<CreateAccount />} key="create-account" />

      </Routes>
    </BrowserRouter>
  );
}
