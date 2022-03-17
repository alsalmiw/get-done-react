import React, { useState }  from 'react';
import { Container, Row, Col, Table, Form, Accordion } from 'react-bootstrap';

export default function Personnel() {
 
  //map through the users to create the table 


  let DummyData = {
    User1: {
      Id: 1,
      Username: "Jesse",
      Role: "Admin",
    },
    User2: {
      Id: 2,
      Username: "Peter",
      Role: "Admin",
    },
    User3: {
      Id: 3,
      Username: "Peter",
      Role: "Admin",
    },
  };

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
                      <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Admin</td>
                      <td>
                        <Form.Select aria-label="Default select example">
                          <option>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </td>
                      </tr> 
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Users With Revoked Access</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
    // <Table striped bordered hover>
    //               <thead>
    //                 <tr>
    //                   <th>#</th>
    //                   <th>Username</th>
    //                   <th>Role</th>
    //                   <th>Change Role</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 <tr>
    //                   <td>1</td>
    //                   <td>Mark</td>
    //                   <td>Revoked Access</td>
    //                   <td>
    //                     <Form.Select aria-label="Default select example">
    //                       <option>Open this select menu</option>
    //                       <option value="1">Admin</option>
    //                       <option value="2">Project Manager</option>
    //                       <option value="3">Specialist</option>
    //                       <option value="4">Revoke Access</option>
    //                     </Form.Select>
    //                   </td>
    //                 </tr>
    //               </tbody>
    //             </Table>
  )
}
