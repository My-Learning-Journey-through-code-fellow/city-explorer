import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';  //--Import Boostrap
import Button from 'react-bootstrap/Button'; //-- Then Import React-Bootstrap
import './CityCard.css'

class CityCard extends React.Component {

  render() {

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=11`;
    console.log(mapURL);

    let weatherInfo = this.props.weatherData.map((day, idx) => {
      return <ListGroup.Item key={idx}>{day.date} - {day.description}</ListGroup.Item>
    })
    return (
      <Card
        id="Card"
        bg="light"
        style={{ width: '18rem' }}>
        <Card.Img variant="top" src={mapURL} />
        <Card.Body>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
          <Card.Text>
            {this.props.cityData.lat} ,
            {this.props.cityData.lon}
          </Card.Text>
          <Button type='reset' variant="dark">5 Day Forecast Below</Button>
        </Card.Body>
        <ListGroup className="Forecast">
          {weatherInfo}
        </ListGroup>
      </Card>
    )
  }
};

export default CityCard;