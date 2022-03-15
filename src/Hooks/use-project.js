import {useState} from 'react';

export default function useUser(){
    const [project, setProject] = useState('');
    const [projectId, setProjectId] = useState('');

    return {project, setProject, projectId, setProjectId }
}