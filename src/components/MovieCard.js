import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ title, director, descr }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{director}</Card.Subtitle>
        <Card.Text>{descr}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
