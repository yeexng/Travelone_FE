import { useState } from "react";
import "./HiddenGemPage.css";
import {
  Button,
  Col,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  Figure,
  Modal,
  Card,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const HiddenGemPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const userProfileData = useSelector(
    (state: RootState) => state.userData.stock
  );

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
                <Nav.Link onClick={handleShow}>Add a Secret</Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <NavDropdown
                  title={userProfileData && userProfileData.firstName}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <Link
                      to={`/users/${userProfileData._id}`}
                      className="mytrip-link"
                    >
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
      <div style={{ height: "94vh" }} className="container-fluid p-0">
        <div
          className="jumbotron-fluid d-flex align-items-center mb-5"
          style={{ height: "40vh" }}
        >
          <div className="container">
            <h1 className="jumbotron-title">
              There will always be a special spot waiting for you to discover!
            </h1>
            <p className="jumbotron-title">
              And above all, <br></br>watch with glittering eyes the whole world
              around you because the greatest secrets are always hidden in the
              most unlikely places.<br></br> Those who don't believe in magic
              will never find it.
            </p>
          </div>
        </div>
        <div className=" main-content mx-5">
          <Row>
            <Col
              md={3}
              onClick={() => {
                navigate(`/secret/abcd`);
              }}
            >
              {/* need to change the id passing */}
              <div className="content-secret-card m-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://plus.unsplash.com/premium_photo-1682403136717-77c9b41a52b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                      <Row className="mb-2">
                        <Col md={2} className="pr-0">
                          <img
                            className="profile-img"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          ></img>
                        </Col>
                        <Col>Name</Col>
                      </Row>
                      <div>Location: Where</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="content-secret-card m-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://plus.unsplash.com/premium_photo-1682403136717-77c9b41a52b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                      <Row className="mb-2">
                        <Col md={2} className="pr-0">
                          <img
                            className="profile-img"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          ></img>
                        </Col>
                        <Col>Name</Col>
                      </Row>
                      <div>Location: Where</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="content-secret-card m-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://plus.unsplash.com/premium_photo-1682403136717-77c9b41a52b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                      <Row className="mb-2">
                        <Col md={2} className="pr-0">
                          <img
                            className="profile-img"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          ></img>
                        </Col>
                        <Col>Name</Col>
                      </Row>
                      <div>Location: Where</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="content-secret-card m-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://plus.unsplash.com/premium_photo-1682403136717-77c9b41a52b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                      <Row className="mb-2">
                        <Col md={2} className="pr-0">
                          <img
                            className="profile-img"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          ></img>
                        </Col>
                        <Col>Name</Col>
                      </Row>
                      <div>Location: Where</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="content-secret-card m-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://plus.unsplash.com/premium_photo-1682403136717-77c9b41a52b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                      <Row className="mb-2">
                        <Col md={2} className="pr-0">
                          <img
                            className="profile-img"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          ></img>
                        </Col>
                        <Col>Name</Col>
                      </Row>
                      <div>Location: Where</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="content-secret-card m-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://plus.unsplash.com/premium_photo-1682403136717-77c9b41a52b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                      <Row className="mb-2">
                        <Col md={2} className="pr-0">
                          <img
                            className="profile-img"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          ></img>
                        </Col>
                        <Col>Name</Col>
                      </Row>
                      <div>Location: Where</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="content-secret-card m-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://plus.unsplash.com/premium_photo-1682403136717-77c9b41a52b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                      <Row className="mb-2">
                        <Col md={2} className="pr-0">
                          <img
                            className="profile-img"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          ></img>
                        </Col>
                        <Col>Name</Col>
                      </Row>
                      <div>Location: Where</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="content-secret-card m-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://plus.unsplash.com/premium_photo-1682403136717-77c9b41a52b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                      <Row className="mb-2">
                        <Col md={2} className="pr-0">
                          <img
                            className="profile-img"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                          ></img>
                        </Col>
                        <Col>Name</Col>
                      </Row>
                      <div>Location: Where</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          {/* Modal Page */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title> Share your discovery? 🏞🛤🏕🛣🏖🏜🏝 </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="What's the treasure?"
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Where did you discover this treasure?"
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Content</Form.Label>
                  <Form.Control
                    placeholder="What's the treasure?"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <InputGroup className="mb-3">
                  <input type="file" />
                </InputGroup>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={handleClose}>
                Add Trip
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default HiddenGemPage;
