import React, { useState } from 'react'
import IssueItem from './IssueItem'
import { useSelector } from 'react-redux'

const Issues = () => {
  const issues = useSelector(state => state.issue)
  return issues.issues.map(issue => <IssueItem key={issue.id} issue={issue} />)
}

export default Issues
