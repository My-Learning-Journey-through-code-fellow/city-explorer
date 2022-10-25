import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CityCard extends React.Component {


  render() {
    return (
      <Card
        show={this.props.showCard}
        style={{ width: '18rem' }}>
        <Card.Img />
        <Card.Body>
          <Card.Title>{this.props.display_name}</Card.Title>
          <Card.Text>
            {this.props.lat}, {this.props.lon}
          </Card.Text>
          <Button variant="primary">Woot</Button>
        </Card.Body>
      </Card>
    );
  }

};

export default CityCard;