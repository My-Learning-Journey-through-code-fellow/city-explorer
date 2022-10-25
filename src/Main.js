import React from 'react';
import axios from 'axios';
import CityCard from './CityCard.js';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: ''
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

      let cityData = await axios.get(url);

      console.log(cityData.data[0]);
      this.setState({
        cityData: cityData.data[0],
        error: false
      });

      // FOR YOUR LAB YOU WILL NEED TO GET A MAP IMAGE SRC. Example:
      // `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.3300624&zoom=10`

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

    let cards = this.state.cityData.map((placeCard, index) => {
      return <CityCard
        _id={placeCard._id}
        image_url={placeCard.image_url}
        title={placeCard.title}
        description={placeCard.description}
        key={index}
        handleOpenCard={() => this.handleOpenCard(placeCard)}
      />
    });

    return (
      <>

        <h1>API Call</h1>


        <form onSubmit={this.getCityData}>
          <label > Pick a City!
            <input type="text" onInput={this.handleInput} />
            <button type='submit'>Explore!</button>
          </label>
        </form>
        <CityCard>
        {this.state.cityData.display_name}
        </CityCard>


        {/* Ternary W ? T : F */}
        {
          this.state.error
            ?
            <p>{this.state.errorMessage}</p>
            :
            <p>{cards}</p>


        }
      </>
    );
  }
}


export default Main;