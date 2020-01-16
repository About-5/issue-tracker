import React, { useState } from 'react'
import IssueItem from './IssueItem'
import { useSelector } from 'react-redux'

const Issues = () => {
  const issues = useSelector(state => state.issue)
  console.log(issues.issues)
  return issues.issues.map(issue => <IssueItem key={issue.id} />)
}

export default Issues
