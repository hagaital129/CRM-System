import TicketCard from '../components/TicketCard/TicketCard';

const Dashboard = () => {

  const tickets = [
    {
      category: 'Project 1',
      color: 'red',
      title: 'Ticket name 1',
      owner: 'Hagai',
      avatar: 'https://avatars.githubusercontent.com/u/42497293?v=4',
      status: 'working on it',
      priority: 1,
      progress: 40,
      description: 'A new tutorial',
      timestamp: '2022-11-22'
    },
    {
      category: 'Project 2',
      color: 'blue',
      title: 'Ticket name 2',
      owner: 'Tal',
      avatar: 'https://avatars.githubusercontent.com/u/42497293?v=4',
      status: 'working on it',
      priority: 5,
      progress: 55,
      description: 'A new tutorial',
      timestamp: '2022-11-14'
    },
    {
      category: 'Project 3',
      color: 'green',
      title: 'Ticket name 3',
      owner: 'Hagai Tal',
      avatar: 'https://avatars.githubusercontent.com/u/42497293?v=4',
      status: 'stuck',
      priority: 2,
      progress: 91,
      description: 'A new tutorial',
      timestamp: '2022-11-11'
    },
  ]

  const colors = [
    '#E3A72F',
    '#27c4c1',
    '#B6A999',
    '#00CE9A',
    '#009667',
  ]

  const uniqueCatagories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ]

  return (
    <div className="dashboard">
      <h1 className='headers'>Dashboard</h1>
      <div className="ticket-container">
        {tickets && uniqueCatagories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex}>
            <h3>{uniqueCategory}</h3>
            {tickets.filter((ticket) => ticket.category === uniqueCategory)
              .map((filteredTicket, _index) => (
                <TicketCard
                  id={_index}
                  color={colors[categoryIndex] || colors[0]}
                  ticket={filteredTicket}
                />
              ))
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard;