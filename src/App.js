import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const Api_key = "9945f8abd158f57ecbe0db3a783c2e4e";

class App extends Component {

  state = {
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getweather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const Api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${Api_key}`)
    const data = await Api.json();

    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: 'Please Enter Data'
      })
    } else {
      this.setState({
        tempreature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: ''
      })
    }
  }
  render() {
    return (
      <div className="main">
        <div className="container">
          <Form getweather={this.getweather} />
          <Weather
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>

      </div>
    )

  }
}

export default App;
