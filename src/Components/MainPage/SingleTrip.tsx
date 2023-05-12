import { Link } from "react-router-dom";
import "./SingleTrip.css";
import "./ChatBubble.scss";
import {
  Col,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  InputGroup,
  Figure,
  Button,
  Modal,
} from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { editTripByIdAction } from "../../redux/actions/postActions/action";
import { io } from "socket.io-client";

const socket = io(`${process.env.REACT_APP_BE_URL}`, {
  transports: ["websocket"],
});

const SingleTrip = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch();

  const userProfileData = useSelector(
    (state: RootState) => state.userData.stock
  );

  const oneTripData = useSelector(
    (state: RootState) => state.oneTripData.stock
  );

  console.log("Single Trip", oneTripData);

  //Socket.io
  const [message, setMessage] = useState("");
  const username = userProfileData.firstName;
  const [chatHistory, setChatHistory] = useState<
    { sender: string; text: string; createdAt: string }[]
  >([]);
  const chatMessages = document.querySelector(".chat-history");

  const enterChat = () => {
    // useEffect(() => {
    socket.on("welcome", (welcomeMessage) => {
      console.log(welcomeMessage);
    });
    socket.on("message", (message) => {
      console.log(message);
      setChatHistory((chatHistory) => [...chatHistory, message]);
    });

    socket.on("newMessage", (newMessage) => {
      console.log(newMessage);
      // setChatHistory([...chatHistory, newMessage.message])
      // if we set the state just by passing a value, the new message will be appended to the INITIAL state of the component (empty chat history [])
      // since we don't want that, we should use the set state function by passing a callback function instead
      // this is going to give us the possibility to access to the CURRENT state of the component (chat history filled with some messages)
      setChatHistory((chatHistory) => [...chatHistory, newMessage.message]);
    });
    // }, []);
  };

  const sendMessage = () => {
    const newMessage = {
      sender: username,
      text: message,
      createdAt: new Date().toLocaleString("en-US"),
    };
    socket.emit("sendMessage", { message: newMessage });
    setChatHistory([...chatHistory, newMessage]); // setChatHistory([...chatHistory, newMessage]);
  };

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
                <Nav.Link onClick={handleShow}>Edit Trip</Nav.Link>
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
      <div style={{ height: "94vh" }}>
        <div className="single-trip-layout">
          <Row className="main-row-layout">
            <Col md={8}>
              <div className="trip-single-div d-flex justify-content-center align-items-center mx-5">
                <Row>
                  <Col md={3}>
                    <Figure className="pl-3 pt-3">
                      <Figure.Image
                        width={200}
                        height={200}
                        alt="171x180"
                        src={oneTripData.user.avatar}
                      />
                    </Figure>
                  </Col>
                  <Col className="mt-2">
                    <h2>{oneTripData.title}</h2>
                    <p>
                      with{" "}
                      <span>
                        {oneTripData.user.firstName} {oneTripData.user.lastName}
                      </span>
                    </p>
                    <p>Destination: {oneTripData.destination}</p>
                    <p>Starting Date: {oneTripData.date}</p>
                    <p>Looking for: {oneTripData.lookingFor}</p>
                    <p>Budget: ${oneTripData.budget}</p>
                    <p>Type of Travel: {oneTripData.typeOfJourney}</p>
                    <p>Split Cost: {oneTripData.splitCost}</p>
                    <p>{oneTripData.addOns}</p>
                    <Button variant="outline-danger" onClick={enterChat}>
                      Connect
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="post-text m-0">
              <div className="mt-4">
                <p>
                  <img
                    alt="user-avatar"
                    className="profile-img mr-3"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  ></img>
                  {oneTripData.user.firstName} {oneTripData.user.lastName}
                </p>
              </div>
              <div className="chat-history mb-3">
                {/* Chat Bubble */}
                {chatHistory.map((message, index) => {
                  return message.sender !== userProfileData.firstName ? (
                    <div className="speech-wrapper" key={index}>
                      <div className="bubble">
                        <div className="txt">
                          <p className="name">{message.sender}</p>
                          <p className="message">{message.text}</p>
                          <span className="timestamp">{message.createdAt}</span>
                        </div>
                        <div className="bubble-arrow"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="speech-wrapper">
                      <div className="bubble alt mr-2">
                        <div className="txt">
                          <p className="name alt">
                            You<span> ~ {message.sender}</span>
                          </p>
                          <p className="message">{message.text}</p>
                          <span className="timestamp">{message.createdAt}</span>
                        </div>
                        <div className="bubble-arrow alt"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <Row className="chat-input mt-2">
                  <Col md={1}>
                    <img
                      className="profile-img mr-3"
                      src={userProfileData.avatar}
                    ></img>
                  </Col>
                  <Col>
                    <Form
                      id="chat-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        sendMessage();
                      }}
                    >
                      <InputGroup>
                        <Form.Control
                          placeholder="Enter Message"
                          value={message}
                          onChange={(e) => setMessage(e.currentTarget.value)}
                        />
                      </InputGroup>
                      <Button variant="success" type="submit">
                        Send
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* Modal Page */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> Edit Your Trip </Modal.Title>
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
        <Modal.Footer>
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
