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
  Modal,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useState } from "react";
import {
  editSecretPostByIdAction,
  getSecretPostByIdAction,
  postImageToSecretPost,
} from "../../redux/actions/secretActions/action";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { BsTrashFill } from "react-icons/bs";
import axios from "axios";
import { format } from "date-fns";

const HiddenGemSingle = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useAppDispatch();
  const userProfileData = useSelector(
    (state: RootState) => state.userData.stock
  );
  const oneSecretPostData = useSelector(
    (state: RootState) => state.oneSecretPostData.stock
  );

  console.log("Data in hidden", oneSecretPostData);

  // EDITING IMAGE
  const tripImage = useAppSelector(
    (state) => state.postImageToSecretPost.stock
  );
  const [file, setFile] = useState<File | null>(null); // Initialize file state to null

  // console.log("One Secret Data", oneSecretPostData);

  //ADDING COMMENTS
  const [comments, setComments] = useState("");
  const baseEndpoint: string =
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
                {oneSecretPostData.user?._id === userProfileData?._id ? (
                  <Nav.Link onClick={handleShow}>Edit Post</Nav.Link>
                ) : (
                  ""
                )}{" "}
                <Nav.Link>
                  {" "}
                  <Link to={"/secret"} className="secret-link">
                    Back
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <NavDropdown
                  title={userProfileData && userProfileData?.firstName}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <Link
                      to={`/users/${userProfileData?._id}`}
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
      <div style={{ height: "92vh" }}>
        <div className="single-secret-layout">
          <Row className="main-row-layout">
            <Col md={8}>
              <div className="secret-single-image-div d-flex justify-content-center align-items-center">
                <img
                  alt="post image"
                  className="secret-single-image"
                  src={oneSecretPostData?.image}
                />
              </div>
            </Col>
            <Col className="post-text m-0">
              <div className="mt-4">
                <p className="font-s">
                  <img
                    alt="author image"
                    className="profile-img mr-3"
                    src={oneSecretPostData.user?.avatar}
                  ></img>
                  {oneSecretPostData.user?.firstName}{" "}
                  {oneSecretPostData.user?.lastName}
                </p>
                <h3 className="font-s">{oneSecretPostData?.title}</h3>
                <p className="mb-0 secret-single-location">
                  {oneSecretPostData?.locations}
                </p>
                <p className="mb-0">{oneSecretPostData?.details}</p>
                <p className="mt-2 post-date">
                  {format(
                    new Date(oneSecretPostData?.createdAt),
                    "dd/MM/yyyy HH:mm:ss"
                  )}
                </p>
              </div>
              <hr></hr>
              <div>
                <p>{oneSecretPostData.comments.length} comments</p>
                <p>
                  <Row>
                    <Col md={1}>
                      <img
                        alt="user avatar"
                        className="profile-img mr-3"
                        src={userProfileData?.avatar}
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
                            className="font-s"
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
              <div className="comments-container">
                {oneSecretPostData?.comments &&
                  oneSecretPostData?.comments.map((singleComment: any) => {
                    return (
                      <div className="single-comment mt-4">
                        <Row className="comment-row">
                          <Col md={1} className="pr-0">
                            <img
                              className="profile-img mt-2"
                              src={singleComment.user?.avatar}
                            ></img>
                          </Col>
                          <Col className="ml-1">
                            <Row>
                              <Col md={10}>
                                <p className="my-1 font-s">
                                  {singleComment.user?.firstName}{" "}
                                  {singleComment.user?.lastName}
                                </p>
                              </Col>
                              <Col>
                                {singleComment.user?._id ===
                                userProfileData?._id ? (
                                  <div
                                    className="my-1 btn edit-btn"
                                    onClick={async () => {
                                      try {
                                        await axios.delete(
                                          baseEndpoint +
                                            `/posts/${oneSecretPostData._id}/comments/${singleComment._id}`
                                        );
                                        console.log(
                                          `Comment with ID ${singleComment._id} has been deleted successfully.`
                                        );
                                        dispatch(
                                          getSecretPostByIdAction(
                                            oneSecretPostData._id
                                          )
                                        );
                                      } catch (error) {
                                        console.error(
                                          `Error deleting Comment with ID ${singleComment._id}`
                                        );
                                      }
                                    }}
                                  >
                                    <BsTrashFill />
                                  </div>
                                ) : (
                                  ""
                                )}
                              </Col>
                              <Col md={12}>
                                <p className="mb-0 mt-0">
                                  {singleComment?.comment}
                                </p>
                              </Col>
                              <Col md={12}>
                                <p className="mt-1 post-date">
                                  {format(
                                    new Date(singleComment?.createdAt),
                                    "dd/MM/yyyy HH:mm:ss"
                                  )}
                                </p>
                              </Col>
                            </Row>
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
                placeholder={oneSecretPostData && oneSecretPostData?.title}
                id="title-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Location</Form.Label>
              <Form.Control
                type="text"
                placeholder={oneSecretPostData?.locations}
                id="locations-change"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="m-0">Details</Form.Label>
              <Form.Control
                placeholder={oneSecretPostData?.details}
                as="textarea"
                rows={3}
                id="details-change"
              />
            </Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Group>
              <input
                type="file"
                onChange={(event) => setFile(event.target.files?.[0] ?? null)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="font-s">
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="success"
            onClick={() => {
              if (file) {
                dispatch(postImageToSecretPost(oneSecretPostData._id, file));
              }
              dispatch(editSecretPostByIdAction(oneSecretPostData._id));
              dispatch(handleClose);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HiddenGemSingle;
