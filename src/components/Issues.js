import React from 'react'
import IssueItem from './IssueItem'
import PropTypes from 'prop-types'

export default function Issues(props) {
    return (
        props.issues.map((issue) => (
            <IssueItem key={issue.id} issue={issue}/>
        ))
    )
}

Issues.propTypes = {
    issues: PropTypes.array.isRequired
}