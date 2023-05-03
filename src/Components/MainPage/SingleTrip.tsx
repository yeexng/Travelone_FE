import { Link } from "react-router-dom";
import "./SingleTrip.css";
import "./ChatBubble.scss";
import {
  Col,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  InputGroup,
  Figure,
  Button,
} from "react-bootstrap";

const SingleTrip = () => {
  return (
    <>
      <div>
        <Navbar style={{ height: "6vh" }} bg="dark" variant="dark" expand="lg">
          <div className="container-fluid mx-5">
            <Navbar.Brand>
              <Link to={"/trips"} className="text-decoration-none text-white">
                TravelOne?
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  {" "}
                  <Link to={"/secret"} className="secret-link">
                    Secret HideOuts
                  </Link>
                </Nav.Link>
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
      <div style={{ height: "94vh" }}>
        <div className="single-trip-layout">
          <Row className="main-row-layout">
            <Col md={8}>
              <div className="trip-single-div d-flex justify-content-center align-items-center mx-5">
                <Row>
                  <Col md={3}>
                    <Figure className="pl-3 pt-3">
                      <Figure.Image
                        width={200}
                        height={200}
                        alt="171x180"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
                      />
                    </Figure>
                  </Col>
                  <Col className="mt-2">
                    <h2>Title: World trip from ocean to land to sky</h2>
                    <p>
                      with <span>Sam Ng</span>
                    </p>
                    <p>Destination: the Earth</p>
                    <p>Starting Date: 1 June</p>
                    <p>Looking for: Any</p>
                    <p>Budget: £10000000</p>
                    <p>Type of Travel: Leisure</p>
                    <p>Split Cost: NO</p>
                    <p>
                      Details of your adventure: Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Debitis optio, aspernatur,
                      iure velit non dolorum perferendis esse est atque nesciunt
                      quod eius illum, ab nam doloremque possimus laudantium
                      voluptatem a.
                    </p>
                    <Button variant="outline-danger">Connect</Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="post-text m-0">
              <div className="mt-4">
                <p>
                  <img
                    className="profile-img mr-3"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  ></img>
                  Sam Ng
                </p>
              </div>
              <div className="chat-history mb-3">
                {/* Chat Bubble */}
                <div className="speech-wrapper">
                  <div className="bubble">
                    <div className="txt">
                      <p className="name">Sam Ng</p>
                      <p className="message">
                        Hey, check out this Pure CSS speech bubble...
                      </p>
                      <span className="timestamp">10:20 pm</span>
                    </div>
                    <div className="bubble-arrow"></div>
                  </div>
                  {/* Speech Bubble alternative */}
                  <div className="bubble alt mr-2">
                    <div className="txt">
                      <p className="name alt">
                        You<span> ~ Xuan Ng</span>
                      </p>
                      <p className="message">
                        Nice... this will work great for my new project.
                      </p>
                      <span className="timestamp">10:22 pm</span>
                    </div>
                    <div className="bubble-arrow alt"></div>
                  </div>
                </div>
              </div>
              <div>
                <Row className="chat-input mt-2">
                  <Col md={1}>
                    <img
                      className="profile-img mr-3"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    ></img>
                  </Col>
                  <Col>
                    <InputGroup>
                      <Form.Control placeholder="Show your appreciation here..." />
                    </InputGroup>
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

export default SingleTrip;
