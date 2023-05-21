import { FormEvent, useEffect, useState } from "react";
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
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useAppDispatch } from "../../redux/hooks/hooks";
import axios from "axios";
import {
  getTripAction,
  getTripByIdAction,
} from "../../redux/actions/postActions/action";
import { format } from "date-fns";

const MainPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userProfileData = useSelector(
    (state: RootState) => state.userData.stock
  );
  const tripData = useSelector((state: RootState) => state.tripData.stock);

  //Creating Trip
  const baseEndpoint: String =
    (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";
  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [typeOfJourney, setTypeOfJourney] = useState("");
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
        typeOfJourney,
        splitCost,
        addOns,
      });
      dispatch(getTripAction());
      console.log(data);
      dispatch({ handleClose });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getTripAction());
  }, []);

  const tripsArray = tripData.trips;

  //Search Features
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTripsArray = tripsArray?.filter((trip: any) => {
    return (
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <div className="sticky-navbar">
        <Navbar style={{ height: "8vh" }} bg="dark" variant="dark" expand="lg">
          <div className="container-fluid mx-5">
            <Navbar.Brand>
              <img className="logo-img" src="/assets/Travelone-Logo.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="font-s">
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
                <Link to={`/login`} className=" logout-link">
                  Logout
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      <div className="container-fluid p-0">
        <div
          className="jumbotron-fluid main-jumbotron d-flex align-items-center mb-4"
          id="main-jumbotron"
          style={{ height: "83vh" }}
        >
          <div className="container jumbotron-title font-s">
            <h1>Travelone? or Travel Alone?</h1>
            <p>Alone no more...</p>
          </div>
        </div>
        <div className=" main-content mx-5">
          <Row>
            <Form>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 show-search ml-5"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form>
          </Row>

          <Row>
            {filteredTripsArray &&
              filteredTripsArray?.reverse().map((trips: any) => {
                return (
                  <Col
                    key={trips._id}
                    md={6}
                    className="main-content-card"
                    onClick={() => {
                      dispatch(getTripByIdAction(`${trips._id}`));
                      navigate(`/trips/${trips._id}`);
                    }}
                  >
                    {/* need to change the id passing */}

                    <div className="content-card m-3">
                      <div
                        className="background-overlay"
                        style={{
                          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${trips.user?.avatar})`,
                        }}
                      ></div>
                      <Row>
                        <Col md={3} className="p-3">
                          <Figure className="pl-3 pt-3">
                            <Figure.Image
                              width={200}
                              height={100}
                              alt="171x180"
                              src={trips.user?.avatar}
                            />
                            <Figure.Caption className="font-s">
                              {trips.user?.firstName} {trips.user?.lastName}{" "}
                            </Figure.Caption>
                          </Figure>
                        </Col>
                        <Col className="p-3 content-card-text">
                          <h3 className="font-s">{trips?.title}</h3>
                          <p>Destination: {trips?.destination}</p>
                          <p>
                            Date: {format(new Date(trips?.date), "dd/MM/yyyy")}
                          </p>
                          <p>Looking For: {trips?.lookingFor}</p>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                );
              })}
          </Row>
          {/* Modal Page */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title className="font-s">
                {" "}
                Where's your next plan? 🏞🛤🏕🛣🏖{" "}
              </Modal.Title>
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
                    onChange={(val) => setLookingFor(val.currentTarget.value)}
                  >
                    <option>Pick One...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Any</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label className="m-0">Type of Travel</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(val) =>
                      setTypeOfJourney(val.currentTarget.value)
                    }
                  >
                    <option>Pick One...</option>
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
                    onChange={(val) => setSplitCost(val.currentTarget.value)}
                  >
                    <option>Pick One...</option>
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
                <div className="d-flex justify-content-end">
                  <Button
                    variant="primary"
                    onClick={handleClose}
                    className="font-s mr-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    onClick={handleClose}
                    className="font-s"
                  >
                    Add Trip
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default MainPage;
