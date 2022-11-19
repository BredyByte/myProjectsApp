import { app } from '../types'

const initialState = {
  initialized: false
}

export const appReducer = ( state = initialState, action) => {
  switch(action.type) {
    case app.IS_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default: return state
  }
}