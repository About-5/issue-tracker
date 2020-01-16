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
        // props.issue.severity === 3
        //   ? '#f00'
        //   : props.issue.severity === 2
        //   ? '#ffa500'
        '#ff0'
    }
  }

  return (
    <div className='issueItem'>
      <p style={{ width: '2.5%', paddingLeft: '5px' }}>id</p>
      <div style={getColor()}></div>
      <p style={{ width: '65%' }}>subject</p>
      <p style={{ width: '24.5%' }}>author</p>
      <p style={{ minWidth: '85px' }}>status</p>
    </div>
  )
}

export default IssueItem
