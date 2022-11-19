import { chart } from '../types';


export const setChart = chartData => ({
  type: chart.SET_CHART,
  chartData
});
