import { GET_ISSUES, ADD_ISSUE, DELETE_ISSUE } from '../actions/types'

const initialState = {
  issues: [
    {
      id: '1',
      author: 'John Doe',
      data: 'new Date()',
      subject: 'fdsasdff',
      description: '',
      severity: 2,
      status: 'Completed'
    },
    {
      id: '2',
      author: 'Amy Adams',
      data: 'new Date()',
      subject: 'beafdf',
      severity: 1,
      status: 'in progress'
    },
    {
      id: '3',
      author: 'Jane Smith',
      date: 'new Date()',
      subject: 'asdfasdf',
      severity: 0,
      status: 'in progress'
    },
    {
      id: '4',
      author: 'Jane Smith',
      date: 'new Date()',
      subject: 'asdfasdf',
      severity: 3,
      status: 'in progress'
    }
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state
      }
    case ADD_ISSUE:
      return
    default:
      return state
  }
}
