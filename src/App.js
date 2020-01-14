// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Issues from './components/Issues'
import CreateIssue from './components/CreateIssue'
import './css/App.css';

function App() {
  // eslint-disable-next-line
  const [issues, setIssues] = useState([
  { 
    "id": "1", 
    "author": "John Doe",
    "data": "new Date()",
    "subject": "fdsasdff", 
    "description": "",
    "severity": 2,
    "status": "Completed"
  },
  { 
    "id": "2", 
    "author": "Amy Adams",
    "data": "new Date()",
    "subject": "beafdf", 
    "severity": 1,
    "status": "in progress" 
  }, 
  { 
    "id": "3",
    "author": "Jane Smith",
    "date": "new Date()",
    "subject": "asdfasdf", 
    "severity": 0,
    "status": "in progress" 
  },
  { 
    "id": "3",
    "author": "Jane Smith",
    "date": "new Date()",
    "subject": "asdfasdf", 
    "severity": 3,
    "status": "in progress" 
  }
])

    return (
      <div className='app'>
        <Router>
          <Route exact path='/'>
            <div className='issuesContainer'>
              <Header />
              <Issues issues={issues}/>
              <Link to='/create'><button className='createButton'>Create Entry</button></Link>
            </div>
          </Route>
          <Route path='/create'>
              <CreateIssue />
          </Route>
        </Router>
      </div>
    );
}

export default App;
