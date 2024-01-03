// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg-cont">
      <h2>MY JOURNEY OF</h2>
      <h1>CCBP 4.0</h1>
      <div className="chrono-cont">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
            titleColor: 'blue',
          }}
        >
          {timelineItemsList.map(eachObj =>
            eachObj.categoryId === 'COURSE' ? (
              <CourseTimelineCard key={eachObj.id} cardDetails={eachObj} />
            ) : (
              <ProjectTimelineCard key={eachObj.id} pCardDetails={eachObj} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
