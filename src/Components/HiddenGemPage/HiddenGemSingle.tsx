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
  FormControl,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useState } from "react";
import { getSecretPostByIdAction } from "../../redux/actions/secretActions/action";
import { useAppDispatch } from "../../redux/hooks/hooks";

const HiddenGemSingle = () => {
  const dispatch = useAppDispatch();
  const userProfileData = useSelector(
    (state: RootState) => state.userData.stock
  );

  const oneSecretPostData = useSelector(
    (state: RootState) => state.oneSecretPostData.stock
  );

  console.log("One Secret Data", oneSecretPostData);

  //ADDING COMMENTS
  const [comments, setComments] = useState("");
  const baseEndpoint: String =
    (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";

  const postComment = async (postId: String) => {
    try {
      const res = await fetch(baseEndpoint + `/posts/${postId}/comments`, {
        method: "POST",
        body: JSON.stringify({
          comment: comments,
          user: userProfileData._id,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setComments("");
        dispatch(getSecretPostByIdAction(oneSecretPostData._id));
      }
    } catch (error) {
      console.log(error);
    }
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
                      <div className="d-flex">
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Show your appreciation here..."
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                          />
                          <Button
                            variant="outline-secondary"
                            onClick={() => {
                              postComment(oneSecretPostData._id);
                            }}
                          >
                            Post
                          </Button>
                        </InputGroup>
                      </div>
                    </Col>
                  </Row>
                </p>
              </div>
              <div>
                {oneSecretPostData.comments &&
                  oneSecretPostData.comments.map((singleComment: any) => {
                    return (
                      <div className="single-comment mt-4">
                        <Row>
                          <Col md={1} className="pr-0">
                            <img
                              className="profile-img"
                              src={singleComment.user.avatar}
                            ></img>
                          </Col>
                          <Col className="ml-1">
                            <p>
                              {singleComment.user.firstName}{" "}
                              {singleComment.user.lastName}
                            </p>
                            <p>{singleComment.comment}</p>
                            <p className="mt-2 post-date">
                              {singleComment.createdAt}
                            </p>
                          </Col>
                        </Row>
                      </div>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HiddenGemSingle;
