
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function GymBrahNavBar({children}) {
return(
  <>
    {/* Fixed. SPA like behavior, href is for external links only, content not part of your project */}
    {/* Now override CSS */}
     <Navbar bg="dark" data-bs-theme="dark" sticky={"top"} expand={"true"}>
        <Container>
          <Navbar.Brand href="/">Gymbrah</Navbar.Brand>
          <Nav className="me-3">
            <Nav.Link><NavLink to="/" style={{color: "#808080",  textDecoration: "none"}}>Home</NavLink></Nav.Link>
          </Nav>
          <Nav className="me-3">
            <Nav.Link><NavLink to="/history" style={{color: "#808080",  textDecoration: "none"}}>History</NavLink></Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link><NavLink to="/demo" style={{color: "#808080",  textDecoration: "none"}}>Demo</NavLink></Nav.Link>
          </Nav>
        </Container>
    </Navbar>

    <Container>
      <main>{children}</main>
    </Container>  
  </>
    )
}