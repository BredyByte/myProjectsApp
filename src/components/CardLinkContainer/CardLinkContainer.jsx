import { useEffect } from 'react';
import CardLink from '../CardLink/CardLink';
import VanillaTilt from '../../vanilla-tilt';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../../store/projectsSlice';
import VanillaTiltRun from '../../vanilla-tilt';

const CardLinkContainer = () => {
  const projects = useSelector(state => state.projects.data);
  const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

  useEffect(() => {
    if(!isMobile) {
      VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
      });
    }
  }, [])
  return (
    <div
      className="CardLinkContainer"
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
            <CardLink data={i}/>
          </div>
        ))
      }
    </div>
  )
}

export default CardLinkContainer
