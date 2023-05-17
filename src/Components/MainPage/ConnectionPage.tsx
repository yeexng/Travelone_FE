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
import axios from "axios";
import { getTripByIdAction } from "../../redux/actions/postActions/action";

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

  //Adding User to the User Array
  const adventurers = [userProfileData._id];
  const addUserToArray = async (tripId: String) => {
    try {
      const { data } = await axios.post(
        baseEndpoint + `/trips/${tripId}/adventurerList`,
        {
          adventurers,
        }
      );
      dispatch(getTripByIdAction(oneTripData._id));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(addUserToArray(oneTripData._id));
  }, []);

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
                <Nav.Link className=" logout">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default ConnectionPage;
