import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import { loadUser } from './actions/authActions'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Issues from './components/Issues'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser)
  })

  return (
    <div className='app'>
      <Header />
      <Issues />
    </div>
  )
}

export default App
