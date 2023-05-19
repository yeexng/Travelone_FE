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
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { getTripByIdAction } from "../../redux/actions/postActions/action";
import { io } from "socket.io-client";
import { Adventurer, Message } from "../../interfaces/iUsers";
import axios from "axios";
import { GiAirplaneDeparture } from "react-icons/gi";
import { ImBarcode } from "react-icons/im";
import { format } from "date-fns";

const socket = io(`${process.env.REACT_APP_BE_URL}`, {
  transports: ["websocket"],
});

const ConnectionPage = () => {
  const baseEndpoint: String =
    (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";

  const userProfileData = useSelector(
    (state: RootState) => state.userData.stock
  );
  const oneTripData = useSelector(
    (state: RootState) => state.oneTripData.stock
  );
  const dispatch = useAppDispatch();

  console.log("connection", oneTripData);

  useEffect(() => {
    dispatch(getTripByIdAction(oneTripData._id));
    socket.on("welcome", (welcomeMessage) => {
      console.log(welcomeMessage);
    });
    //join room
    socket.emit("joinRoom", oneTripData._id);
    socket.emit("setUsername", userProfileData.firstName);
    socket.on("loggedIn", (adventurersList) => {
      // console.log(adventurersList);
      setAdventurersList(adventurersList);
    });

    socket.on("newMessage", (newMessage) => {
      // console.log(newMessage);
      // setChatHistory([...chatHistory, newMessage.message])
      // if we set the state just by passing a value, the new message will be appended to the INITIAL state of the component (empty chat history [])
      // since we don't want that, we should use the set state function by passing a callback function instead
      // this is going to give us the possibility to access to the CURRENT state of the component (chat history filled with some messages)
      setChatHistory((chatHistory) => [...chatHistory, newMessage.message]);
    });

    // console.log("In connection:", oneTripData);
  }, []);

  // Socket.io & Chat
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [adventurersList, setAdventurersList] = useState<Adventurer[]>([]);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  // Adding to DB
  const [texts, setTexts] = useState("");
  const addChatToDB = async (tripId: string) => {
    try {
      const res = await axios.post(
        `${baseEndpoint}/trips/${tripId}/chats`,
        {
          text: texts,
          sender: userProfileData._id,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.status === 200) {
        setTexts("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = () => {
    const newMessage = {
      sender: userProfileData.firstName,
      text: message,
      createdAt: new Date().toLocaleString("en-US"),
    };
    socket.emit("sendMessage", { message: newMessage });
    setChatHistory([...chatHistory, newMessage]);
    setMessage("");
  };

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
                <Nav.Link>
                  <Link
                    to={`/trips/${oneTripData._id}`}
                    className="secret-link"
                  >
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
                <Link to={`/login`} className=" logout-link">
                  Logout
                </Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      {/* Body Part */}
      <div style={{ height: "92vh" }}>
        <div className="single-trip-layout">
          <Row className="main-row-layout">
            {/* left div */}
            <Col md={7}>
              <div className="left-connection-div">
                <div className="trip-single-div d-flex justify-content-center align-items-center mx-5">
                  <Row className="left-profile-card ">
                    <Col md={12} className="left-travel-pass-text ">
                      <h3 className="mt-4 ml-4 font-s">
                        Your Travel Partner Details:{" "}
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
                          src={oneTripData.user?.avatar}
                        />
                      </Figure>
                      <div className="bar-code-in-connection ml-4">
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
                          <p className="font-s">
                            FIRST NAME: <br></br>
                            <span className="profile-detail font-p">
                              {oneTripData.user?.firstName}
                            </span>
                          </p>
                        </Col>
                        <Col md={7}>
                          <p className="font-s">
                            LAST NAME: <br></br>
                            <span className="profile-detail font-p">
                              {oneTripData.user?.lastName}{" "}
                            </span>
                          </p>
                        </Col>
                        <Col md={5}>
                          <p className="font-s">
                            DATE OF BIRTH: <br></br>
                            <span className="profile-detail font-p">
                              {format(
                                new Date(oneTripData.user?.dateOfBirth),
                                "dd/MM/yyyy"
                              )}{" "}
                            </span>
                          </p>
                        </Col>
                        <Col md={7}>
                          <p className="font-s">
                            GENDER:<br></br>
                            <span className="profile-detail font-p">
                              {oneTripData.user?.gender}{" "}
                            </span>
                          </p>
                        </Col>
                        <Col md={5}>
                          <p className="font-s">
                            EMAIL: <br></br>
                            <span className="profile-detail font-p">
                              {oneTripData.user?.email}{" "}
                            </span>
                          </p>
                        </Col>
                        <Col md={7}>
                          <p className="font-s">
                            EMERGENCY CONTACT: <br></br>
                            <span className="profile-detail font-p">
                              {oneTripData.user?.emergencyContact}{" "}
                            </span>
                          </p>
                        </Col>
                        <Col md={12}>
                          <p className="font-s">
                            ABOUT ME: <br></br>
                            <span className="profile-detail-about font-p">
                              {oneTripData.user?.aboutMe}{" "}
                            </span>
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            {/* Chat Part */}
            <Col className="post-text m-0">
              <div className="mt-4">
                <h5 className="font-s">{oneTripData.title} </h5>
                <div className="mb-2">
                  Your Adventure Buddies:{" "}
                  {oneTripData?.adventurers.map((user: any) => {
                    return <span>{user.firstName}, </span>;
                  })}
                </div>
              </div>
              <div className="chat-history mb-3">
                {/* Chat History */}
                {oneTripData?.chatHistory.map((message: any) => {
                  return message.sender.firstName !==
                    userProfileData.firstName ? (
                    <div className="speech-wrapper" key={message._id}>
                      <div className="bubble">
                        <div className="txt">
                          <p className="name">{message.sender.firstName}</p>
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
                          <p className="name alt font-s">
                            You<span> ~ {message.sender.firstName}</span>
                          </p>
                          <p className="message">{message.text}</p>
                          <span className="timestamp">
                            {format(
                              new Date(message.createdAt),
                              "dd/MM/yyyy HH:mm:ss"
                            )}
                          </span>
                        </div>
                        <div className="bubble-arrow alt"></div>
                      </div>
                    </div>
                  );
                })}
                {/* Chat Bubble */}
                {chatHistory.map((message, index) => {
                  return message.sender !== userProfileData.firstName ? (
                    <div className="speech-wrapper" key={index}>
                      <div className="bubble">
                        <div className="txt">
                          <p className="name font-s">{message.sender}</p>
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
                          <span className="timestamp">
                            {" "}
                            {format(
                              new Date(message.createdAt),
                              "dd/MM/yyyy HH:mm:ss"
                            )}
                          </span>
                        </div>
                        <div className="bubble-arrow alt"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mb-1">
                <Row className="chat-input mt-2 pt-3">
                  <Col md={1}>
                    <img
                      className="profile-img mr-3"
                      src={userProfileData?.avatar}
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
                      <div className="d-flex">
                        <InputGroup>
                          <Form.Control
                            placeholder="Enter Message"
                            value={message}
                            onChange={(e) => {
                              setMessage(e.currentTarget.value);
                              setTexts(e.currentTarget.value);
                            }}
                          />
                        </InputGroup>
                        <Button
                          variant="success"
                          type="submit"
                          onClick={() => {
                            addChatToDB(oneTripData._id);
                          }}
                        >
                          Send
                        </Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ConnectionPage;
