import { useState } from 'react';
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '/TrovePhoto-Headshot-left.jpg';

import Auth from '../../utils/auth';

function MainNav() {
    const [activeLink, setActiveLink] = useState('home');

    const handleLinkClick = (link) => {
        console.log(link);
      setActiveLink(link);
    };

  return (
    <div className="nav-position nav-container mb-5">
        <Navbar collapseOnSelect class="navbar navbar-expand-lg navbar-light bg-ligh " >
            <Navbar.Toggle aria-controls="navbar-collapse-id" />
            <Navbar.Collapse id="navbar-collapse-id">
                <Nav >
                <Navbar.Brand href="/#home">
                    <div className="profile-div">
                        <img
                            src={Logo}
                            className="d-inline-block align-center m-auto profile-photo"
                            alt="Photo Trove Logo"
                        />{' '}
                    </div>
                </Navbar.Brand>
                    <Nav.Link as={Link} to='/' className="align-center m-auto" onClick={() => handleLinkClick('home')}>
                        Home
                    </Nav.Link>
                    
                    
                    

                    {Auth.loggedIn() ? 
                        <Nav.Link onClick={Auth.logout}  className="align-center m-auto">Logout</Nav.Link>
                         : 
                         <Nav.Link as={Link} to='Login'  className="align-center m-auto">
                         Login
                     </Nav.Link>
                    }

                    {Auth.loggedIn() ? 
                        null
                         : 
                         <Nav.Link as={Link} to='Create-account'  className="align-center m-auto">
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