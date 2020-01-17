import React, { useState, Fragment } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap'
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout'
import LoginModal from './auth/LoginModal'
import { useSelector } from 'react-redux'

const Header = () => {
  const [state, setstate] = useState(false)
  const auth = useSelector(state => state.auth)
  const toggle = () => setstate(!state)

  const authLinks = (
    <Fragment>
      <NavItem>
        <span className='navbar-text mr-3'>
          <strong>{auth.user ? `Welcome ${auth.user.name}` : ''}</strong>
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  )

  return (
    <Navbar color='dark' dark expand='sm' className='mb-5'>
      <Container>
        <NavbarBrand href='/'>Issue Tracker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={state} navbar>
          <Nav className='ml-auto' navbar>
            {auth.isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
