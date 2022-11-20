import './ProjectCardLink.css';


const CardLink = ({data}) => {
  const {id, title, desc, link, img} = data;
  return (
    <a  className="card" href={link} target="_blank">
      <div className="content">
        <h2>{(id<10 ? `0${id}`: `${id}`)}</h2>
        <h3>{ title }</h3>
        <p>{ desc }</p>
        <p className="seeMore" >See More</p>
      </div>
    </a>
  )
}

export default CardLink
