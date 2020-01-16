// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function CreateIssue() {
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [severity, setSeverity] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(subject, description, severity)
    setSubject('')
    setDescription(' ')
    setSeverity(0)
  }

  return (
    <div className='newEntry'>
      <h1>Create a new entry</h1>
      <form onSubmit={onSubmit}>
        Subject: <input type='text' name='subject' value={subject} onChange={e => setSubject(e.target.value)} required></input><br />
        Description: <textarea rows='40' className='newEntryInput' value={description} onChange={e => setDescription(e.target.value)} style={{ height: '200px', verticalAlign: 'top' }} ></textarea><br />
        Severity: <input type='number' name='severity' value={severity} onChange={e => setSeverity(e.target.value)} style={{ width: '40px', textAlign: 'center' }} required></input>(1: Low, 2: Medium, 3:High)<br />
        <input type='submit' value='Submit' style={{ padding: '5px' }}></input>
      </form>
      <Link to='/'><button style={{ cursor: 'pointer', padding: '5px' }}>Cancel</button></Link>
    </div>
  )
}
