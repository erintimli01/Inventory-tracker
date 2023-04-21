import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ReusableForm(props) {
  return(
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group controlId="name">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Enter brew name" />
        </Form.Group>

        <Form.Group controlId="brand">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Enter brand" />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Enter sighting location" />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Enter price" />
        </Form.Group>

        <Button variant="primary" type="submit" style={{margin: '10px'}}>{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;