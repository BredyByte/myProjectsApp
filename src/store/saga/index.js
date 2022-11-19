import { chart } from '../types';
import { setChart } from '../Charts/chartsAction';
import { showLoader, hideLoader } from '../App/appAction'
import { call, put, takeEvery, fork, all } from 'redux-saga/effects';
import moment from 'moment';

const fetchData = (link) => fetch(`${link}`).then(res => res.json());

const createTemplate = (payload, data, labels) => {
  return {
    chart: {
      labels: labels,
      datasets: [{
        label: payload.label,
        data: data,
        backgroundColor: [
          "#4bc0c0",
          "#ecf0f1",
          "#f396ff",
          "#f3ba2f",
          "#2a71d0",
          "#fffca0",
          "#ff5a90"
        ],
        borderColor: "black",
        borderWidth: 2
      }]
    },
    id: payload.id,
    title: payload.title,
    text: payload.text,
    chartType: payload.chartType,
    additional: payload.additional
  }
}

function* getBitcoin(payload) {
  try {
    const response = yield call(fetchData, payload.api);
    let data = [];
    let labels = [];
    for(let i = 0; i < response.length; i++) {
      data.unshift(response[i].volume);
      labels.unshift(moment(response[i].data).format("LL"));
      if(i === (payload.num - 1)) {
        break
      }
    }
    const chartData = yield call(() => (createTemplate(payload, data, labels)));
    yield put(setChart(chartData));
  } catch(e) {
    console.log(e)
  }
}
function* getBalance(payload) {
  try {
    let response = yield call(fetchData, payload.api);
    let data = response.map(i => i.liabilities);
    const labels = response.map(i => i.date);
    const chartData = yield call(() => (createTemplate(payload, data, labels)));
    yield put(setChart(chartData));
  } catch(e) {
    console.log(e)
  }
}


function* handleData({ payload }) {
  yield all([
    fork(() => (getBitcoin(payload.bitcoin))),
    fork(() => (getBalance(payload.balance))),
  ]);
}

function* dataWatcher() {
  yield takeEvery(chart.GET_CHARTS, handleData);
}

export default function* rootSaga() {
  yield dataWatcher();
}