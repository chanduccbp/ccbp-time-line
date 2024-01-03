// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {cardDetails} = props
  const {courseTitle, description, duration, tagsList} = cardDetails

  return (
    <div className="course-cont">
      <div className="course-head">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="clock-cont">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className="course-des">{description}</p>
      <ul className="tags">
        {tagsList.map(eachObj => (
          <li key={eachObj.id} className="tag">
            {eachObj.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
