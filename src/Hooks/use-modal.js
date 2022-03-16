import React, {useState} from 'react'

export default function useModal() {

    const [show, setShow] = useState(false);
    const [isEdit, setIsEdit]=useState(false);
    const [isProjectView, setIsProjectView]=useState(false);
    const [isTaskView, setIsTaskView]=useState(false);
    const [isTaskEdit, setIsTaskEdit]=useState(false);


  return {show, setShow, isEdit, setIsEdit, isProjectView, setIsProjectView, isTaskView, 
    setIsTaskView, isTaskEdit, setIsTaskEdit}
}
