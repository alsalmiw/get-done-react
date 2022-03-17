import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default function ProjectSnippitComponent() {
  return (
    <div className='snippit-container'>
        <Row><h5>Project Title</h5></Row>
        <Row><h6>Project Description</h6></Row>
        <Row><h6>Project Due Date</h6></Row>
        <Row><h6>Project Priority</h6></Row>
    </div>
  )
}
