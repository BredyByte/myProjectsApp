import { Link } from 'react-router-dom';

import './ChartLink.css';


const ChartLink = ({data}) => {
  const { text, title, id } = data;
  return (
    <Link to={`/chart/${id}`} className="card">
      <div className="content">
        <h2>{(id<10 ? `0${id}`: `${id}`)}</h2>
        <h3>{title}</h3>
        <p>{ text }</p>
        <p className="seeMore" >See More</p>
      </div>
    </Link>
  )
}

export default ChartLink
