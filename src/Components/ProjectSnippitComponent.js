import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default function ProjectSnippitComponent() {
  return (
    <div className='snippit-container'>
        <Row><h5>Project Title</h5></Row>
        <Row><h7>Project Description</h7></Row>
        <Row><h7>Project Due Date</h7></Row>
        <Row><h7>Project Priority</h7></Row>
    </div>
  )
}
