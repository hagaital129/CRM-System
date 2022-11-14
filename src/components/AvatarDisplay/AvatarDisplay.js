import logo from '../../images/logo.png'
import './AvatarDisplay.css';

const AvatarDisplay = ({ ticket }) => {
 return (
  <div className="avatar-container">
   <div className='image-container'>
    <img src={ticket.avatar ? ticket.avatar : logo} />
   </div>
  </div>
 )
}

export default AvatarDisplay;