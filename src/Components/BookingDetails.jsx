import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function BookingDetails({ showname, time, day }) {
  const [showTitle, setShowTitle] = useState(showname);
  const [showTime, setShowTime] = useState(time);
  const [showDay, setShowDay] = useState(day);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("ShowName", showTitle);
    localStorage.setItem("showTime", showTime);
    localStorage.setItem("showDay", showDay);
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
      // Additional logic for booking goes here
      
      setUserEmail("");
      setUserName("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Show Name</Form.Label>
          <Form.Control
            type="text"
            value={showname}
            {...(e) => setShowTitle(e.target.value)}
            disabled
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="text"
            value={time}
            {...(e) => setShowTime(e.target.value)}
            disabled
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Day</Form.Label>
          <Form.Control
            type="text"
            value={day}
            {...(e) => setShowDay(e.target.value)}
            disabled
          />
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter you name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="phone"
          max={10}
          placeholder="Enter Email Id"
          autoComplete="off"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Button variant="primary" className="mt-3" type="submit">
          Book
        </Button>
      </Form.Group>
    </Form>
  );
}

export default BookingDetails;
