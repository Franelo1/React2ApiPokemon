import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navi = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand href="#home ">
          <img src="https://www.pngplay.com/wp-content/uploads/11/Pokemon-GO-PNG-Images-HD.png" style={{ maxHeight: "40px" }} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav >

            <NavLink
              className={({ isActive }) => (isActive ? "rutaActiva" : "rutaInactiva")}
              to="/" >
              Home   
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "rutaActiva" : "rutaInactiva")}
              to="/pokemones" style={{marginLeft:"10px"}}>
              Pokemones
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi