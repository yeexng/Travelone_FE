import { Button, Col, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import "./IntroPage.css";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <>
      <div>
        <Navbar style={{ height: "8vh" }} bg="dark" variant="dark" expand="lg">
          <div className="container-fluid mx-5">
            <Navbar.Brand>
              <img className="logo-img" src="/assets/Travelone-Logo.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      <div style={{ height: "92vh" }} className="container-fluid main-layout">
        <Row className="justify-content-center align-items-center h-100">
          <Col className="text-center">
            <h1 className="main-text my-5 font-s">Travel One? Travel Alone?</h1>
            <h3 className="sub-text font-s">
              Looking for a travel partner?
              <br></br>Meet people who share the same passion.
              <br></br>Share your adventures and stories.
            </h3>
            <Link
              to={"/login"}
              className="btn my-5 get-started-btn font-s"
              // id="get-started-btn"
            >
              Get Started
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default IntroPage;
