import React, { useContext, useEffect } from "react";
import "./ProjectStyle.css";
import { nameOfIcon } from "react-icons/fa";
import UserContext from "../Context/UserContext";
import ModalContext from "../Context/ModalContext";
import useModal from "../Hooks/use-modal";
import useUser from "../Hooks/use-user";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare, faCheckCircle, faThumbsDown, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { GetTasksUsingProjectID, ChangeTaskStatus, deleteTask } from "../Services/DataServices";

export default function Project() {
  let { isAdmin, userId, token } = useContext(UserContext);

  let {
    show, setShow, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject, isEditTask, setIsEditTask,
    priorityOfProject, setpriorityOfProject, projectName, setProjectName,projectId, setProjectId, statusOfProject, setstatusOfProject, projectDueDate, setProjectDueDate, createProjectName, setCreateProjectName, createPriorityOfProject, setCreatePriorityOfProject,
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, createProjectDueDate, setCreateProjectDueDate,
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, createTaskName, setCreateTaskName, createTaskSpecialist, setCreateTaskSpecialist, createTaskDescription, setCreateTaskDescription,createTaskPriority, specialistId, setSpecialistId, setCreateTaskPriority,createTaskDueDate, setCreateTaskDueDate,  createTaskSpecialistId, setCreateTaskSpecialistId, taskId, setTaskId,
    specialist, setSpecialist, allProjects, setAllProjects, allProjectsByID, setAllProjectsByID, TasksProjectID,projectCode, isCreateTask, setIsCreateTask, setProjectCode, setTasksProjectID, projectTeam, setProjectTeam, createProjectDescription, setCreateProjectDescription
  } = useContext(ModalContext);

  useEffect(async () => {
    console.log(projectId);
    let tasks = await GetTasksUsingProjectID(projectId);
    console.log(tasks);
    if (tasks.length != 0) {
      setTasksProjectID(tasks)
      let team = [];
      let code = projectName.slice(0,3)
      console.log(code)
      setProjectCode(code)


      tasks.map((task) => team.push(task.specialistName));
      console.log(team);
      setProjectTeam(team);
    }
  }, []);

  const handleEditProject=()=>{
    setShow(true);
    setIsEditProject(true);
    setIsCreateProject(false)
  }

  const handleCreateTask=() => {
    setShow(true);
    setIsEditProject(false);
    setIsCreateProject(false)
    setIsCreateTask(true)
    setIsEditTask(false)
  }

  const handleEditTask=() => {
    setShow(true);
    setIsEditProject(false);
    setIsCreateProject(false)
    setIsCreateTask(false)
    setIsEditTask(true)
  }

const handleTaskStatusToDo = async(id) => {
  let result = ChangeTaskStatus(id ,"ToDo")
  console.log(result)
  if (result)
    {
      let tasks = await GetTasksUsingProjectID(projectId);
      console.log(tasks)
      if (tasks.length != 0) {
        setTasksProjectID(tasks)
      }
    }
}

const handleTaskStatusInProgress =async(id) => {
  let result = ChangeTaskStatus(id ,"InProgress")
  console.log(result)
  if(result)
  {
    
    let tasks = await GetTasksUsingProjectID(projectId);
    
    if (tasks.length != 0) {
      
      setTasksProjectID(tasks)
      console.log(result)
    }
    
  }
}

const handleTaskStatusCompleted =async(id) => {
  let result = ChangeTaskStatus(id ,"Completed")
  console.log(result)
  if(result)
  {
    let tasks = await GetTasksUsingProjectID(projectId);
    console.log(tasks)
    if (tasks.length != 0) {
      setTasksProjectID(tasks)
    }
  }
}

const handleDeleteTask = async (id) => {
 let result = await deleteTask(id)
 if(result)
  {
    let tasks = await GetTasksUsingProjectID(projectId);
    console.log(tasks)
    if (tasks.length != 0) {
      setTasksProjectID(tasks)
    }
  }

}

  return (
    <Container fluid className="p-0 project-dashboard-container">
      <div className="project-info-container">
        <Row className="project-title">
          <Col xs="10">
            <p>Project </p>
          </Col>
          <Col>
           <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditProject} />
          </Col>
        </Row>
        <Row className="project-content">
          <h6>{projectName}</h6>
        </Row>
        <Row className="project-title">
          <p>Description </p>
        </Row>
        <Row className="project-content">
          <p>
            {projectDescription} 
          </p>
        </Row>
        <Row className="project-title">
          <p>Priority </p>
        </Row>
        <Row className="project-content">
          <p>{priorityOfProject} </p>
        </Row>
        <Row className="project-title">
          <p>Due Date </p>
        </Row>
        <Row className="project-content">
          <p>{projectDueDate}</p>
        </Row>
        <div className="project-specialists">
          <Row className="project-title">
            <p>Team </p>
          </Row>
          <Row className="project-content">
            {projectTeam.map((person, idx) => (
              <h6 key={idx}>{person}</h6>
            ))}
          </Row>
        </div>
      </div>
      <div className="project-tasks-container">
        <div className="tasks-status-container">
          <p className="text-center project-title task-status">ToDo</p>

          <div className="status-container">
           
              <div className="create-task text-center"  onClick={handleCreateTask}>
                <FontAwesomeIcon icon={faPlus} /> create a new task
              </div>
            

            {/* Map Here */}

            {
                     TasksProjectID.map( (task, idx) => {
                            return(
                                task.statusOfTask=="ToDo"?
                <div key={idx} className="task-info">
                            <div className="task-title" >
                            <FontAwesomeIcon icon={faTrashCan} onClick={()=>handleDeleteTask(task.id)} />
                                <p className="m-0"><strong>{projectCode}{task.id+1}: </strong> {task.taskName}</p>
                                <FontAwesomeIcon icon={faPenToSquare} onClick={ () => 
                                {
                                  handleEditTask()
                                  setTaskName(task.taskName)
                                  setTaskId(task.id)
                                  setTaskDescription(task.taskDescription)
                                  setTaskStatus(task.statusOfTask)
                                  setTaskDueDate(task.taskDueDate)
                                  setTaskPriority(task.priorityOfTask)
                                  setTaskStatus(task.statusOfTask)
                                  console.log(task.statusOfTask)
                                  setSpecialist(task.specialistName)
                                  setSpecialistId(task.specialistId)
                                  
                                }} />

                            </div>

                            <Row className="p-1">
                                <Col xs="6">Due Date: {task.taskDueDate}</Col>
                                <Col xs="6" className="d-flex justify-content-center">
                                {task.priorityOfTask == "High"? <p className="task-priority redBg">{task.priorityOfTask} Priority</p>: task.priorityOfTask == "Medium"?  <p className="task-priority orangeBg">{task.priorityOfTask} Priority</p>:  <p className="task-priority greenBg">{task.priorityOfTask} Priority</p>}
                                
                                </Col>
                            </Row>
                            <Row>
                               <Col><p className="p-1">Description: {task.taskDescription}</p></Col>
                               </Row> 
                           <Row>
                               <Col xs="10"><p className="p-1 ">Specialist: {task.specialistName}</p></Col>
                               <Col xs="2" className="d-flex align-items-center"><FontAwesomeIcon className="todo" icon={faCheckCircle} onClick={()=>handleTaskStatusInProgress(task.id)}/></Col>
                           </Row>
                            </div>: null)

                     })
            }
           
            {/* End Map */}
          </div>
        </div>

        <div className="tasks-status-container greyBg">
          <p className="text-center project-title task-status">In Progress</p>

          <div className="status-container">
          {
                     TasksProjectID.map( (task, idx) => {
                            return(
                                task.statusOfTask=="InProgress"?
                <div key={idx} className="task-info">
                            <div className="task-title" >
                            <FontAwesomeIcon icon={faTrashCan} onClick={()=>handleDeleteTask(task.id)} />
                                <p className="m-0"><strong>{projectCode}{task.id+1}: </strong> {task.taskName}</p>
                                <FontAwesomeIcon icon={faPenToSquare} onClick={ () => 
                                {
                                  handleEditTask()
                                  setTaskName(task.taskName)
                                  setTaskId(task.id)
                                  setTaskDescription(task.taskDescription)
                                  setTaskStatus(task.statusOfTask)
                                  setTaskDueDate(task.taskDueDate)
                                  setTaskPriority(task.priorityOfTask)
                                  setTaskStatus(task.statusOfTask)
                                  console.log(task.statusOfTask)
                                  setSpecialist(task.specialistName)
                                  setSpecialistId(task.specialistId)
                                  
                                }} />
                            </div>

                            <Row className="p-1">
                                <Col xs="6">Due Date: {task.taskDueDate}</Col>
                                <Col xs="6" className="d-flex justify-content-center">
                                {task.priorityOfTask == "High"? <p className="task-priority redBg">{task.priorityOfTask} Priority</p>: task.priorityOfTask == "Medium"?  <p className="task-priority orangeBg">{task.priorityOfTask} Priority</p>:  <p className="task-priority greenBg">{task.priorityOfTask} Priority</p>}
                                
                                </Col>
                            </Row>
                            <Row>
                               <Col><p className="p-1">Description: {task.taskDescription}</p></Col>
                               </Row> 
                           <Row>
                               <Col xs="8"><p className="p-1 ">Specialist: {task.specialistName}</p></Col>
                               {
                                 isAdmin?<Col xs="2" className="d-flex align-items-center m-0"><FontAwesomeIcon className="todo" icon={faThumbsDown} onClick={()=>handleTaskStatusToDo(task.id)}/></Col>: null
                               }
                               
                               <Col xs="2" className="d-flex align-items-center"><FontAwesomeIcon className="inprogress" icon={faCheckCircle}  onClick={()=>handleTaskStatusCompleted(task.id)}/> </Col>
                           </Row>
                            </div>: null)

                     })
            }
          </div>
        </div>

        <div className="tasks-status-container">
          <p className="text-center project-title task-status">Completed</p>
          <div className="status-container">

          {
                     TasksProjectID.map( (task, idx) => {
                            return(
                                task.statusOfTask=="Completed"?
                <div key={idx} className="task-info">
                            <div className="task-title">
                            <FontAwesomeIcon icon={faTrashCan} onClick={()=>handleDeleteTask(task.id)} />
                                <p className="m-0"><strong>{projectCode}{task.id+1}: </strong> {task.taskName}</p>
                                <FontAwesomeIcon icon={faPenToSquare} onClick={ () => 
                                {
                                  handleEditTask()
                                  setTaskName(task.taskName)
                                  setTaskId(task.id)
                                  setTaskDescription(task.taskDescription)
                                  setTaskStatus(task.statusOfTask)
                                  setTaskDueDate(task.taskDueDate)
                                  setTaskPriority(task.priorityOfTask)
                                  setTaskStatus(task.statusOfTask)
                                  console.log(task.statusOfTask)
                                  setSpecialist(task.specialistName)
                                  setSpecialistId(task.specialistId)
                                }} />
                            </div>

                            <Row className="p-1">
                                <Col xs="6">Due Date: {task.taskDueDate}</Col>
                                <Col xs="6" className="d-flex justify-content-center">
                                {task.priorityOfTask == "High"? <p className="task-priority redBg">{task.priorityOfTask} Priority</p>: task.priorityOfTask == "Medium"?  <p className="task-priority orangeBg">{task.priorityOfTask} Priority</p>:  <p className="task-priority greenBg">{task.priorityOfTask} Priority</p>}
                                
                                </Col>
                            </Row>
                           <Row>
                               <Col><p className="p-1">Description: {task.taskDescription}</p></Col>
                               </Row> 
                           <Row>
                               <Col xs="8"><p className="p-1 ">Specialist: {task.specialistName}</p></Col>
                               {
                                 isAdmin?<Col xs="2" className="d-flex align-items-center m-0"><FontAwesomeIcon className="todo" icon={faThumbsDown} onClick={()=>handleTaskStatusToDo(task.id)}/></Col>: null
                               }
                               <Col xs="2" className="d-flex align-items-center"><FontAwesomeIcon className="completed" icon={faCheckCircle} /></Col>
                           </Row>
                            
                            </div>: null)

                     })
            }
          </div>
        </div>
      </div>
    </Container>
  );
}
