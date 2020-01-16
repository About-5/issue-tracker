import React from 'react'

export default function Header(props) {
  // const sortItems = (e) => {
  //     return props.issues.sort((b, a) => a - b)
  // }

  return (
    <div className='header'>
      <span style={{ paddingTop: '12px' }}>
        <button className='headerBtn' style={{ width: '70%' }}>
          Subject
        </button>
        <button className='headerBtn' style={{ width: '25%' }}>
          Author
        </button>
        <button className='headerBtn' style={{ width: '5%' }}>
          Status
        </button>
      </span>
    </div>
  )
}
