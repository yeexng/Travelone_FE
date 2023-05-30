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
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useAppDispatch } from "../../redux/hooks/hooks";
import axios from "axios";
import {
  getSecretPostAction,
  getSecretPostByIdAction,
  postImageToSecretPost,
} from "../../redux/actions/secretActions/action";
import Masonry from "react-masonry-css";
import { get } from "jquery";

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
  const [title, setTitle] = useState("");
  const [locations, setLocations] = useState("");
  const [details, setDetails] = useState("");

  //EDIT PROFILE AVATAR
  const [file, setFile] = useState<File | null>(null);

  const handleSubmitSecret = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Create the new post
      const { data: newPost } = await axios.post(baseEndpoint + "/posts", {
        user,
        title,
        locations,
        details,
      });

      console.log(newPost);

      if (file) {
        // Add the image to the post
        const formData = new FormData();
        formData.append("image", file);

        dispatch(postImageToSecretPost(newPost._id, file));
      }

      // Refresh the secret post data

      // Close the modal
      handleClose();
      dispatch(getSecretPostAction());
    } catch (error) {
      // Handle the error appropriately
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getSecretPostAction());
  }, []);

  const secretPostArray = secretPostData.posts;

  //Search Features
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSecretPostArray = secretPostArray?.filter((post: any) => {
    return (
      (post.title &&
        post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (post.locations &&
        post.locations.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
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
          className="jumbotron-fluid d-flex align-items-center mb-4"
          style={{ height: "83vh" }}
        >
          <div className="container jumbotron-title font-s">
            <h1 className="secret-text ">
              There will always be a special spot waiting for you to discover!
            </h1>
            <p className="secret-text-small">
              And above all, <br></br>watch with glittering eyes the whole world
              around you because the greatest secrets are always hidden in the
              most unlikely places.<br></br> Those who don't believe in magic
              will never find it.
            </p>
          </div>
        </div>
        <div className=" main-content mx-5">
          <Row>
            <Form>
              <i className="bi bi-search"></i>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 show-search ml-5"
                //   value={query}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form>
          </Row>
          <Masonry
            breakpointCols={{ default: 4, 1100: 3, 900: 2, 700: 1 }}
            className="my-masonry-grid mt-3"
            columnClassName="my-masonry-grid_column"
          >
            {filteredSecretPostArray &&
              filteredSecretPostArray?.reverse().map((posts: any) => {
                return (
                  <div
                    key={posts._id}
                    className="content-secret-card my-masonry-grid_item p-0 mb-4"
                    onClick={() => {
                      dispatch(getSecretPostByIdAction(`${posts._id}`));
                      navigate(`/secret/${posts._id}`);
                    }}
                  >
                    <Card className="card-no-border">
                      <Card.Img
                        variant="top"
                        src={posts?.image}
                        className="card-img"
                      />
                      <Card.Body>
                        <Card.Title className="font-s secret-post-title">
                          {posts?.title}
                        </Card.Title>
                        <Card.Text>
                          <Row className="mb-2">
                            <Col md={2} className="pr-0">
                              <img
                                alt="profile pic"
                                className="profile-img"
                                src={posts.user?.avatar}
                              />
                            </Col>
                            <Col className="secret-post-username font-s">
                              {posts.user?.firstName} {posts.user?.lastName}
                            </Col>
                          </Row>
                          <div>
                            <span className="secret-text-location">
                              Location:
                            </span>{" "}
                            {posts?.locations}
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Masonry>

          {/* Modal Page */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title className="font-s">
                {" "}
                Share your discoveries? 🏞🛤🏕🛣🏖🏜🏝{" "}
              </Modal.Title>
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
                    <input
                      type="file"
                      onChange={(event) =>
                        setFile(event.target.files?.[0] ?? null)
                      }
                    />
                  </InputGroup>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="danger"
                      onClick={handleClose}
                      className="font-s mr-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="font-s"
                      variant="success"
                      type="submit"
                      onClick={() => {
                        dispatch(getSecretPostAction());
                      }}
                    >
                      Add Post
                    </Button>
                  </div>
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
