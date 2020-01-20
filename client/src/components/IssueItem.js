import React, { useState } from 'react'
import {
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteIssue } from '../actions/issueActions'
import EditModal from './EditModal'

const IssueItem = props => {
  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const toggle = () => {
    setModal(!modal)
  }

  const toggleDelete = () => {
    setDeleteModal(!deleteModal)
  }

  const getSeverity = () => {
    let severity =
      props.issue.severity === 3
        ? 'High'
        : props.issue.severity === 2
        ? 'Medium'
        : 'Low'
    return severity
  }

  const getDate = () => {
    let date = new Date(props.issue.date)
    date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    return date
  }

  const getStatus = () => {
    let status = props.issue.status === 2 ? 'Complete' : 'In progress'
    return status
  }

  const confirmDelete = () => {
    dispatch(deleteIssue(props.issue._id))
  }

  const getColor = () => {
    return {
      display: 'inline-block',
      marginRight: '10px',
      borderRadius: '2px',
      height: '10px',
      width: '20px',
      background:
        props.issue.severity === 3
          ? '#f00'
          : props.issue.severity === 2
          ? '#ffa500'
          : '#ff0'
    }
  }

  return (
    <div>
      <ListGroupItem className='issueItem' onClick={toggle}>
        <div style={getColor()}></div>
        {props.issue.subject}
      </ListGroupItem>
      <Modal isOpen={modal} toggle={toggle} size='lg'>
        <ModalHeader toggle={toggle}>{props.issue.subject}</ModalHeader>
        <ModalBody className='issueModal'>
          <ListGroup className='mb-3'>
            <ListGroupItem>
              Description: {props.issue.description}
            </ListGroupItem>
            <ListGroupItem>Author: {props.issue.author}</ListGroupItem>
            <ListGroupItem>Date Created: {getDate()}</ListGroupItem>
            <ListGroupItem>Severity: {getSeverity()}</ListGroupItem>
            <ListGroupItem>Status: {getStatus()}</ListGroupItem>
          </ListGroup>
          {auth.isAuthenticated && (
            <ListGroup className='btnModal'>
              <Button
                color='danger'
                className='modalBtn'
                onClick={toggleDelete}
              >
                Delete Issue
              </Button>
              <EditModal issue={props.issue} />
            </ListGroup>
          )}
          <Modal isOpen={deleteModal} toggle={toggleDelete}>
            <ModalHeader>Delete</ModalHeader>
            <ModalBody>Are you sure you want to delete?</ModalBody>
            <ListGroup className='btnModal'>
              <Button
                color='danger'
                className='deleteModalBtn'
                onClick={confirmDelete}
              >
                Delete
              </Button>
              <Button className='deleteModalBtn' onClick={toggleDelete}>
                Cancel
              </Button>
            </ListGroup>
          </Modal>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default IssueItem
