import { Link } from 'react-router-dom';

import './TicketCard.css';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import StatusDisplay from '../StatusDisplay/StatusDisplay';
import PriorityDisplay from '../PriorityDisplay/PriorityDisplay';
import ProgressDisplay from '../ProgressDisplay/ProgressDisplay';
import DeleteBlock from '../DeleteBlock/DeleteBlock';

const TicketCard = ({ color, ticket }) => {
 return (
  <div className="ticket-card">

   <Link to={`/ticket/${ticket.documentId}`} id='link'>
    <div className='ticket-color' style={{backgroundColor: color}}></div>
    <h3>{ticket.title}</h3>
    <AvatarDisplay ticket={ticket} />
    <StatusDisplay status={ticket.status}></StatusDisplay>
    <PriorityDisplay priority={ticket.priority}></PriorityDisplay>
    <ProgressDisplay progress={ticket.progress}></ProgressDisplay>
   </Link>
   <DeleteBlock></DeleteBlock>
  </div>
 )
}

export default TicketCard;