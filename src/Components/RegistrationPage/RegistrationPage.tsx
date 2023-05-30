import { Link, useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { getUserProfile } from "../../redux/actions/userActions/action";

const RegistrationPage = () => {
  const baseEndpoint: String =
    (process.env.REACT_APP_BE_URL as string) || "http://localhost:3005";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [aboutMe] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(baseEndpoint + "/users/account", {
        firstName,
        lastName,
        gender,
        email,
        password,
        emergencyContact,
        dateOfBirth,
        aboutMe,
      });
      localStorage.setItem("accessToken", data.accessToken);
      //might need to add accessToken into module
      console.log("In Register Page:", data);
      navigate("/trips");
      dispatch(getUserProfile(data.user._id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Navbar style={{ height: "8vh" }} bg="dark" variant="dark" expand="lg">
          <div className="container-fluid mx-5">
            <Navbar.Brand>
              <img className="logo-img" src="/assets/Travelone-Logo.png" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </div>
        </Navbar>
      </div>
      <div style={{ height: "92vh" }} className="container-fluid main-layout">
        <Row className="justify-content-center align-items-center h-100 ">
          <Col md={4} className="registration-form py-2">
            <h2 className="registration-text font-s">
              {" "}
              Ready to be a Traveloner!?{" "}
            </h2>
            <Form className="registration-text" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(val) => setFirstName(val.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  onChange={(val) => setLastName(val.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0">Gender</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Male/Female"
                  onChange={(val) => setGender(val.currentTarget.value)}
                >
                  <option>Pick One...</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(val) => setEmail(val.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="mb-0">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(val) => setPassword(val.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="mb-0">Emergency Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please note that this is important for your safety reason!"
                  onChange={(val) =>
                    setEmergencyContact(val.currentTarget.value)
                  }
                />
              </Form.Group>
              <Form.Group controlId="duedate">
                <Form.Label className="mb-0">Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="duedate"
                  placeholder="Due date"
                  // value={Date}
                  // onChange={(e) => setDate(e.target.value)}
                  onChange={(val) => setDateOfBirth(val.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox" className="my-2">
                <Form.Check
                  type="checkbox"
                  label="I'm clear that Travelone will take no further responsibilities to ensure my personal safety!"
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Link to={"/login"} className="btn btn-success mr-1 font-s">
                  Back
                </Link>
                <Button
                  className="font-s"
                  variant="primary"
                  type="submit"
                  style={{ width: "35%" }}
                >
                  Register
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RegistrationPage;
