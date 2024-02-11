import "./Styles/Header.scss";
import { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import ToggleButton from "react-bootstrap/ToggleButton";

function ContainerInsideExample() {
  const [checked, setChecked] = useState(true);

  return (
    <header>
      <Navbar
        variant="dark"
        bg="dark"
        expand="lg"
        style={{ boxShadow: "0px 0px 10px 0px #000000" }}
      >
        <Container>
          <Navbar.Brand href="#">Linktree - Dev Portfoli</Navbar.Brand>

          <NavDropdown.Divider className="responsiveDivider" />

          <Nav className="filterNavbar">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Frontend"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">
                HTML / CSS / JS
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">React</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Backend"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">
                Java
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Python</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Firebase</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Full-Stack"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">
                MERN Stack
              </NavDropdown.Item>
            </NavDropdown>

            <ToggleButton
              id="toggle-check"
              type="checkbox"
              variant="outline-secondary"

              checked={checked}
              value="1"
              onChange={(e) => setChecked(e.currentTarget.checked)}
            >
              Show All
            </ToggleButton>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default ContainerInsideExample;
