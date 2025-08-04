import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUserSecret } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  return (
    <>
      <Navbar bg="grey" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="./"><img
            src="/logo.png"
            width="110"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
          <Nav className="mx-auto justify-content-center fs-5 d-flex gap-4">
            <Nav.Link id="nav1" href="/" className='text-black'>Home</Nav.Link>
            <Nav.Link id="nav1" href="/Courses" className='text-black'>Courses</Nav.Link>
            <Nav.Link id="nav1" href="/Courses" className='text-black'>Categories</Nav.Link>
                          
            <Nav.Link id="nav1" href="/Courses" className='text-black'>Placements</Nav.Link>

            <Nav.Link id="nav1" href="#contacts" className='text-black'>Contacts</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Button href="/login" variant="dark" className="fw-bold px-4 fs-5">
              <FaUserSecret /> Login
            </Button>
          </Nav>

        </Container>
      </Navbar>

    </>
  );
}

export default Header;