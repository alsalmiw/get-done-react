import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default function ProjectSnippitComponent() {
  return (
    <div className='snippit-container'>
        <Row><h5>Project Title</h5></Row>
        <Row><h5>Project Description</h5></Row>
        <Row><h5>Project Due Date</h5></Row>
        <Row><h5>Project Priority</h5></Row>
    </div>
  )
}
