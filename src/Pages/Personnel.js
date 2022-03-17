import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Form, Accordion, Button } from 'react-bootstrap';

function Personnel() {
  
  //map through the users to create the table 
  
  //The data has to be an array for the map method to
  let DummyData = [
    {Id: 1, Username: "Jesse", role: "Revoked Access"},
    {Id: 2, Username: "Walaa", role: "admin"},
    {Id: 3, Username: "Peter", role: "Project Manager"},
    {Id: 4, Username: "Jovann", role: "Specialist"},
    {Id: 5, Username: "Danny", role: "Specialist"},
    {Id: 6, Username: "An", role: "Specialist"},
    {Id: 7, Username: "John", role: "Revoked Access"},
    {Id: 8, Username: "Jamie", role: "Revoked Access"},

  ];

  useEffect(async () => {
    SetUserPersonnel(DummyData);
  }, [])

  const [Personnel, SetUserPersonnel] = useState([]);

  return (
    
    <Container>
      <Row>
        <Col className="mt-4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Users With Access</Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Role</th>
                      <th>Change Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Personnel.map((user, i) => {
                        return (
                          user.role != "Revoked Access" ?
                          <tr>
                          <td>{user.Id}</td>
                          <td>{user.Username}</td>
                          <td>{user.role}</td>
                          <td>
                            <Form.Select aria-label="Default select example">
                              <option>Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </td>
                          </tr> 
                          : null
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Users With Revoked Access</Accordion.Header>
              <Accordion.Body>
              <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Role</th>
                      <th>Change Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Personnel.map((user, i) => {
                        return (
                          user.role === "Revoked Access" ?
                          <tr>
                          <td>{user.Id}</td>
                          <td>{user.Username}</td>
                          <td>{user.role}</td>
                          <td>
                            <Form.Select aria-label="Default select example">
                              <option>Open this select menu</option>
                              <option value="1">Project Manager</option>
                              <option value="2">Specialist</option>
                            </Form.Select>
                          </td>
                          </tr> 
                          :null
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 d-flex justify-content-end">
        <Button variant="primary">Update Users</Button>{' '}
        </Col>
      </Row>
    </Container>
  )
}

export default Personnel