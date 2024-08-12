import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_EVENT_SINGLE } from '../../utils/queries';

import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';

const EventSingle = () => {
  const navigate = useNavigate();

  const { eventId } = useParams();

  const { loading, data } = useQuery(QUERY_EVENT_SINGLE, {
      // pass URL parameter
      variables: { eventId: eventId },
  });

  const event = data?.event || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  
  // Redirect to login if not already
  if(!Auth.loggedIn()){
    navigate('/login');
  }
 
  
  return (
    <div>
      <div>
      <div className="d-flex justify-content-between align-items-center p-3 bg-light border">
        <h1>Event View</h1>
        <Link to={`/event/edit/${event._id}`}>
          <button >Edit</button> 
        </Link>
        <Link to={`/events`}>
          <button >Event List</button> 
        </Link>
        </div>
        </div>
        <div className="d-flex justify-content-between align-items-center p-3 bg-light border m-3">
          <div>
            <h3>{event.name} at {event.venue}</h3><h3> {event.start} to {event.end}</h3>
            {event.description}
      </div>
      </div>
    </div>
  );
};

export default EventSingle;
