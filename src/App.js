import { useState } from "react";
import DisplayCities from "./components/DisplayCities";
import Header from "./components/Header";
import DisplayWeather from "./components/DisplayWeather";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { BounceLoader } from "react-spinners";

function App() {
  const [value, setValue] = useState("");
  const [coordonates, setCoordonates] = useState([]);
  const [cityWeather, setCityWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const api = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=4&appid=${process.env.REACT_APP_KEY}`;

    try {
      setLoading(true);
      const response = await fetch(api);
      const data = await response.json();
      setCoordonates(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  // get user input
  const handleChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    setValue(userInput);
  };

  // get data from api on Enter key
  const handleKeySearch = (e) => {
    if (e.key === "Enter") {
      getData();
      setValue("");
    }
  };

  // get city weather using lan and lon
  const getCoordonatesWeather = async (lat, lon) => {
    // console.log(lat, lon);
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_KEY}&units=metric `;
    try {
      const response = await fetch(api);
      const data = await response.json();
      setCityWeather(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InputGroup className="mb-3 mt-5 w-25">
          <InputGroup.Text>Search</InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="text"
            placeholder="By City Name ( example: Berlin )"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeySearch}
          />
        </InputGroup>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? (
          <BounceLoader />
        ) : (
          coordonates.map((city, index) => (
            <DisplayCities
              city={city}
              key={index}
              getCoordonatesWeather={getCoordonatesWeather}
            />
          ))
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin:"100px 0 100px 0"}}>
        <DisplayWeather cityWeather={cityWeather} />
      </div>
    </div>
  );
}

export default App;
