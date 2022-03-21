import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default function ProjectSnippitComponent({project, idx}) {
//console.log(project)
  
  return (
    <div key={idx} className='snippit-container'>
        <Row><h4>{project.projectName}</h4></Row>
        <Row><h6>{project.projectDescription}</h6></Row>
        <Row><h6>Due Date {project.projectDueDate}</h6></Row>
        <Row><h6> {project.priorityOfProject=="High"? <span className="red">{project.priorityOfProject} Priority</span>: project.priorityOfProject=="Medium"?<span className="orange">{project.priorityOfProject} Priority</span>: <span className="green">{project.priorityOfProject} Priority</span>} </h6></Row>
    </div>
  )
}
