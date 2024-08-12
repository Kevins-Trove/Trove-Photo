import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { EDIT_EVENT } from '../../utils/mutations';
import { Link, useNavigate } from 'react-router-dom';

const EventEdit = ({ event }) => {
  
  const navigate = useNavigate();
  
  const [formState, setFormState] = useState({
    id: event._id,
    name: event.name,
    description: event.description,
    start:new Date(event.start).toISOString().substring(0, 10),
    end: new Date(event.end).toISOString().substring(0, 10),
    venue: event.venue,
    latitude: event.latitude,
    longitude: event.longitude,
    owner: event.owner,
    attendees:  event.attendees
  });

    const [editEvent, { error, data }] = useMutation(EDIT_EVENT);
  
    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      console.log("handleFormSubmit",{ ...formState });
    try {
      const { data } = await editEvent({
        variables: { ...formState },
      });

      console.log("formState",data);
      //redirect to event
      navigate(`/event/${data.editEvent._id}`);
      
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <div>
    <div>
    <div className="d-flex justify-content-between align-items-center p-3 bg-light border">
      <h1>Edit Event</h1>
    </div></div>
    <main className="flex-col justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
         
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to={`/event/${event._id}`}>back to event.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Event Name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Description"
                  name="description"
                  type="text"
                  value={formState.description}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Start Date"
                  name="start"
                  type="date"
                  value={new Date(formState.start).toISOString().substring(0, 10)}
                  onChange={handleChange}
                />
                
                <input
                  className="form-input"
                  placeholder="End Date"
                  name="end"
                  type="date"
                  value={new Date(formState.end).toISOString().substring(0, 10)}
                  onChange={handleChange}
                />                
                <input
                  className="form-input"
                  placeholder="Venue"
                  name="venue"
                  type="venue"
                  value={formState.venue}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Save
                </button>
                <Link to="/events">
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="button"
                >
                  Cancel
                </button>
                </Link>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};

  
  export default EventEdit;