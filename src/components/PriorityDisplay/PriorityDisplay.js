import star from '../../images/star.png'

const PriorityDisplay = ({ priority }) => {
 return (
  <div className="priority-display">
   <div className="star-container">
    <h3 style={{ color: priority >= 1 ? '#00CE9A' : '' }}>&#10029;</h3>
    <h3 style={{ color: priority >= 2 ? '#00CE9A' : '' }}>&#10029;</h3>
    <h3 style={{ color: priority >= 3 ? '#00CE9A' : '' }}>&#10029;</h3>
    <h3 style={{ color: priority >= 4 ? '#00CE9A' : '' }}>&#10029;</h3>
    <h3 style={{ color: priority >= 5 ? '#00CE9A' : '' }}>&#10029;</h3>
   </div>
  </div>
 )
}

export default PriorityDisplay;