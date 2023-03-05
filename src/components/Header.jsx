import React from "react";
import { Card } from "react-bootstrap";
import image from "../assets/image.jpg";

const Header = () => {
  return (
    <div style={{ height: "200px", padding: " 5px 30px" }}>
      <Card className="bg-dark text-white h-100 text-center">
        <Card.Img className="h-100" src={image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Weather App</Card.Title>
          <Card.Text className="mt-5">
            A weather app that provides current weather
            forecasts. Utilizes OpenWeather API to retrieve weather data for
            cities.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Header;
