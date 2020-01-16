import React from 'react'

const IssueItem = props => {
  const getColor = () => {
    return {
      marginTop: '20px',
      marginRight: '1%',
      borderRadius: '2px',
      height: '10px',
      width: '20px',
      background:
        props.issue.severity === 3
          ? '#f00'
          : props.issue.severity === 2
          ? '#ffa500'
          : '#ff0'
    }
  }

  return (
    <div className='issueItem'>
      <div style={getColor()}></div>
      <p style={{ width: '70%' }}>{props.issue.subject}</p>
      <p style={{ width: '25%' }}>{props.issue.author}</p>
      <p style={{ minWidth: '85px' }}>{props.issue.status}</p>
    </div>
  )
}

export default IssueItem
