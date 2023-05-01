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
} from "react-bootstrap";

const HiddenGemPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <Nav.Link onClick={handleShow}>Add a Secret</Nav.Link>
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
            <Col md={3}>
              <div className="content-card m-3">
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
              <div className="content-card m-3">
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
              <div className="content-card m-3">
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
              <div className="content-card m-3">
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
              <div className="content-card m-3">
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
              <div className="content-card m-3">
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
              <div className="content-card m-3">
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
              <div className="content-card m-3">
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
              <Modal.Title> Where's your next plan? 🏞🛤🏕🛣🏖🏜🏝 </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Give your trip a fun name"
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Destination</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter a city or country name"
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Starting Date</Form.Label>
                  <Form.Control type="date" placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Budget</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Looking For</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Any</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Type of Travel</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Backpacking</option>
                    <option>Leisure</option>
                    <option>Business Travel</option>
                    <option>Visiting Friends or Relatives</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Split Cost</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Add ons for the trip</Form.Label>
                  <Form.Control
                    placeholder="Provide more details about your trip"
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
