import { combineReducers } from 'redux';
import { chartsReducer } from './Charts/chartsReducer';
import { appReducer } from './App/appReducer';

export const rootReducer = combineReducers({
  charts: chartsReducer,
  app: appReducer
});

export default rootReducer;