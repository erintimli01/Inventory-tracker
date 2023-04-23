import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

function Keg(props) {
  const [pintCount, setPintCount] = useState(124);

  const bottomsUp = () => {
    if (pintCount > 0) {
      setPintCount(pintCount - 1);
    }
  };


  return (
    <div>
      <Toast className="mb-4">
        <Toast.Header closeButton={false}>
          <div onClick={() => props.whenKegClicked(props.id)}>

              <h3><strong>Name:</strong> {props.name}</h3>
              <p><strong>Brand: </strong>{props.brand}</p>
              <p><strong>Price: </strong>${props.price}</p>
              <p><strong>Remaining Pints: </strong>{pintCount}</p> 

          </div>
        </Toast.Header>
      </Toast>

      <Button variant="primary" onClick={bottomsUp} disabled={pintCount === 0}>
        Bottoms up!
      </Button>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
  whenKegClicked: PropTypes.func
};

export default Keg;