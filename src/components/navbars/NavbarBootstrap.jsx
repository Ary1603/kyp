import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavbarBootstrap() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar  key={expand} expand={expand} className="boots-navbar  mt-3" style={{boxShadow: 'unset'}} >
          <Container fluid >
            <Navbar.Brand href="#home" id="navbar-brand-name">KYP Invitaciones</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  KYP Invitaciones
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 nav-links">
                  <Nav.Link href="#benefits" className="nav-link">Beneficios</Nav.Link>
                  <Nav.Link href="#pricing-plans" className="nav-link">Paquetes</Nav.Link>
                  <Nav.Link href="#contact-us" className="nav-link">Contáctanos</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarBootstrap;
