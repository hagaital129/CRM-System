import TicketCard from '../components/TicketCard/TicketCard';

const Dashboard = () => {

  const tickets = [
    {
      category: 'Q1 2022',
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
      category: 'Q2 2022',
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
      category: 'Q1 2022',
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
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,255,255)',
  ]

  const uniqueCatagories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ]

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
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