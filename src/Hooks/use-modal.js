import React, {useState} from 'react'

export default function useModal() {

    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit]=useState(false);
    const [isProjectView, setIsProjectView]=useState(false);
    const [isCreateProject, setIsCreateProject]=useState(false);
    const [isEditProject, setIsEditProject]=useState(false);
    const [isTaskView, setIsTaskView]=useState(false);
    const [isTaskEdit, setIsTaskEdit]=useState(false);

    const [allProjects, setAllProjects] = useState([])
    const [allProjectsByID, setAllProjectsByID]=useState([])

    const [projectId, setProjectId]=useState(0);
    const [isProjectDeleted, setIsProjectDeleted]=useState(false);
    const [isProjectArchived, setIsProjectArchived]=useState(false)
    const [priorityOfProject, setpriorityOfProject] = useState("ToDo");
    const [projectName, setProjectName] = useState("");
    const [statusOfProject, setstatusOfProject] = useState("");
    const [projectDueDate, setProjectDueDate] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskPriority, setTaskPriority] = useState("low");
  
    const [taskDueDate, setTaskDueDate] = useState("");
    const [taskStatus, setTaskStatus] = useState("");
    const [isTaskDeleted, setIsTaskDeleted] = useState(false);
    const [isArchived, setIsArchived] = useState(false);
    const [specialist, setSpecialist] = useState('')


  return {show, setShow, isEdit, setIsEdit, isProjectView, setIsProjectView, isTaskView, 
    setIsTaskView, isTaskEdit, setIsTaskEdit, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject,
    priorityOfProject, setpriorityOfProject, projectName, setProjectName,projectId, setProjectId, statusOfProject, setstatusOfProject, projectDueDate, setProjectDueDate,
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, 
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, isArchived, setIsArchived,
    specialist, setSpecialist, allProjects, setAllProjects, allProjectsByID, setAllProjectsByID}
}
