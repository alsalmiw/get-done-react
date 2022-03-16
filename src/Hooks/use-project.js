import {useState} from 'react';

export default function useUser(){
    const [project, setProject] = useState('');
    const [projectId, setProjectId] = useState('');
    const [userProjects, setUserProjects] = useState([])

    

    return {project, setProject, projectId, setProjectId }
}