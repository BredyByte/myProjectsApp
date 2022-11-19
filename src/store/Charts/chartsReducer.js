import {
  chart
} from '../types'

const initialState = {
  data: []
}

export const chartsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case chart.CHARTS_REJECTED:
      return {
        ...state,
      }
    case chart.SET_CHART:
      return {
        ...state,
        data: [
          ...state.data,
           action.chartData
        ]
      }
    default:
      return state
  }
}