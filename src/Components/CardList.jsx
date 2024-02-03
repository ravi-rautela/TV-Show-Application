import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const CardList = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => setShows(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (showId) => {
    navigate(`/showSummery/${showId}`);
  }
  return (
    <div>
      <h1 className="text-center my-4">All Shows are here</h1>
      <div className="card_container">
        {shows.map((show) => {
          return (
            <Card style={{ width: "18rem" }} key={show.show.id}>
              <Card.Img
                variant="top"
                src={
                  show.show.image && show.show.image.medium
                    ? show.show.image.medium
                    : ""
                }
              />
              <Card.Body>
                <Card.Title>
                  <div className="flex-data">
                    <div>
                      {show.show && show.show.name
                        ? show.show.name
                        : "Show Name"}
                    </div>
                    <div className="text-red">
                      {show.show.rating && show.show.rating.average
                        ? show.show.rating.average
                        : "rating"}{" "}
                    </div>
                  </div>
                </Card.Title>
                <Button
                  variant="primary"
                  onClick={() => handleClick(show.show.id)}
                >
                  Show More
                </Button>
              </Card.Body>
            </Card>
          );
          // console.log(
          //   show.show.network && show.show.network.name
          //     ? show.show.network.name
          //     : "tesing"
          // );
        })}
      </div>
    </div>
  );
};

export default CardList;
