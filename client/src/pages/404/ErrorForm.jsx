import { Link, useRouteError } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toProperCase } from '../../utils/helpers';
const ErrorForm = () => {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
    
  const goToHomePage = () => {
    navigate('/');
  };

  

  return (
    <div className="hero-container">
            <div className="hero-div">
            <h1><i>{error.statusText || error.message} -</i> This Isn&#39;t the Page You&#39;re Looking For...</h1>  
            <p>These are not the Pages you are looking for. But you can find what you need back on the home page.</p>
            <Button className='button button-hightlight  m-3'
              type="button" onClick={goToHomePage}  >
              Use the Farce
            </Button>
            
      </div>
  </div>
  )
}

export default ErrorForm;