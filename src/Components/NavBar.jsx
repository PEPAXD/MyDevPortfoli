import "./Styles/NavBar.scss";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function ContainerInsideExample({ position }) {
  const NavbarComponent = position === "footer" ? "footer" : "header";

  const [value, setValue] = useState([]);
  const handleChange = (val) => setValue(val);

  return (
    <NavbarComponent>
      <Navbar expand="lg" className="HeaderContainer">
        <Container className="header">
          <Navbar.Brand href="#" className="text-light">
            Linktree - Dev Profile
          </Navbar.Brand>

          <ToggleButtonGroup className="skillsCheckboxes"
            type="checkbox"
            value={value}
            onChange={handleChange}
          >
            <ToggleButton id="tbg-btn-1" value={1}>
              HTML
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" value={2}>
              CSS
            </ToggleButton>
            <ToggleButton id="tbg-btn-3" value={3}>
              JavaScript
            </ToggleButton>
            <ToggleButton id="tbg-btn-4" value={4}>
              React
            </ToggleButton>
          </ToggleButtonGroup>

        </Container>
      </Navbar>
    </NavbarComponent>
  );
}

export default ContainerInsideExample;
