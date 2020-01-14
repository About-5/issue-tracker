// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function CreateIssue() {
    const [issue, setIssue] = useState([{ subject: '', description: '', severity: 0 }])

    function onSubmit(e) {
        e.preventDefault()
        console.log(issue)
    }

    function onChange(e) {
        setIssue({
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='newEntry'>
            <h1>New Entry</h1>
            <form onSubmit={onSubmit}>
                Subject: <input type='text' className='newEntryInput' value={issue.subject} onChange={onChange} required></input><br/>
                Description: <textarea rows='40' className='newEntryInput' value={issue.description} style={{height:'200px',verticalAlign:'top'}} ></textarea><br/>
                Severity: <input type='number'  value={issue.severity} onChange={onChange} style={{width:'40px',textAlign:'center'}} required></input>(1: Low, 2: Medium, 3:High)<br/>
                <input type='submit' value='Submit' style={{padding:'5px'}}></input>
            </form>
            <Link to='/'><button style={{cursor:'pointer',padding:'5px'}}>Cancel</button></Link>
        </div>
    )
}
