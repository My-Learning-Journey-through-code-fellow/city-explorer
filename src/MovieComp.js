import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  //--Import Boostrap
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";


class MovieComp extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Carousel loop={true} rows={1} cols={3} id="carousel">
            {this.props.movies.map((movie, index) => (
              <Carousel.Item key={index}>
                <Card >
                  <Card.Body>
                    <Card.Title >
                      {" "}
                      Title: {movie.title}{" "}
                    </Card.Title>
                    <Card.Text >
                      Description: {movie.overview}
                    </Card.Text>
                    <Card.Img
                      src={movie.image_url}
                      alt={movie.title}
                      rounded="true"
                      id="cardImg"
                    />
                    <Card.Text>
                      Votes: {movie.vote_average} Vote Count: {movie.vote_count}{" "}
                      Popularity: {movie.popularity}{" "}
                    </Card.Text>
                    <Card.Text>
                      Release Date: {movie.released_on}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </>
    )
  };
}

export default MovieComp;