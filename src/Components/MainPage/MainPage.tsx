import "./MainPage.css";
import {
  Button,
  Col,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  Container,
  NavLink,
  Figure,
} from "react-bootstrap";

const MainPage = () => {
  return (
    <>
      <div>
        <Navbar style={{ height: "6vh" }} bg="dark" variant="dark" expand="lg">
          <div className="container-fluid mx-5">
            <Navbar.Brand href="#home">TravelOne?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
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
              <Nav className="ml-auto">
                <NavDropdown title="Username" id="basic-nav-dropdown">
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
              <Nav>
                <Nav.Link className=" logout">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      <div
        style={{ height: "94vh" }}
        className="container-fluid main-layout p-0"
      >
        <div
          className="jumbotron-fluid d-flex align-items-center mb-5"
          style={{ height: "40vh" }}
        >
          <div className="container">
            <h1 className="jumbotron-title">Travelone? or Travel Alone?</h1>
            <p className="jumbotron-title">Alone no more...</p>
          </div>
        </div>
        <div className=" main-content mx-5">
          <Row>
            <Col md={6}>
              <div className="content-card m-3">
                <Row>
                  <Col md={3} className="p-3">
                    <Figure className="pl-3 pt-3">
                      <Figure.Image
                        width={200}
                        height={200}
                        alt="171x180"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
                      />
                      <Figure.Caption>Full Name </Figure.Caption>
                    </Figure>
                  </Col>
                  <Col className="p-3">
                    <h3>Trip to Venezia</h3>
                    <p>Destination:</p>
                    <p>Date:</p>
                    <p>Looking For:</p>
                    <a href="#">More Details...</a>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="content-card m-3">
                <Row>
                  <Col md={3} className="p-3">
                    <Figure className="pl-3 pt-3">
                      <Figure.Image
                        width={200}
                        height={200}
                        alt="171x180"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
                      />
                      <Figure.Caption>Full Name </Figure.Caption>
                    </Figure>
                  </Col>
                  <Col className="p-3">
                    <h3>Trip to Venezia</h3>
                    <p>Destination:</p>
                    <p>Date:</p>
                    <p>Looking For:</p>
                    <a href="#">More Details...</a>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <div className="content-card m-3">
                <Row>
                  <Col md={3} className="p-3">
                    <Figure className="pl-3 pt-3">
                      <Figure.Image
                        width={200}
                        height={200}
                        alt="171x180"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
                      />
                      <Figure.Caption>Full Name </Figure.Caption>
                    </Figure>
                  </Col>
                  <Col className="p-3">
                    <h3>Trip to Venezia</h3>
                    <p>Destination:</p>
                    <p>Date:</p>
                    <p>Looking For:</p>
                    <a href="#">More Details...</a>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default MainPage;
