import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      id: v4()
    });
}

return (
  <React.Fragment>
    <ReusableForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add brew" />
  </React.Fragment>   
);
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;