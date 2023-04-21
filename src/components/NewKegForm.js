import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";
import Button from 'react-bootstrap/Button';

function NewKegForm(props){

  function handleNewBirdFormSubmission(event) {
    event.preventDefault();
    props.onNewBirdCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      id: v4()
    });
}

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBirdFormSubmission}
        buttonText={<Button variant="primary" style={{margin: '10px'}}>Add brew</Button>} />
    </React.Fragment>   
  );
}

NewBirdForm.propTypes = {
  onNewBirdCreation: PropTypes.func
};

export default NewBirdForm;