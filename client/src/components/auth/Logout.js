import React, { Fragment } from 'react'
import { logout } from '../../actions/authActions'
import { useDispatch } from 'react-redux'
import { NavLink } from 'reactstrap'

const Logout = () => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(logout())
  }

  return (
    <Fragment>
      <NavLink onClick={onClick} href='#'>
        Logout
      </NavLink>
    </Fragment>
  )
}

export default Logout
