import defaultImage from '../../images/default_logo.png'
import './AvatarDisplay.css';

const AvatarDisplay = ({ ticket }) => {
 return (
  <div className="avatar-container">
   <div className='image-container'>
    <img src={ticket.avatar ? ticket.avatar : defaultImage} />
   </div>
  </div>
 )
}

export default AvatarDisplay;