// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {pCardDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = pCardDetails

  return (
    <div className="pro-cont">
      <img src={imageUrl} alt="project" className="pro-pic" />
      <div className="pro-head">
        <h1 className="pro-title">{projectTitle}</h1>
        <div className="cal-cont">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p className="pro-des">{description}</p>
      <a href={projectUrl} className="pro-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
