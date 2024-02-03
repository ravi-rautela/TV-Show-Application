import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import BookingDetails from "./BookingDetails";

const CardSum = ({ data }) => {
  const [show, setShow] = useState(null);
  const [seen, setSeen] = useState(false);

  const handleClose = () => setSeen(false);
  const handleShow = () => setSeen(true);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => setShow(response.data))
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <>
      <div className="container mt-5">
        {show && (
          <Card>
            <Card.Header as="h5">About Show</Card.Header>
            <Card.Body>
              <Card.Title className="title">{show.name}</Card.Title>
              <Card.Text>{show.summary}</Card.Text>
              <Button variant="primary" onClick={handleShow}>
                Book Show Ticket
              </Button>
              <Modal
                show={seen}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Book Your Show Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <BookingDetails
                    showname={show.name}
                    time={show.schedule.time}
                    day={show.schedule.days}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>                 
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
};

export default CardSum;
