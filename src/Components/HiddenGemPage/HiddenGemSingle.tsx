import { Link } from "react-router-dom";
import "./HiddenGemSingle.css";
import {
  Col,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  InputGroup,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const HiddenGemSingle = () => {
  const userProfileData = useSelector(
    (state: RootState) => state.userData.stock
  );

  const oneSecretPostData = useSelector(
    (state: RootState) => state.oneSecretPostData.stock
  );

  console.log("One Secret Data", oneSecretPostData);

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
                    Back
                  </Link>
                </Nav.Link>
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
      <div style={{ height: "94vh" }}>
        <div className="single-secret-layout">
          <Row className="main-row-layout">
            <Col md={8}>
              <div className="secret-single-image-div d-flex justify-content-center align-items-center">
                <img
                  alt="post image"
                  className="secret-single-image"
                  src={oneSecretPostData.image}
                />
              </div>
            </Col>
            <Col className="post-text m-0">
              <div className="mt-4">
                <p>
                  <img
                    alt="author image"
                    className="profile-img mr-3"
                    src={oneSecretPostData.user.avatar}
                  ></img>
                  {oneSecretPostData.user.firstName}{" "}
                  {oneSecretPostData.user.lastName}
                </p>
                <h3>{oneSecretPostData.title}</h3>
                <p className="mb-0">{oneSecretPostData.locations}</p>
                <p className="mb-0">{oneSecretPostData.details}</p>
                <p className="mt-2 post-date">{oneSecretPostData.createdAt}</p>
              </div>
              <hr></hr>
              <div>
                <p>90 Comments</p>
                <p>
                  <Row>
                    <Col md={1}>
                      <img
                        alt="user avatar"
                        className="profile-img mr-3"
                        src={userProfileData.avatar}
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
