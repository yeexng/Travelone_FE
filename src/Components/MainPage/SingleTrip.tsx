import { Link, useNavigate } from "react-router-dom";
import "./SingleTrip.css";
import "./ChatBubble.scss";
import {
  Col,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  Figure,
  Button,
  Modal,
} from "react-bootstrap";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import {
  editTripByIdAction,
  getTripByIdAction,
} from "../../redux/actions/postActions/action";
import { format } from "date-fns";

const baseEndpoint: string =
  (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";

const SingleTrip = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userProfileData = useSelector(
    (state: RootState) => state.userData.stock
  );

  const oneTripData = useSelector(
    (state: RootState) => state.oneTripData.stock
  );

  console.log("Single Trip", oneTripData);
  console.log("user", userProfileData);

  const enterChat = () => {
    // //Adding User to the User Array
    const adventurerId = [userProfileData._id];
    const data = {
      adventurers: [adventurerId],
    };
    fetch(baseEndpoint + `/trips/${oneTripData._id}/adventurerList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Handle the response from the server
        dispatch(getTripByIdAction(oneTripData._id));

        // console.log(result); // Assuming the server responds with the updated trip object
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  const formattedDate = oneTripData?.date
    ? format(new Date(oneTripData.date), "dd/MM/yyyy")
    : "";

  return (
    <>
      <div className="sticky-navbar">
        <Navbar style={{ height: "8vh" }} bg="dark" variant="dark" expand="lg">
          <div className="container-fluid mx-5">
            <Navbar.Brand>
              <Link to={"/trips"} className="text-decoration-none text-white">
                <img className="logo-img" src="/assets/Travelone-Logo.png" />
              </Link>
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
                {oneTripData.user?._id === userProfileData?._id ? (
                  <Nav.Link onClick={handleShow}>Edit Trip</Nav.Link>
                ) : (
                  ""
                )}{" "}
                <Nav.Link>
                  <Link to={"/trips"} className="secret-link">
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
      {/* Body Part */}
      <div style={{ height: "92vh" }}>
        <div className="single-trip-layout">
          <Row className="main-row-layout">
            <Col>
              <div className="trip-single-div d-flex justify-content-center align-items-center mx-5">
                <Row className="postcard-div">
                  <div className="postcard-overlay"></div>
                  <div className="postcard-photo">
                    <Figure className="pl-3 pt-3">
                      <Figure.Image
                        width={200}
                        height={200}
                        alt="171x180"
                        src={oneTripData.user?.avatar}
                      />
                    </Figure>
                  </div>
                  <img
                    className="postcard-stamp"
                    src="/assets/stamp.png"
                    alt="stamp"
                  />
                  <div className="mt-2 postcard-text ml-3">
                    <h2 className="font-s">{oneTripData?.title}</h2>
                    <p>
                      with{" "}
                      <span className="mr-3 trip-details">
                        {oneTripData.user?.firstName}{" "}
                        {oneTripData.user?.lastName}
                      </span>
                      to{" "}
                      <span className="trip-details">
                        {" "}
                        {oneTripData?.destination}
                      </span>
                    </p>
                    <div className="row ">
                      {/* <p className="col- postcard-text-data">
                        Destination: <br />
                      </p> */}
                      <p className=" col-4 postcard-text-data">
                        Starting Date: <br />
                        <span className="trip-details">
                          {formattedDate}
                        </span>{" "}
                      </p>
                      <p className="col-7 postcard-text-data">
                        Looking for: <br />
                        <span className="trip-details">
                          {oneTripData?.lookingFor}
                        </span>
                      </p>
                      <p className="col-4 postcard-text-data">
                        Type of Travel: <br />
                        <span className="trip-details">
                          {oneTripData?.typeOfJourney}
                        </span>
                      </p>
                      <p className="col-3 postcard-text-data">
                        Budget:
                        <br />
                        <span className="trip-details">
                          {" "}
                          ${oneTripData?.budget}
                        </span>
                      </p>
                      <p className="col-3 postcard-text-data">
                        Split Cost: <br />
                        <span className="trip-details">
                          {oneTripData?.splitCost}
                        </span>
                      </p>
                      <p className="col-11 postcard-text-data">
                        Trip Details: <br />
                        <span className="trip-details">
                          {oneTripData?.addOns}
                        </span>
                      </p>
                    </div>
                  </div>
                  {oneTripData.adventurers?.some(
                    (adventure: any) => adventure._id === userProfileData._id
                  ) ? (
                    <Button
                      variant="primary"
                      className="ml-3 mt-2 postcard-button"
                      onClick={() => {
                        navigate(`/trips/${oneTripData._id}/chat`);
                      }}
                    >
                      Go to the Chat
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      className="ml-3 mt-2 postcard-button"
                      onClick={() => {
                        dispatch(enterChat);
                        navigate(`/trips/${oneTripData._id}/chat`);
                      }}
                    >
                      Join the Party
                    </Button>
                  )}{" "}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Modal Page */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="font-s"> Edit Your Trip </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label className="m-0">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder={oneTripData && oneTripData.title}
                id="title-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Destination</Form.Label>
              <Form.Control
                type="text"
                placeholder={oneTripData.destination}
                id="destination-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Starting Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={oneTripData.date}
                placeholder={oneTripData && oneTripData.date}
                id="date-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Budget</Form.Label>
              <Form.Control
                type="number"
                placeholder={oneTripData.budget}
                id="budget-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Looking For</Form.Label>
              <Form.Control
                as="select"
                defaultValue={oneTripData.lookingFor}
                placeholder={oneTripData.lookingFor}
                id="lookingFor-change"
              >
                <option>Pick One...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Any</option>{" "}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Type of Travel</Form.Label>
              <Form.Control
                as="select"
                defaultValue={oneTripData.typeOfJourney}
                id="typeOfTravel-change"
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
                defaultValue={oneTripData.splitCost}
                id="splitCost-change"
              >
                <option>Pick One...</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Add ons for the trip</Form.Label>
              <Form.Control
                placeholder={oneTripData.addOns}
                as="textarea"
                rows={3}
                id="addOns-change"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="font-s">
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              dispatch(editTripByIdAction(oneTripData._id));
              dispatch(handleClose);
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleTrip;
