import {
  GET_ISSUES,
  ADD_ISSUE,
  DELETE_ISSUE,
  ISSUES_LOADING
} from '../actions/types'

const initialState = {
  issues: [],
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES:
      return {
        ...state,
        issues: action.payload,
        loading: false
      }
    case DELETE_ISSUE:
      return {
        ...state,
        issues: state.issues.filter(issue => issue._id !== action.payload)
      }
    case ADD_ISSUE:
      return {
        ...state,
        issues: [action.payload, ...state.issues]
      }
    case ISSUES_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
