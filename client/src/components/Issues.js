import React, { useEffect } from 'react'
import IssueItem from './IssueItem'
import { useSelector, useDispatch } from 'react-redux'
import { getIssues } from '../actions/issueActions'

const Issues = () => {
  const issues = useSelector(state => state.issue.issues)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIssues())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return issues.map(issue => <IssueItem key={issue._id} issue={issue} />)
}

export default Issues
