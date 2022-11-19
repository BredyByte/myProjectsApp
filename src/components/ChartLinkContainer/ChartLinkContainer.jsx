import { useEffect } from 'react';
import ChartLink from '../ChartLink/ChartLink';
import './ChartLinkContainer.css';
import VanillaTilt from '../../vanilla-tilt';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../../store/projectsSlice';

const ChartLinkContainer = () => {
  const projects = useSelector(state => state.projects.data);

  return (
    <div
      className="ChartLinkContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "50px",
        padding:" 20px 0 30px"
    }}>
      {
        projects.map(i => (
          <div key={i.id}>
            <ChartLink data={i}/>
          </div>
        ))
      }
    </div>
  )
}

export default ChartLinkContainer
