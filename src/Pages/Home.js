import React, {useContext, useEffect} from 'react'
import ProjectSnippitComponent from '../Components/ProjectSnippitComponent';
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";


export default function Home() {
  let navigate = useNavigate();
  let {token} = useContext(UserContext);
  useEffect(()=> {

     if (token == null)
  {
    navigate('/login');
  }
  
  },[])

 
  

  return (
   
    <div className='project-snippit-container'>
    
    <ProjectSnippitComponent />
    <ProjectSnippitComponent />
    <ProjectSnippitComponent />
    <ProjectSnippitComponent />
    </div>
    
  )
}
