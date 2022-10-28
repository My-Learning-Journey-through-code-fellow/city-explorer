import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  //--Import Boostrap
import Toast from 'react-bootstrap/Toast';


class ErrorToast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
    }
  }

  render() {


    return (
      <>
        <Toast
          bg="danger">
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Error</strong>
            <small>Please try again</small>
          </Toast.Header>
          <Toast.Body>{this.state.errorMessage}</Toast.Body>
        </Toast>
      </>
    );
  }

};


export default ErrorToast;