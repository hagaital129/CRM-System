import { useNavigate } from 'react-router-dom';
import './NavBar.css'
import logo from '../../images/logo.png'
import home_logo from '../../images/home_logo.png'
import ticket_logo from '../../images/ticket_logo.png'


const NavBar = () => {
 const navigate = useNavigate();
 return (
  <nav>
   <div className="logo-container">
    <img src={logo} alt="logo" />
   </div>
   <div className='controls-container'>
    <img src={home_logo} alt="home_logo" onClick={() => navigate('/')} className="nav-logos" />
    <img src={ticket_logo} alt="ticket_logo" onClick={() => navigate('/ticket')} className="nav-logos" />
   </div>
  </nav>
 )
}

export default NavBar;