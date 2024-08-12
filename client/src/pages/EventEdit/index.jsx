import { useQuery } from '@apollo/client';
import { QUERY_EVENT_SINGLE } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import  EventEdit from './EventEdit.jsx';
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';



const Event = () => {
  const navigate = useNavigate();
  
  const { eventId } = useParams();

  const { loading, error, data } = useQuery(QUERY_EVENT_SINGLE, {
    variables: { eventId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Redirect to login if not already
  if(!Auth.loggedIn()){
    navigate('/login');
  }
 
  
  return (
    <div >
      <EventEdit event={data.event} />
    </div>
  );
};


export default Event;