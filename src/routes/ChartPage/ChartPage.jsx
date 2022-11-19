import { Line } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

const ChartPage = () => {
  const state = useSelector(state => state);
  const params  = useParams();
  const data = state.charts.data.filter(i => i.id == params.id);

  return (
    <div className="ChartPage MainItem" style={{ padding: "0 20px", flexDirection: "column"}}>
      {/*{*/}
      {/*  data[0].additional ? <div className="ButtonBlock" style={{ padding: "20px" }} >*/}
      {/*    <Button sx={{ mr:2 }} variant="contained">1min</Button>*/}
      {/*    <Button sx={{ mr:2 }} variant="contained">5min</Button>*/}
      {/*    <Button variant="contained">15min </Button>*/}
      {/*  </div>*/}
      {/*    : null*/}
      {/*}*/}
      {
        data.map((i,index) => (
          <Line key={index} data={i.chart}/>
        ))
      }
    </div>
  )
}

export default ChartPage
