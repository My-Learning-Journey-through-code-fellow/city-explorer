import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';  //--Import Boostrap
import Button from 'react-bootstrap/Button'; //-- Then Import React-Bootstrap
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';
import styling from './Main.css'
// import Image from 'react-bootstrap/Image';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
    }
  }


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

      // let url = `${process.env.REACT_APP_SERVER}/weather?cityName=${this.state.cityName}`;


      let cityData = await axios.get(url);

      console.log(cityData.data[0]);
      this.setState({
        cityData: cityData.data[0],
        error: false
      });

      // FOR YOUR LAB YOU WILL NEED TO GET A MAP IMAGE SRC. Example:
      // `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=47.6038321,-122.3300624&zoom=10`

    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }

  handleOpenCard = (cards) => {
    this.setState({
      showCArd: true,
      selectedCard: cards,
    })
  };


  render() {

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=11`
    console.log(mapURL);

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

            <Toast
              bg="danger">
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Error</strong>
                <small>Please try again</small>
              </Toast.Header>
              <Toast.Body>{this.state.errorMessage}</Toast.Body>
            </Toast>

            :
            <Card
              id="Card"
              bg="light"
              style={{ width: '18rem' }}>
              <Card.Img variant="top" src={mapURL} />
              <Card.Body>
                <Card.Title>{this.state.cityData.display_name}</Card.Title>
                <Card.Text>
                  {this.state.cityData.lat}
                  {this.state.cityData.lon}
                </Card.Text>
                <Button type="reset" variant="dark">Where Next?</Button>
              </Card.Body>
            </Card>
        }


      </>
    );
  }

};

export default Main;