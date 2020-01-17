import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import { loadUser } from './actions/authActions'
import { useDispatch } from 'react-redux'

import Header from './components/Header'
import Issues from './components/Issues'
import IssueModal from './components/IssueModal'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser)
  })
  return (
    <div className='app'>
      <div className='issuesContainer'>
        <Header />
        <Issues />
        <IssueModal />
      </div>
    </div>
  )
}

export default App
