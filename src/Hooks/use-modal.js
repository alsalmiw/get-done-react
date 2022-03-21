import React, {useState} from 'react'

export default function useModal() {

    const [show, setShow] = useState(false);
   // const [isEdit, setIsEdit]=useState(false);
    //const [isProjectView, setIsProjectView]=useState(false);
    const [isCreateProject, setIsCreateProject]=useState(false);
    const [isEditProject, setIsEditProject]=useState(false);
    const [isCreateTask, setIsCreateTask]=useState(false);
   // const [isTaskView, setIsTaskView]=useState(false);
    const [isEditTask, setIsEditTask]=useState(true);

    const [allProjects, setAllProjects] = useState([])
    const [allProjectsByID, setAllProjectsByID]=useState([])
    const [projectTeam, setProjectTeam]=useState([])
    const [TasksProjectID, setTasksProjectID]=useState([])

    const [createProjectName, setCreateProjectName] = useState("");
    const [createPriorityOfProject, setCreatePriorityOfProject] = useState("");
    const [createProjectDueDate, setCreateProjectDueDate] = useState("");
    const [createProjectDescription, setCreateProjectDescription] = useState("");


    const [projectId, setProjectId]=useState(0);
    const [isProjectDeleted, setIsProjectDeleted]=useState(false);
    const [isProjectArchived, setIsProjectArchived]=useState(false)
    const [priorityOfProject, setpriorityOfProject] = useState("ToDo");
    const [projectName, setProjectName] = useState("");
    const [statusOfProject, setstatusOfProject] = useState("");
    const [projectDueDate, setProjectDueDate] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectCode, setProjectCode] = useState("");

    const [createTaskName, setCreateTaskName] = useState("");
    const [createTaskDescription, setCreateTaskDescription] = useState("");
    const [createTaskPriority, setCreateTaskPriority] = useState("");
    const [createTaskDueDate, setCreateTaskDueDate] = useState("");
    const [createTaskSpecialist, setCreateTaskSpecialist] = useState("")
    const [createTaskSpecialistId, setCreateTaskSpecialistId] = useState("")

    const [taskId, setTaskId] = useState("");
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskPriority, setTaskPriority] = useState("");
    const [taskDueDate, setTaskDueDate] = useState("");
    const [taskStatus, setTaskStatus] = useState("");
    const [isTaskDeleted, setIsTaskDeleted] = useState(false);
    // const [isArchived, setIsArchived] = useState(false);
    const [specialist, setSpecialist] = useState('')
    const [specialistId, setSpecialistId] = useState('')
    


  return {show, setShow, isCreateProject, setIsCreateProject, isEditProject, setIsEditProject, isEditTask, setIsEditTask,
    priorityOfProject, setpriorityOfProject, projectName, setProjectName,projectId, setProjectId, statusOfProject, setstatusOfProject, projectDueDate, setProjectDueDate, createProjectName, setCreateProjectName, createPriorityOfProject, setCreatePriorityOfProject,
    projectDescription, setProjectDescription, isProjectDeleted, setIsProjectDeleted, isProjectArchived, setIsProjectArchived, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, createProjectDueDate, setCreateProjectDueDate,
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, createTaskName, setCreateTaskName, createTaskSpecialist, setCreateTaskSpecialist, createTaskDescription, setCreateTaskDescription,createTaskPriority, specialistId, setSpecialistId, setCreateTaskPriority,createTaskDueDate, setCreateTaskDueDate,  createTaskSpecialistId, setCreateTaskSpecialistId, taskId, setTaskId,
    specialist, setSpecialist, allProjects, setAllProjects, allProjectsByID, setAllProjectsByID, TasksProjectID,projectCode, isCreateTask, setIsCreateTask, setProjectCode, setTasksProjectID, projectTeam, setProjectTeam, createProjectDescription, setCreateProjectDescription}
}
