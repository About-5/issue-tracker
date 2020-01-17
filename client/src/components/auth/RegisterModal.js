import React, { useState, useEffect, useCallback } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

const RegisterModal = () => {
  const [state, setState] = useState({
    modal: false,
    name: '',
    email: '',
    password: '',
    msg: null
  })

  const dispatch = useDispatch()
  const error = useSelector(state => state.error)
  const auth = useSelector(state => state.auth)

  const toggle = useCallback(() => {
    dispatch(clearErrors())
    setState(state => ({ ...state, modal: !state.modal }))
  }, [dispatch])

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') {
      setState(state => ({ ...state, msg: error.msg.msg }))
    } else {
      setState(state => ({ ...state, msg: null }))
    }
    if (state.modal && auth.isAuthenticated) {
      toggle()
    }
  }, [error, auth, toggle, state.modal])

  const onSubmit = e => {
    e.preventDefault()

    const newUser = {
      name: state.name,
      email: state.email,
      password: state.password
    }

    dispatch(registerUser(newUser))
  }

  return (
    <div>
      <NavLink onClick={toggle} href='#'>
        Register
      </NavLink>
      <Modal isOpen={state.modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          {state.msg ? <Alert color='danger'>{state.msg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                className='mb-3'
                onChange={e =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className='mb-3'
                onChange={e =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />
              <Label for='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='mb-3'
                onChange={e =>
                  setState({ ...state, [e.target.name]: e.target.value })
                }
              />

              <Button color='dark' style={{ marginTop: '2rem' }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default RegisterModal
