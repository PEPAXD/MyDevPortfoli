import "./Styles/Header.scss";
import { useState, useEffect } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import ToggleButton from "react-bootstrap/ToggleButton";

function Header({ onFiltersChange }) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters]);

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
              <NavDropdown.Item onClick={() => setFilters(["HTML5",  "CSS3",  "JavaScript"])}>
                HTML / CSS / JS
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setFilters(["React"])}>
                React
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Backend"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => setFilters(["Java"])}>
                Java
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setFilters(["Python"])}>Python</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => setFilters(["Firebase"])}>Firebase</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Full-Stack"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => setFilters(["Node / Express / Bootstrap / MongoDB"])}>MERN Stack</NavDropdown.Item>
            </NavDropdown>

            <ToggleButton
              id="toggle-check"
              type="checkbox"
              variant="outline-secondary"
              checked={filters.length === 0}
              value="1"
              onChange={(e) => {
                if (e.currentTarget.checked) {
                  setFilters([]);
                }
              }}
            >
              Show All
            </ToggleButton>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
