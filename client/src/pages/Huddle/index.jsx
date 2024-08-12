import { useQuery } from '@apollo/client';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from '@fullcalendar/interaction'
import {useState} from 'react'
import { QUERY_EVENT_LIST } from '../../utils/queries';
import "./index.css"


import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';


function Huddle() {
  const {  loading, error, data, refetch } = useQuery(QUERY_EVENT_LIST, {refetchOnWindowFocus: true, });
    const navigate = useNavigate();

    const [events, setEvents] = useState([])


    const eventsCurrent = data?.events || [];

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error.message}</p>;

    
      eventsCurrent.map((item) => {
        events.push( {"_id": item._id, "title": item.name + " - " + item.venue, "start": new Date(item.start), "end": new Date(item.end) });
      });
    
    
    const handleEventClick = (info) => {
      navigate(`/event/${info.event.extendedProps._id}`);
    }

    // Redirect to login if not already
    if(!Auth.loggedIn()){
        navigate('/login');
    }
    
    return (
        <div>
        <div>
          <div className="d-flex justify-content-between align-items-center p-3 bg-light border">
          <h1>Huddle</h1>
            </div>
            <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
        <div className= "calendarcontent">

<FullCalendar
  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
  initialView='dayGridMonth'
  weekends={true}
  editable={true}
  events={events}
  selectable={true}
  // eventContent={renderEventContent}
  
  eventClick={handleEventClick}
/>
</div>
        </div>
      </div>
            </div>
        
        </div>
      )
  }
  
  export default Huddle;