import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';  //--Import Boostrap
import Button from 'react-bootstrap/Button'; //-- Then Import React-Bootstrap
// import './Main.css'
import './CityCard.css'



class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
      mapURL: '',
      lat: '',
      lon: '',
    }
  }

  render() {

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=11`;
    console.log(mapURL);

    return (
      <>

        <Card
          id="Card"
          bg="light"
          style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mapURL} />
          <Card.Body>
            <Card.Title>{this.props.display_name}</Card.Title>
            <Card.Text>
              {this.props.lat}
              {this.props.lon}
            </Card.Text>
            <Button type="reset" variant="dark">Where Next?</Button>
          </Card.Body>
        </Card>
      </>
    )




  };


}

export default CityCard;