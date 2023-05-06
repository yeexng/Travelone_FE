import { FormEvent, useState } from "react";
import "./MainPage.css";
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
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useAppDispatch } from "../../redux/hooks/hooks";
import axios from "axios";

const MainPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userProfileData = useSelector(
    (state: RootState) => state.userData.stock
  );
  // console.log("Main Page:", userProfileData);

  //Creating Trip
  const baseEndpoint: String =
    (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [typeofJourney, setTypeOfJourney] = useState("");
  const [splitCost, setSplitCost] = useState("");
  const [addOns, setAddOns] = useState("");
  const user = userProfileData._id;

  const handleSubmitTrip = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(baseEndpoint + "/trips", {
        user,
        title,
        destination,
        date,
        budget,
        lookingFor,
        typeofJourney,
        splitCost,
        addOns,
      });
      console.log("Added new trip in Main Page:", data);
      //need to add getTripAction here
      dispatch({ handleClose });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <Navbar style={{ height: "6vh" }} bg="dark" variant="dark" expand="lg">
          <div className="container-fluid mx-5">
            <Navbar.Brand>TravelOne?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  {" "}
                  <Link to={"/secret"} className="secret-link">
                    Secret HideOuts
                  </Link>
                </Nav.Link>
                <Nav.Link onClick={handleShow}>Create Trip</Nav.Link>
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
            <h1 className="jumbotron-title">Travelone? or Travel Alone?</h1>
            <p className="jumbotron-title">Alone no more...</p>
          </div>
        </div>
        <div className=" main-content mx-5">
          <Row>
            <Col
              md={6}
              onClick={() => {
                navigate(`/trips/abcd`);
              }}
            >
              {/* need to change the id passing */}

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
          {/* Modal Page */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title> Where's your next plan? 🏞🛤🏕🛣🏖🏜🏝 </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmitTrip}>
                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Give your trip a fun name"
                    onChange={(val) => setTitle(val.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Destination</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter a city or country name"
                    onChange={(val) => setDestination(val.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Starting Date</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(val) => setDate(val.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Budget</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="What's your budget"
                    onChange={(val) => setBudget(val.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Looking For</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    onChange={(val) => setLookingFor(val.currentTarget.value)}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Any</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Type of Travel</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    onChange={(val) =>
                      setTypeOfJourney(val.currentTarget.value)
                    }
                  >
                    <option>Backpacking</option>
                    <option>Leisure</option>
                    <option>Business Travel</option>
                    <option>Visiting Friends or Relatives</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Split Cost</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    onChange={(val) => setSplitCost(val.currentTarget.value)}
                  >
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
                    onChange={(val) => setAddOns(val.currentTarget.value)}
                  />
                </Form.Group>
                <Button variant="success" type="submit" onClick={handleClose}>
                  Add Trip
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default MainPage;
