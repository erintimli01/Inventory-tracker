import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

EditKegForm.propTypes = {
    Keg: PropTypes.object,
    onEditKeg: PropTypes.func
  };

function EditKegForm(props){
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({ 
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      id: keg.id});
    }

    return (
      <React.Fragment>
        <ReusableForm 
          formSubmissionHandler={handleEditKegFormSubmission} 
          buttonText="Update Keg"
          variant="Primary" />
      </React.Fragment>
    );
}

export default EditKegForm;