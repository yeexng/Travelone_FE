import { Link } from "react-router-dom";
import "./RegistrationPage.css";
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

const RegistrationPage = () => {
  return (
    <>
      <div>
        <Navbar style={{ height: "6vh" }} bg="dark" variant="dark" expand="lg">
          <div className="container-fluid mx-5">
            <Navbar.Brand href="#home">TravelOne?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      <div style={{ height: "94vh" }} className="container-fluid main-layout">
        <Row className="justify-content-center align-items-center h-100 ">
          <Col md={3} className="registration-form py-2">
            <h2 className="registration-text"> Ready to be a Traveloner!? </h2>
            <Form className="registration-text">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Family Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your family name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Emergency Contact</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Please note that this is important for your safety reason!"
                />
              </Form.Group>
              <Form.Group controlId="duedate">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="duedate"
                  placeholder="Due date"
                  // value={Date}
                  // onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I'm clear that Travelone will take no further responsibilities to ensure my personal safety!"
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "49%" }}
                >
                  Register
                </Button>
                <Link to={"/login"} className="btn btn-success">
                  Back
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RegistrationPage;
