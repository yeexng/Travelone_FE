import "./LoginPage.css";
import {
  Button,
  Col,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
  Container,
} from "react-bootstrap";

const LoginPage = () => {
  return (
    <>
      <div>
        <Navbar style={{ height: "6vh" }} bg="dark" variant="dark" expand="lg">
          <div className="container-fluid mx-5">
            <Navbar.Brand href="#home">TravelOne?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="ml-auto">
                <NavDropdown title="Username" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
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
      <div style={{ height: "94vh" }} className="container-fluid main-layout">
        <Row className="justify-content-center align-items-center h-100">
          <Col md={3}>
            <h2 className="login-text"> Adventure Time! </h2>
            <Form className="login-text">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  //   onChange={(val) => setEmail(val.currentTarget.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  //   onChange={(val) => setPassword(val.currentTarget.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "49%" }}
                >
                  Login
                </Button>
                <Button
                  //   to={"/register"}
                  className="btn btn-success"
                  style={{ width: "49%" }}
                >
                  Sign Up
                </Button>
              </div>
              <div className="d-flex justify-content-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">OR</p>
              </div>
              <a
                href="http://localhost:3001/users/session/googleRedirect"
                className="btn mb-4 py-2 w-100 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#55acee",
                  color: "#fff",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-google mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                Login with Google
              </a>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoginPage;
