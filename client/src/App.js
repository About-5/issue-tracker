import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Issues from './components/Issues'
import CreateIssue from './components/CreateIssue'

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'

function App() {
  return (
    <div className='app'>
      <Router>
        <Route exact path='/'>
          <div className='issuesContainer'>
            <Header />
            <Issues />
            <Link to='/create'>
              <button className='createButton'>Create Entry</button>
            </Link>
          </div>
        </Route>
        <Route path='/create'>
          <CreateIssue />
        </Route>
      </Router>
    </div>
  )
}

export default App
