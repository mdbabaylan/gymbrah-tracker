
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function GymBrahNavBar({children}) {
return(
  <>
    <Navbar bg="dark" data-bs-theme="dark" sticky={"top"} expand={"true"}>
        <Container>
          <Navbar.Brand href="/">Gymbrah</Navbar.Brand>
          <Nav className="me-3">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/history">History</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    <Container>
      <main>{children}</main>
    </Container>  
  </>
    )
}