import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  //--Import Boostrap
import './Main.css'
import CityCard from './CityCard';
import ErrorToast from './ErrorToast';
// import MovieComp from './MovieComp';


// import Image from 'react-bootstrap/Image';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
      cityLat: '',
      cityLon: '',
      weatherErr: '',
      weatherData: [],
      showWeather: true,
      showWeatherErr: false,
      movieData: []
    }
  } z


  // *** CITY DATA DEMO HANDLERS ***

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  // async/await - handles our asynchronous code
  // try/catch - handles our promise - resolve a successful promise, or handles our errors with a rejected promise

  getCityData = async (e) => {
    e.preventDefault();
    console.log(this.state.city);

    try {
      // TODO: get data back from LocationIQ
      // Use axios to make my API call

      // define my URL to send to axios:
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`

      // let url = `https://tdugar-city-explorer-server.herokuapp.com/weather?cityName=${this.state.cityName}`

      // let url = `${process.env.REACT_APP_SERVER}/weather?cityName=${this.state.cityName}`;


      let cityData = await axios.get(url);

      console.log(cityData.data[0]);
      // this.handleMovie(cityData.data[0])
      this.handleWeather(cityData.data[0])
      this.setState({
        cityData: cityData.data[0],
        error: false,
        cityLat: cityData.data[0].lat,
        cityLon: cityData.data[0].lon,
        showWeather: true,
        show: true,
      });

    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  handleWeather = async (location) => {
    try {
      let lat = location.lat;
      let lon = location.lon;
      const weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?cityName=${this.state.city}&lat=${lat}&lon=${lon}`)
      this.setState({ weatherData: weatherData.data.description, showWeather: true })
      console.log(this.state.weatherData)
    } catch (error) {
      console.log(error);
      const weatherErr = error.response.data

      this.setState({ weatherErr: weatherErr, showWeather: false, showWeatherErr: false })
    }
  }

  // handleMovies = async (c) => {
  //   try {
  //     let cityName = city.lat;

  //     const weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?cityName=${this.state.city}&lat=${lat}&lon=${lon}`)
  //     this.setState({ weatherData: weatherData.data.description, showWeather: true })
  //     console.log(this.state.weatherData)
  //   } catch (error) {
  //     console.log(error);
  //     const weatherErr = error.response.data

  //     this.setState({ weatherErr: weatherErr, showWeather: false, showWeatherErr: false })
  //   }
  // }


  render() {

    return (
      <>

        <h1 id='Title'>City Explorer</h1>
        <main>
          <form onSubmit={this.getCityData}>
            <label > Pick a City!,<br></br>
              Then Press Enter!<br></br>
              <br></br>
              <input type="text" onInput={this.handleInput} />
            </label>
          </form>
          <br></br>
        </main>

        {/* Ternary W ? T : F */}
        {
          this.state.error
            ?

            <ErrorToast
              errorMessage={this.state.errorMessage}
            />

            :
            <>
              <CityCard
                cityData={this.state.cityData}
                weatherData={this.state.weatherData}
              />
              {/* <MovieComp
                movieData={this.state.movieData}
              /> */}
            </>
        }
      </>
    );
  }

};

export default Main;