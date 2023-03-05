import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

const DisplayWeather = ({ cityWeather }) => {
  if (!cityWeather) {
    return;
  }

  const { coord, main, name, sys, weather, wind, timezone } = cityWeather;
  const sunrise = new Date((sys.sunrise + timezone) * 1000);
  const localTime = `${sunrise.getDate()} / ${
    sunrise.getMonth() + 1
  } / ${sunrise.getFullYear()}`;

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card border="primary" style={{ width: "18rem" }} className="h-100">
              <Card.Header>City coordinates</Card.Header>
              <Card.Body>
                <Card.Text>Lat: {coord.lat}</Card.Text>
                <Card.Text>Lon: {coord.lon}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card border="primary" style={{ width: "18rem" }} className="h-100">
              <Card.Header>City Temperature</Card.Header>
              <Card.Body>
                <Card.Text>Temperature: {main.temp} °C</Card.Text>
                <Card.Text>Max Temperature: {main.temp_max} °C</Card.Text>
                <Card.Text>Min Temperature: {main.temp_min} °C</Card.Text>
                <Card.Text>Feels Like: {main.feels_like} °C</Card.Text>
                <Card.Text>Pressure: {main.pressure}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card border="primary" style={{ width: "18rem" }} className="h-100">
              <Card.Header>City Details</Card.Header>
              <Card.Body>
                <Card.Text>Country: {sys.country}</Card.Text>
                <Card.Text>Name: {name}</Card.Text>
                <Card.Text>Humidity: {main.humidity}</Card.Text>
                <Card.Text>Local Date: {localTime}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card border="primary" style={{ width: "18rem" }} className="h-100">
              <Card.Header>City Weather</Card.Header>
              <Card.Body>
                <Card.Text>Main: {weather[0].main}</Card.Text>
                <Card.Text>Description: {weather[0].description}</Card.Text>
                <Card.Text>Wind Speed: {wind.speed}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DisplayWeather;
