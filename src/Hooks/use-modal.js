import React, {useState} from 'react'

export default function useModal() {

    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit]=useState(false);
    const [isProjectView, setIsProjectView]=useState(false);
    const [isCreateProject, setIsCreateProject]=useState(false);
    const [isEditProject, setIsEditProject]=useState(false);
    const [isTaskView, setIsTaskView]=useState(false);
    const [isTaskEdit, setIsTaskEdit]=useState(false);

    const [projectPriority, setProjectPriority] = useState("ToDo");
    const [projectName, setProjectName] = useState("");
    const [projectStatus, setProjectStatus] = useState("");
    const [projectDueDate, setprojectDueDate] = useState("");
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
    projectPriority, setProjectPriority, projectName, setProjectName, projectStatus, setProjectStatus, projectDueDate, setprojectDueDate,
    projectDescription, setProjectDescription, taskName, setTaskName, taskDescription, setTaskDescription, taskPriority, setTaskPriority, 
    taskDueDate, setTaskDueDate, taskStatus, setTaskStatus, isTaskDeleted, setIsTaskDeleted, isArchived, setIsArchived,
    specialist, setSpecialist}
}
