import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand>
        HCI Group 5
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to="/cs4474-report" className='link'>Report</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/AboutUs" className='link'>About Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
