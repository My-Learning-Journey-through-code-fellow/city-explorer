import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  //--Import Boostrap
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';  //--Import Boostrap

class MovieComp extends React.Component {
  render() {
    return (
      <Card
        id="Card"
        bg="light"
        style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${this.props.poster_path}`} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card >
    )
  }
};

export default MovieComp;
