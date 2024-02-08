import "./Styles/Header.scss";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerInsideExample() {
  return (
    <header>
    <Navbar expand="lg" className="HeaderContainer">
      <Container className="header">
        <Navbar.Brand href="#" className="text-light">Linktree - Dev Profile</Navbar.Brand>
      </Container>
    </Navbar>
    </header>
  );
}

export default ContainerInsideExample;