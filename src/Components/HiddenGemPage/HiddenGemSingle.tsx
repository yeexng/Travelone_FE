import { Link } from "react-router-dom";
import "./HiddenGemSingle.css";
import {
  Button,
  Col,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  Card,
  InputGroup,
} from "react-bootstrap";

const HiddenGemSingle = () => {
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
              </Nav>
              <Nav className="ml-auto">
                <NavDropdown title="Username" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to={"/users/asdc"} className="mytrip-link">
                      Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to={"/trips/asdc"} className="mytrip-link">
                      My Trip
                    </Link>
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
        <div className="single-secret-layout">
          <Row className="main-row-layout">
            <Col md={8}>
              <div className="secret-single-image-div d-flex justify-content-center align-items-center">
                <img
                  className="secret-single-image"
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
                />
              </div>
            </Col>
            <Col className="post-text m-0">
              <div className="mt-4">
                <p>
                  <img
                    className="profile-img mr-3"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  ></img>
                  Author
                </p>
                <h3>Title: Time to test this page</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus beatae sit exercitationem tempore voluptates. Optio
                  adipisci nemo dolore ducimus voluptate quo at error.
                  Laboriosam cum perferendis consequatur voluptatibus quia
                  expedita?Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Iure dignissimos earum dolor modi enim debitis autem
                  dolores. Natus commodi, error vel voluptas nesciunt
                  perspiciatis deleniti vitae porro? Nam, neque magnam!
                </p>
                <p className="mt-2 post-date">Post time</p>
              </div>
              <hr></hr>
              <div>
                <p>90 Comments</p>
                <p>
                  <Row>
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
                </p>
              </div>
              <div>
                <div className="single-comment mt-4">
                  <Row>
                    <Col md={1} className="pr-0">
                      <img
                        className="profile-img"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      ></img>
                    </Col>
                    <Col className="ml-1">
                      <p>Sam Ng</p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vel adipisci in natus reiciendis rem pariatur
                        voluptatem
                      </p>
                      <p className="mt-2 post-date">1 Nov 2022</p>
                    </Col>
                  </Row>
                </div>
                <div className="single-comment mt-4">
                  <Row>
                    <Col md={1} className="pr-0">
                      <img
                        className="profile-img"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                      ></img>
                    </Col>
                    <Col className="ml-1">
                      <p>Sam Ng</p>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Vel adipisci in natus reiciendis rem pariatur
                        voluptatem
                      </p>
                      <p className="mt-2 post-date">1 Nov 2022</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HiddenGemSingle;
