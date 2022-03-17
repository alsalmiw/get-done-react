import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Table, Form, Accordion, Button } from 'react-bootstrap';

function Personnel() {

  //map through the users to create the table 

  //The data has to be an array for the map method to
  let DummyData = [
    { Id: 1, Username: "Walaa", isAdmin: false, isOwner: true, isRevoked: false },
    { Id: 2, Username: "Jamie", isAdmin: true, isOwner: false, isRevoked: false },
    { Id: 3, Username: "John", isAdmin: true, isOwner: false, isRevoked: true },
    { Id: 4, Username: "Peter", isAdmin: true, isOwner: false, isRevoked: false },
    { Id: 5, Username: "Jesse", isAdmin: true, isOwner: false, isRevoked: false },
    { Id: 6, Username: "An", isAdmin: false, isOwner: false, isRevoked: true },
    { Id: 7, Username: "Neither", isAdmin: false, isOwner: false, isRevoked: false }
  ];
  //Owner is an Admin, isAdmin is a project manager

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
                      <th className="text-center">#</th>
                      <th className="text-center">Username</th>
                      <th className="text-center">Role</th>
                      <th className="text-center">Change Role</th>
                      <th className="text-center">Update Access</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Personnel.map((user, i) => {
                        return (
                          user.isRevoked === false ?
                            <tr>
                              <td className="text-center">{user.Id}</td>
                              <td className="text-center">{user.Username}</td>
                              <td className="text-center">
                                {
                                    user.isOwner == true ? "Owner" :
                                    user.isAdmin == true ? "Admin" : "Specialist"
                                }
                              </td>
                              <td className="text-center">
                                {
                                  user.isOwner == false ?
                                    <Button variant="primary">
                                      {
                                        user.isAdmin == true ? "Change Role To Specialist" 
                                        :
                                        "Change Role To Admin"
                                      }
                                    </Button>
                                    :
                                    "N/A"
                                }
                              </td>
                              <td className="text-center">
                                {
                                  user.isOwner == false ?
                                    <Button variant="danger">Revoke Access</Button>
                                    : "N/A"
                                }
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
                      <th className="text-center">#</th>
                      <th className="text-center">Username</th>
                      <th className="text-center">Role</th>
                      <th className="text-center">Update Access</th>
                      <th className="text-center">Remove Personnel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Personnel.map((user, i) => {
                        return (
                          user.isRevoked === true ?
                            <tr>
                              <td className="text-center">{user.Id}</td>
                              <td className="text-center">{user.Username}</td>
                              <td className="text-center">Revoked Access</td>
                              <td className="text-center">
                                <Button variant="primary">Give User Access</Button>
                              </td>
                              <td className="text-center">
                              <Button variant="danger">Remove User</Button>

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
          </Accordion>
        </Col>
      </Row>
    </Container>
  )
}

export default Personnel