import { combineReducers } from '@reduxjs/toolkit'
import usersReducer from './mainSlice'

const rootReducer = combineReducers ({
    user: usersReducer,
  });
  
  export default rootReducer;