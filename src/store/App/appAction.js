import { app } from '../types';

const isInitialized = () => ({
  type: app.IS_INITIALIZED
})

export const initialize = () => dispatch => {
  dispatch({
    type: "GET_CHARTS",
    payload: {
      bitcoin: {
        api: "https://financialmodelingprep.com/api/v3/historical-chart/15min/AAPL?apikey=eac2a5a15a21abfd4e60020fb2224475&limit=120",
        num: 10,
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum dolor eos minima nemo nostrum odit quia tempora veritatis.",
        title: "Bitcoin",
        label: "Bitcoin Chart",
        chartType: "Line",
        additional: true
      },
      balance: {
        api: "https://financialmodelingprep.com/api/v3/balance-sheet-statement-as-reported/AAPL?limit=10&apikey=eac2a5a15a21abfd4e60020fb2224475",
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum dolor eos minima nemo nostrum odit quia tempora veritatis.",
        title: "Balance Sheet Statement",
        label: "Balance Sheet Statement",
        chartType: "Line",
        additional: false
      }
    }
  });
}