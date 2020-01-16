import { GET_ISSUES, ADD_ISSUE, DELETE_ISSUE } from './types'

export const getIssues = () => {
  return {
    type: GET_ISSUES
  }
}
