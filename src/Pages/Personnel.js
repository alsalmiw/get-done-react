import React, { useEffect, useState, useContext } from 'react'
import { Container, Row, Col, Table, Form, Accordion, Button } from 'react-bootstrap';
import UserContext from "../Context/UserContext";
import { DeleteUser, ChangeRole, ChangeRevokeUserAccess, GetAllUsersInfo } from "../Services/DataServices";

function Personnel() {
  let { username, setUsername, userId, setUserId, isAdmin, setIsAdmin, password, setPassword, isOwner, setIsOwner, token, setToken, allUsers, setAllUsers } = useContext(UserContext);

  //map through the users to create the table 

  //The data has to be an array for the map method to
  // let DummyData = [
  //   { Id: 1, Username: "Walaa", isAdmin: false, isOwner: true, isRevoked: false },
  //   { Id: 2, Username: "Jamie", isAdmin: true, isOwner: false, isRevoked: false },
  //   { Id: 3, Username: "John", isAdmin: true, isOwner: false, isRevoked: true },
  //   { Id: 4, Username: "Peter", isAdmin: true, isOwner: false, isRevoked: false },
  //   { Id: 5, Username: "Jesse", isAdmin: true, isOwner: false, isRevoked: false },
  //   { Id: 6, Username: "An", isAdmin: false, isOwner: false, isRevoked: false },
  //   { Id: 7, Username: "aaa", isAdmin: false, isOwner: false, isRevoked: false },
  //   { Id: 8, Username: "Hector", isAdmin: true, isOwner: false, isRevoked: true }
  // ];
  //Owner is an Admin, isAdmin is a project manager

  useEffect(async () => {
    let personnel = await GetAllUsersInfo();
    
    if(personnel.length!=0)
    {
      setAllUsers(personnel)
    }
    // SetUserPersonnel(DummyData);
  }, [])

  const handleUserRole = async(id) => {
    //ChangeRole  id
    let result  = await ChangeRole(id)
    console.log(result)
    if(result)
    {
      let personnel = await GetAllUsersInfo();
    if(personnel.length!=0)
    {
      setAllUsers(personnel)
    }
    }
    
  }

  const handleRevokeAccess = async(id) => {
    let result  = await ChangeRevokeUserAccess(id)
    if(result)
    {
      let personnel = await GetAllUsersInfo();
    if(personnel.length!=0)
    {
      setAllUsers(personnel)
    }
    }
  }

  const handleReturnAccess = async(id) => {
    //ChangeRevokeUserAccess id
      //admins cannot revoke another admins use
      let result  = await ChangeRevokeUserAccess(id)
      console.log(result)
      if(result)
      {
        let personnel = await GetAllUsersInfo();
      if(personnel.length!=0)
      {
        setAllUsers(personnel)
      }
      }
  }

  const handleRemoveUser = async(username) => {
    //DeleteUser username
    let result  = await DeleteUser(username)
    console.log(result)
    if(result)
    {
      let personnel = await GetAllUsersInfo();
    if(personnel.length!=0)
    {
      setAllUsers(personnel)
    }
    }
  }


  // const [Personnel, SetUserPersonnel] = useState([]);

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
                      allUsers.map((user, i) => {
                        return (
                          user.isRevoked === false ?
                            <tr key={i}>
                              <td className="text-center">{user.Id}</td>
                              <td className="text-center">{user.username}</td>
                              <td className="text-center">
                                {
                                  user.isOwner == true ? "Owner" :
                                    user.isAdmin == true ? "Admin" : "Specialist"
                                }
                              </td>
                              <td className="text-center">
                                {
                                  user.isOwner == false ?
                                    <Button variant="primary" onClick={()=>handleUserRole(user.id)}>
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
                                    <Button variant="danger" onClick={()=>handleRevokeAccess(user.id)}>Revoke Access</Button>
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
                      allUsers.map((user, i) => {
                        return (
                          user.isRevoked === true ?
                            <tr key={i}>
                              <td className="text-center">{user.Id}</td>
                              <td className="text-center">{user.username}</td>
                              <td className="text-center">
                                {
                                  user.isAdmin == true ? "Manager" : "Specialist"
                                }
                              </td>
                              <td className="text-center">
                                <Button variant="primary" onClick={()=>handleReturnAccess(user.id)}>Give User Access</Button>
                              </td>
                              <td className="text-center">
                                <Button variant="danger" onClick={()=>handleRemoveUser(user.username)}>Remove User</Button>
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