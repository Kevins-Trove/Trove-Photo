import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../../utils/mutations';
import { useNavigate } from 'react-router-dom';


import Auth from '../../utils/auth';

const EventAdd = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    description: '',
    start: new Date().toISOString().substring(0, 10),
    end: new Date().toISOString().substring(0, 10),
    venue: "",
    latitude: 0,
    longitude: 0,
    owner: [],
    attendees: []
  });

  const [addEvent, { error, data }] = useMutation(ADD_EVENT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addEvent({
        variables: { ...formState },
      });

      //redirect to events page if successful
      if (data.addEvent._id){
        navigate(`/event/${data.addEvent._id}`);
      }
      
    } catch (e) {
      console.error(e);
    }
  };

  // Redirect to login if not already
  if(!Auth.loggedIn()){
    navigate('/login');
  }
  
  return (
    <div>
    <div>
      <div className="d-flex justify-content-between align-items-center p-3 bg-light border">
      <h1>Add Event</h1>
        </div>
        </div>
    <main className="flex-col justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
         
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/events">back to events.</Link>
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
                  Submit
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

export default EventAdd;
