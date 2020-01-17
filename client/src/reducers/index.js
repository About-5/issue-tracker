import { combineReducers } from 'redux'
import issueReducer from './issueReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
  issue: issueReducer,
  error: errorReducer,
  auth: authReducer
})
