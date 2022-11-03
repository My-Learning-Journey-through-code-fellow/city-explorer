import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  //--Import Boostrap
import Toast from 'react-bootstrap/Toast';
import './Main.css'

class ErrorToast extends React.Component {

  render() {

    return (
      <>
        <Toast
          id="Error"
          bg="danger">
          <Toast.Header>
            <strong className="me-auto">Error</strong>
            <small>Please try again</small>
          </Toast.Header>
          <Toast.Body>{this.props.errorMessage}</Toast.Body>
        </Toast>
      </>
    );
  }
};

export default ErrorToast;