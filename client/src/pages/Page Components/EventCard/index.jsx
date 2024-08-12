import { Link } from 'react-router-dom';



const EventCard = ({event}) => {

  return (
    <div>
      <Link to={`/event/${event._id}`}>
        <div>
          <h3>{event.name} at {event.venue} </h3> <h4> {event.start} - {event.end}</h4>
          <p>{event.description}</p>
          <button >View</button>       
        </div>
      </Link>
      
    </div>
  );
};


export default EventCard;


             