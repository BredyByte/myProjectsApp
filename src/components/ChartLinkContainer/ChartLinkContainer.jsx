import { useEffect } from 'react';
import ChartLink from '../ChartLink/ChartLink';
import './ChartLinkContainer.css';
import VanillaTilt from '../../vanilla-tilt';
import { useSelector } from 'react-redux';


const ChartLinkContainer = () => {
  const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
  const state = useSelector(state => state.charts.data);

  useEffect(() => {
    if(!isMobile) {
      VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
      });
    }
  }, [state,isMobile]);

  return (
    <div
      className="ChartLinkContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "50px"
    }}>
      {
        state.map(i => (
          <div key={i.id}>
            <ChartLink data={i}/>
          </div>
        ))
      }
    </div>
  )
}

export default ChartLinkContainer
