import { useNavigate  } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import HeroImg from '../PageComponents/HomepageComponents/HeroImg';

import Auth from '../../utils/auth';

export default function Home() {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
 
  const navigate = useNavigate();
  
  const goToLoginPage = () => {
      navigate('/login');
  };
  
  const goToPhotosPage = () => {
      navigate('/photos');
  };

  const goToAlbumsPage = () => {
    navigate('/albums');
};

  
  return (
    
  
    <div className="hero">
        <HeroImg />
        <div className="hero-container">
            <div className="hero-div">
                    <h1 className="mb-3">Photo Trove</h1>
                    <h4 className="mb-3">Private photo vault</h4>
                   
                    {token ? 
                       <div className='hero-button-container'>
                       <Button className='button button-default m-3' onClick={goToPhotosPage}>
                            Photos
                        </Button>
                        <Button className='button button-default m-3' onClick={goToAlbumsPage}>
                        Albums
                        </Button>
                   </div>
                        
                       
                        
                         : <Button className='button button-default' onClick={goToLoginPage}>
                            Login
                        </Button>
                    }
            </div>
        </div>
    </div>
  )
}
