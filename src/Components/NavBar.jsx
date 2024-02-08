import "./Styles/Header.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function ContainerInsideExample({ position }) {
  const NavbarComponent = position === "footer" ? "footer" : "header";

  return (
    <NavbarComponent>
      <Navbar expand="lg" className="HeaderContainer">
        <Container className="header">
          <Navbar.Brand href="#" className="text-light">
            Linktree - Dev Profile
          </Navbar.Brand>
        </Container>
      </Navbar>
    </NavbarComponent>
  );
}

export default ContainerInsideExample;
