import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation  } from '@apollo/client';
import { DELETE_EVENT } from '../../utils/mutations';
import EventCard from '../Page Components/EventCard';
import { QUERY_EVENT_LIST } from '../../utils/queries';
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';

function DeleteEventButton({ eventId, refetch }) {
  const [deleteEvent] = useMutation(DELETE_EVENT, {
    onCompleted: () => refetch(),
  });

  const handleDelete = async () => {
    try {
      await deleteEvent({ variables: { id: eventId } });
    } catch (error) {
      alert('Failed to delete event');
    }
  };

  return <button onClick={handleDelete}>Delete Event</button>;
}

const EventList = () => {
  const navigate = useNavigate();
    const {  loading, error, data, refetch } = useQuery(QUERY_EVENT_LIST, {refetchOnWindowFocus: true, });

    // const { data, error, isLoading, refetch } = useQuery('myData', fetchData, {
    //    // Optional: Customize refresh options
    //    refetchOnWindowFocus: true, 
    //    // Automatically refetch on window focus
    //     staleTime: 5000, 
    //    // Consider data fresh for 5 seconds 
    //    });

    const events = data?.events || [];

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    if (!events.length) {
      return (
        <div>
          <h1>Events</h1><Link to={`/event/add`}>
              <button >Add Event</button> 
            </Link>
          <h3>No events</h3>
        </div>
      );
  }

  // Redirect to login if not already
  if(!Auth.loggedIn()){
    navigate('/login');
  }
  refetch();
  return (
    <div>
      <div>
      <div className="d-flex justify-content-between align-items-center p-3 bg-light border">
          <h1>Events</h1>
          <Link to={`/event/add`}>
            <button >Add Event</button> 
          </Link>
        </div>
      </div>
      {events &&
        events.map((event) => (
          <div key={event._id} className="card mb-3">
            <div className="card-body bg-light p-2">
              <EventCard event={event}  ></EventCard>
              <DeleteEventButton eventId={event._id} refetch={refetch} />
      
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventList;
