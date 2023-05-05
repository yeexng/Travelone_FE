import {
  Nav,
  NavDropdown,
  Navbar,
  Modal,
  Form,
  Button,
  Row,
  Col,
  Figure,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import { useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { ImBarcode } from "react-icons/im";

const ProfilePage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <Nav.Link onClick={handleShow}>Edit Profile</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <NavDropdown title="Username" id="basic-nav-dropdown">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
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
      <div style={{ height: "94vh" }} className="profile-background">
        <div>
          <Row
            style={{ height: "94vh" }}
            className="justify-content-center align-items-center mx profile-row"
          >
            <Col md={8} className="travel-pass">
              <Row className="profile-card ">
                <Col md={12} className="travel-pass-text ">
                  <h3 className="mt-4 ml-4">
                    Your Travel Pass{" "}
                    <span className="plane-emoji">
                      {" "}
                      <GiAirplaneDeparture />
                    </span>
                  </h3>
                </Col>
                <Col md={3} className="profile-card-image">
                  <Figure className="pl-4 pt-3 mt-3">
                    <Figure.Image
                      width={200}
                      height={200}
                      alt="171x180"
                      src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"
                    />
                  </Figure>
                  <div className="bar-code ml-4">
                    <ImBarcode />
                    <ImBarcode />
                    <ImBarcode />
                    <ImBarcode />
                    <ImBarcode />
                  </div>
                </Col>
                <Col className="mt-3">
                  <Row className="mt-3">
                    <Col md={4}>
                      <p className="">
                        FIRST NAME: <br></br>
                        <span className="profile-detail">Sam</span>
                      </p>
                    </Col>
                    <Col md={8}>
                      <p>
                        LAST NAME: <br></br>
                        <span className="profile-detail">Ng</span>
                      </p>
                    </Col>
                    <Col md={4}>
                      <p>
                        DATE OF BIRTH: <br></br>
                        <span className="profile-detail">1 June 2008</span>
                      </p>
                    </Col>
                    <Col md={8}>
                      <p>
                        GENDER:<br></br>
                        <span className="profile-detail">Male/Female</span>
                      </p>
                    </Col>
                    <Col md={4}>
                      <p>
                        EMAIL: <br></br>
                        <span className="profile-detail">test@test.com</span>
                      </p>
                    </Col>
                    <Col md={8}>
                      <p>
                        EMERGENCY CONTACT: <br></br>
                        <span className="profile-detail">12345678</span>
                      </p>
                    </Col>
                    <Col md={12}>
                      <p>
                        ABOUT ME: <br></br>
                        <span className="profile-detail-about">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Alias doloribus delectus distinctio? Itaque
                          maiores numquam temporibus officiis officia soluta
                          blanditiis laudantium dignissimos necessitatibus
                          laborum et, totam at ducimus rem deserunt.
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      {/* Edit Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> Your Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label className="m-0">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your First Name"
                id="first-name-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Last Name"
                id="last-name-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Gender</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Choose"
                placeholder="Male/Female"
                id="gender-change"
              >
                {" "}
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Emergency Contact</Form.Label>
              <Form.Control
                placeholder="This is important!!"
                id="emergency-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">About Me</Form.Label>
              <Form.Control
                id="about-change"
                placeholder="Tell us more about you"
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Edit...
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfilePage;
