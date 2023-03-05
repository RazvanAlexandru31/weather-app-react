import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const DisplayCities = ({ city, getCoordonatesWeather }) => {
  const sendCoords = () => {
    getCoordonatesWeather(city.lat, city.lon);
  };
  return (
    <div style={{margin: "20px 10px 10px 20px"}}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Country: {city.country}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">City Name: {city.name}</Card.Subtitle>
          <Card.Text>City State: {city.state ? city.state : "Not Available"}</Card.Text>
          <Card.Text>Latitude: {city.lat}</Card.Text>
          <Card.Text>Longitude: {city.lon}</Card.Text>
          <Button variant="dark" onClick={sendCoords}>Get Weather</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayCities;
