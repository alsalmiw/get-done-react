import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default function ProjectSnippitComponent({project, idx}) {

  
  return (
    <div key={idx} className='snippit-container'>
        <Row><h4>{project.projectName}</h4></Row>
        <Row><h6>{project.projectDescription}</h6></Row>
        <Row><h6>Due Date {project.projectDueDate}</h6></Row>
        <Row><h6> {project.projectPriority=="High"? <span className="red">{project.projectPriority} Priority</span>: project.projectPriority=="Medium"?<span className="orange">{project.projectPriority} Priority</span>: <span className="green">{project.projectPriority} Priority</span>} </h6></Row>
    </div>
  )
}
