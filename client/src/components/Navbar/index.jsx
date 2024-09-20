import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '/images/Trove_logo_250x125.png';
import search from '/images/search.png';
import profileImage from '/images/profile_default.png';
import profileLoggedIn from '/images/profile_loggedIn.png';

import Auth from '../../utils/auth';

function MainNav() {
    let profile = null;

    if (Auth.loggedIn()){
        profile = profileLoggedIn;
        console.log("logged in");
    } else {
        profile = profileImage;
    }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand >
            <Link to="/">
                    <img
                    alt="Trove"
                    src={logo}
                    width="125"
                    height="65"
                    className="d-inline-block align-top"
                    />{' '}
                </Link>
                </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            {Auth.loggedIn() ?
                <Nav.Link as={Link} to='albums'>Albums</Nav.Link>
                    : 
                    null
            }
            {Auth.loggedIn() ?
                <Nav.Link as={Link} to='photos'>Photos</Nav.Link>
                    : 
                null
            }
            {Auth.loggedIn() ?
                null
                    : 
                <Nav.Link as={Link} to='about'>About</Nav.Link>
            }

            {Auth.loggedIn() ?
                <Form >
                    <Row>
                    <Col xs="auto">
                        <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">
                        <img
                            alt="Search"
                            src={search}
                            className="d-inline-block align-top"
                            />{' '}
                        </Button>
                    </Col>
                    </Row>
                </Form>
                    : 
                null
            }

            
          </Nav>
          <Nav>
          <Container>
                    <Form  >
                        <Row>
                        
                        <Col xs="auto">
                        <Row >
                            {Auth.loggedIn() ?
                                <div className='profile-navbar'>
                                        <Link to="/profile">
                                            <img
                                                alt="Profile"
                                                src={profile}
                                                
                                                className="profile-photo"
                                                />{' '}
                                        </Link>
                                    </div>
                                    :
                                    <div className='profile-navbar'>
                                    <Link to="/login">
                                        <img
                                            alt="Profile"
                                            src={profile}
                                            
                                            className="profile-photo"
                                            />{' '}
                                    </Link>
                                </div>
                                }
                            </Row>

                            <Navbar.Text>
                            
                                <Row>
                                    <div className='profile-navbar'>
                                        
                                        {Auth.loggedIn() ? 
                                            <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                                            : 
                                            <Nav.Link as={Link} to='Login'>Login</Nav.Link>
                                            
                                        }
                                    </div>
                                </Row>
                            </Navbar.Text>
                        </Col>
                        </Row>
                    </Form>
                    </Container>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;