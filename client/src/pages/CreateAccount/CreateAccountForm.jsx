// see SignupForm.js for comments
import { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const CreateAccountForm = () => {
  const mountain = "https://c.wallhere.com/photos/79/d7/1200x800_px_Hiking_landscape_mist_Morning_mountains_nature_photography-1263873.jpg!d";
 // set initial form state
 const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

     // check if form has everything (as per react-bootstrap docs)
     const form = event.currentTarget;
     if (form.checkValidity() === false) {
       event.preventDefault();
       event.stopPropagation();
     }
    try {
        const { data } = await addUser({
          variables: { ...userFormData },
        });
        console.log(data);
        Auth.login(data.addUser.token);
      } catch (err) {
        console.error(err);
      }

    setUserFormData({
        username: '',
        email: '',
        password: '',
      });
    };
  

  return (
    <div className="hero-container">
            <div className="hero-div">
       
                    
                    <h4 className="mb-3">Create account</h4>
    {/* This is needed for the validation functionality above */}
    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <div className='hero-button-container'>
            <Button className='button button-hightlight  m-3'
              disabled={
                !(
                  userFormData.username &&
                  userFormData.email &&
                  userFormData.password
                )
              }
              type="submit"
              variant="success"
            >
              Submit
            </Button>
        </div>
      </Form>
                   
      </div>
      </div>        
                    
              
  )
}

export default CreateAccountForm;