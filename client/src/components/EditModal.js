import React, { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { updateIssue } from '../actions/issueActions'

const EditModal = props => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)
  const [state, setState] = useState(props.issue)

  const toggle = () => {
    setModal(!modal)
  }

  const onSubmit = e => {
    e.preventDefault()

    const editIssue = {
      _id: state._id,
      subject: state.subject,
      description: state.description,
      severity: state.severity,
      author: state.author,
      status: state.status
    }

    dispatch(updateIssue(editIssue))

    toggle()
  }

  return (
    <div>
      {auth.isAuthenticated && (
        <Button color='dark' className='modalBtn' onClick={toggle}>
          Edit
        </Button>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Issue</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='subject'>Subject</Label>
              <Input
                type='text'
                name='subject'
                id='issue'
                value={state.subject}
                className='mb-2'
                onChange={e =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
              <Label for='description'>Description</Label>
              <Input
                type='textarea'
                name='description'
                id='issue'
                value={state.description}
                className='mb-2'
                onChange={e =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
              <Label for='severity'>Severity</Label>
              <Input
                type='number'
                name='severity'
                id='issue'
                value={state.severity}
                className='mb-2'
                min={1}
                max={3}
                onChange={e =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
              <Label for='status'>Status</Label>
              <Input
                type='number'
                name='status'
                id='issue'
                value={state.status}
                className='mb-2'
                min={1}
                max={2}
                onChange={e =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
              <Button color='dark' style={{ marginTop: '2rem' }} block>
                Edit Issue
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default EditModal
