import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUserSecret } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="grey" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="./"><img
            src="/logo.png"
            width="110"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler"/>
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mx-auto justify-content-center fs-5 d-flex gap-4">
              <Nav.Link id="nav1" href="/" className='text-black'>Home</Nav.Link>
              <Link to={'/courses'} style={{ textDecoration: 'none' }}><Nav.Link id="nav1" href="/courses" className='text-black'>Courses</Nav.Link></Link>
              <Link to={'/courses'} style={{ textDecoration: 'none' }}><Nav.Link id="nav1" href="/courses" className='text-black'>Category</Nav.Link></Link>

              <Link to={'/placements'} style={{ textDecoration: 'none' }}><Nav.Link id="nav1" href="/courses" className='text-black'>Placements</Nav.Link></Link>

              <Link to={'/contacts'} style={{ textDecoration: 'none' }}><Nav.Link id="nav1" href="/courses" className='text-black'>Contacts</Nav.Link></Link>
            </Nav>

            <Nav className="ms-auto">
              <Button href="/login" variant="dark" className="fw-bold px-4 fs-5">
                <FaUserSecret /> Login
              </Button>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </>
  );
}

export default Header;