import { useEffect } from 'react';
import ProjectCardLink from '../ProjectCardLink/ProjectCardLink';
import VanillaTilt from '../../vanilla-tilt';
import { useSelector } from 'react-redux';

const ProjectLinkContainer = () => {
  const projects = useSelector(state => state.projects.data);
  const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

  useEffect(() => {
    if(!isMobile) {
      VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
      });
    }
  }, [isMobile]);
  return (
    <div
      className="ProjectLinkContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "50px",
        padding:" 20px 0 30px"
    }}>
      {
        projects.map((i, index) => (
          <div key={i.id}>
            <ProjectCardLink data={i} id={index+1}/>
          </div>
        ))
      }
    </div>
  )
}

export default ProjectLinkContainer
