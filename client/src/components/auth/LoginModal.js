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
import { login } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

const LoginModal = () => {
  const [state, setState] = useState({
    modal: false,
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
    if (error.id === 'LOGIN_FAIL') {
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

    const { email, password } = state

    const user = {
      email,
      password
    }

    // attempt to login
    dispatch(login(user))
  }

  return (
    <div>
      <NavLink className='navbar-btn' onClick={toggle} href='#'>
        Login
      </NavLink>
      <Modal isOpen={state.modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          {state.msg ? <Alert color='danger'>{state.msg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
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
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default LoginModal
