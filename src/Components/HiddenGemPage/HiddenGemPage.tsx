import { FormEvent, useEffect, useState } from "react";
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
import { useAppDispatch } from "../../redux/hooks/hooks";
import axios from "axios";
import { getSecretPostAction } from "../../redux/actions/secretActions/action";

const HiddenGemPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userProfileData = useSelector(
    (state: RootState) => state.userData.stock
  );
  const secretPostData = useSelector(
    (state: RootState) => state.secretPostData.stock
  );

  //Adding New Secret Post
  const baseEndpoint: String =
    (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";
  const user = userProfileData._id;
  const comments = [];
  const [title, setTitle] = useState("");
  const [locations, setLocations] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmitSecret = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(baseEndpoint + "/posts", {
        user,
        title,
        locations,
        details,
      });
      console.log(data);
      dispatch(getSecretPostAction());
      dispatch({ handleClose });
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(getSecretPostAction());
  }, []);

  const secretPostArray = secretPostData.posts;
  console.log(secretPostArray);

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
            {secretPostArray &&
              secretPostArray.map((posts: any) => {
                return (
                  <Col
                    md={3}
                    onClick={() => {
                      navigate(`/secret/${posts._id}`);
                    }}
                  >
                    {/* need to change the id passing */}
                    <div className="content-secret-card m-3">
                      <Card>
                        <Card.Img
                          variant="top"
                          src={posts.image}
                          className="card-img"
                        />
                        <Card.Body>
                          <Card.Title>{posts.title}</Card.Title>
                          <Card.Text>
                            <Row className="mb-2">
                              <Col md={2} className="pr-0">
                                <img
                                  alt="profile pic"
                                  className="profile-img"
                                  src={posts.user.avatar}
                                ></img>
                              </Col>
                              <Col>
                                {posts.user.firstName} {posts.user.lastName}
                              </Col>
                            </Row>
                            <div>Location: {posts.locations}</div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                );
              })}
          </Row>
          {/* Modal Page */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title> Share your discoveries? 🏞🛤🏕🛣🏖🏜🏝 </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmitSecret}>
                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="What's the treasure?"
                    onChange={(val) => setTitle(val.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Where did you discover this treasure?"
                    onChange={(val) => setLocations(val.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Content</Form.Label>
                  <Form.Control
                    placeholder="What's the treasure?"
                    as="textarea"
                    rows={3}
                    onChange={(val) => setDetails(val.currentTarget.value)}
                  />
                  <InputGroup className="mb-3">
                    <input type="file" />
                  </InputGroup>
                  <Button variant="primary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="success" type="submit" onClick={handleClose}>
                    Add Trip
                  </Button>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default HiddenGemPage;
