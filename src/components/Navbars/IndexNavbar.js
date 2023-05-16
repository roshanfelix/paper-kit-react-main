/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            Roshan React
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
              <NavItem>
              <NavLink
                href="http://localhost:3000/index"
              >
                <i className="nc-icon nc-paper" /> File
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink
                href="http://localhost:3000/nucleo-icons"
              >
                <i className="nc-icon nc-globe" /> History
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink
                href="http://localhost:3000/landing-page"
              >
                <i className="nc-icon nc-single-copy-04" /> Modules
              </NavLink>
              </NavItem>
                <NavItem>
                <NavLink
                href="http://localhost:3000/register-page"
                >
                  <i className="nc-icon nc-laptop" /> Agents
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink
                href="http://localhost:3000/pools">
              
                <i className="nc-icon nc-tile-56" /> Pools
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                href="http://localhost:3000/profile-page"
            >
              <i className="nc-icon nc-chat-33" /> Team
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                href="http://localhost:3000/index"
            >
              <i className="nc-icon nc-single-02" /> Admin
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                href="http://localhost:3000/index"
            >
              <i className="nc-icon nc-alert-circle-i" /> Help
            </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
