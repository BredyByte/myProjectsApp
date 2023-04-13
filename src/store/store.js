import projectsReducer from './projectsSlice';
import { configureStore } from '@reduxjs/toolkit';
// import { logger } from 'redux-logger/src';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    projects: projectsReducer
  },
  middleware: [thunk]
})