import axios from 'axios'
import { GET_ISSUES, ADD_ISSUE, DELETE_ISSUE, ISSUES_LOADING } from './types'
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'

export const getIssues = () => dispatch => {
  dispatch(setIssuesLoading())
  axios
    .get('/api/issues')
    .then(res =>
      dispatch({
        type: GET_ISSUES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

export const addIssue = issue => (dispatch, getState) => {
  axios
    .post('/api/issues', issue, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ISSUE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

export const deleteIssue = id => (dispatch, getState) => {
  axios
    .delete(`/api/issues/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ISSUE,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

export const setIssuesLoading = () => {
  return {
    type: ISSUES_LOADING
  }
}
