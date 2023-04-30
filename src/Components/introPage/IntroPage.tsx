import {
  Button,
  Col,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  Container,
} from "react-bootstrap";
import "./IntroPage.css";

const IntroPage = () => {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <div className="container-fluid mx-5">
            <Navbar.Brand href="#home">TravelOne?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-flex justify-content-end"
            >
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      <Container style={{ height: "80vh" }}>
        <Row className="justify-content-center align-items-center h-100">
          <Col className="text-center">
            <h1>Travel One? Travel Alone?</h1>
            <h3>
              Looking for a travel partner?
              <br></br>Meet people who share the same passion.
              <br></br>Share your adventures and stories.
            </h3>
            <Button variant="outline-dark">Get Started</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IntroPage;
