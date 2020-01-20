import React, { useEffect } from 'react'
import IssueItem from './IssueItem'
import { useSelector, useDispatch } from 'react-redux'
import { getIssues } from '../actions/issueActions'
import { ListGroup, Container } from 'reactstrap'
import IssueModal from './/IssueModal'

const Issues = () => {
  const issues = useSelector(state => state.issue.issues)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getIssues())
  }, [dispatch])

  return (
    <Container>
      <ListGroup>
        {issues.map(issue => (
          <IssueItem key={issue._id} issue={issue} />
        ))}
      </ListGroup>
      <IssueModal className='ml-1' />
    </Container>
  )
}

export default Issues
