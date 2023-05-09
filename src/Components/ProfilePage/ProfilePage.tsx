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
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { RootState } from "../../redux/store/store";
import { editUserProfile } from "../../redux/actions/userActions/action";

const ProfilePage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userProfileData = useAppSelector(
    (state: RootState) => state.userData.stock
  );
  const dispatch = useAppDispatch();

  console.log(userProfileData);
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
                <NavDropdown
                  title={userProfileData && userProfileData.firstName}
                  id="basic-nav-dropdown"
                >
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
                      src={userProfileData.avatar}
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
                    <Col md={5}>
                      <p className="">
                        FIRST NAME: <br></br>
                        <span className="profile-detail">
                          {userProfileData && userProfileData.firstName}
                        </span>
                      </p>
                    </Col>
                    <Col md={7}>
                      <p>
                        LAST NAME: <br></br>
                        <span className="profile-detail">
                          {userProfileData && userProfileData.lastName}
                        </span>
                      </p>
                    </Col>
                    <Col md={5}>
                      <p>
                        DATE OF BIRTH: <br></br>
                        <span className="profile-detail">
                          {userProfileData && userProfileData.dateOfBirth}
                        </span>
                      </p>
                    </Col>
                    <Col md={7}>
                      <p>
                        GENDER:<br></br>
                        <span className="profile-detail">
                          {userProfileData && userProfileData.gender}
                        </span>
                      </p>
                    </Col>
                    <Col md={5}>
                      <p>
                        EMAIL: <br></br>
                        <span className="profile-detail">
                          {userProfileData && userProfileData.email}
                        </span>
                      </p>
                    </Col>
                    <Col md={7}>
                      <p>
                        EMERGENCY CONTACT: <br></br>
                        <span className="profile-detail">
                          {userProfileData && userProfileData.emergencyContact}
                        </span>
                      </p>
                    </Col>
                    <Col md={12}>
                      <p>
                        ABOUT ME: <br></br>
                        <span className="profile-detail-about">
                          {userProfileData && userProfileData.aboutMe}
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
                placeholder={userProfileData && userProfileData.firstName}
                id="first-name-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={userProfileData && userProfileData.lastName}
                id="last-name-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Gender</Form.Label>
              <Form.Control
                as="select"
                defaultValue={userProfileData.gender}
                id="gender-change"
              >
                {" "}
                <option>Pick One...</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">
                Emergency Contact (Phone no.)
              </Form.Label>
              <Form.Control
                placeholder={
                  userProfileData && userProfileData.emergencyContact
                }
                id="emergency-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">About Me</Form.Label>
              <Form.Control
                id="about-change"
                placeholder={userProfileData && userProfileData.aboutMe}
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
          <Button
            variant="success"
            onClick={() => {
              dispatch(editUserProfile(userProfileData._id));
              dispatch(handleClose);
              //can add successful message after
            }}
          >
            Edit...
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfilePage;
