import { useNavigate  } from 'react-router-dom';
import { Button } from 'react-bootstrap';


import Auth from '../../../utils/auth';

function HeroImg() {
    
    const mountain = "https://c.wallhere.com/photos/79/d7/1200x800_px_Hiking_landscape_mist_Morning_mountains_nature_photography-1263873.jpg!d";
    const token = Auth.loggedIn() ? Auth.getToken() : null;
 
    const navigate = useNavigate();
    
    const goToLoginPage = () => {
        navigate('/login');
    };
    
    const goToEventsPage = () => {
        navigate('/events');
    };
    return (
    <header style={{paddingLeft: 0}}>
        <div
        id='hero'
        className="p-5 text-center"
        style={{backgroundImage: `url(${mountain})`, height: 500}}
        >
        <div>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className='hero-text mask'>
                    <h1 className="mb-3">Tandem</h1>
                    <h4 className="mb-3">Travel with friends</h4>
                    
                   
                    {token ? 
                        <Button className='button' onClick={goToEventsPage}>
                            View Event
                        </Button>
                         : <Button className='button' onClick={goToLoginPage}>
                            Login
                        </Button>
                    }
                    
                </div>
            </div>
        </div>
        </div>
    </header>
  )
}

export default HeroImg