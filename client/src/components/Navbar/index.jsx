import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../../public/TrovePhoto-Headshot-left.jpg';

import Auth from '../../utils/auth';

function MainNav() {
  
  return (
    <div className="nav-container mb-5">
        <Navbar collapseOnSelect class="navbar navbar-expand-lg navbar-light bg-ligh " >
            <Navbar.Toggle aria-controls="navbar-collapse-id" />
            <Navbar.Collapse id="navbar-collapse-id">
                <Nav >
                <Navbar.Brand href="/#home">
                <img
                    src={Logo}
                    className="d-inline-block align-top m-auto profile-photo"
                    alt="Brand Name logo"
                />{' '}
            </Navbar.Brand>
                    <Nav.Link as={Link} to='/'>
                        Home
                    </Nav.Link>
                    {Auth.loggedIn() ?
                        <Nav.Link as={Link} to='events'>
                        Events
                        </Nav.Link>
                         : null
                    }
                    
                    {Auth.loggedIn() ? 
                        <Nav.Link as={Link} to='Huddle'>
                        Huddle
                    </Nav.Link>
                    
                         : null
                    }
                    
                    {Auth.loggedIn() ? 
                        <Nav.Link as={Link} to='Chat'>
                        Chat
                    </Nav.Link>
                    
                         : null
                    }
                    
                    

                    {Auth.loggedIn() ? 
                        <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                         : 
                         <Nav.Link as={Link} to='Login'>
                         Login
                     </Nav.Link>
                    }

                    {Auth.loggedIn() ? 
                        null
                         : 
                         <Nav.Link as={Link} to='Create-account'>
                         Create account
                     </Nav.Link>
                    }
                    
                    
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        
                    
    </div>
  )
}

export default MainNav;