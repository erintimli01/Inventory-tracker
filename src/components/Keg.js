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
            <ul>
              <li>Name: {props.name}</li>
              <li>Brand: {props.brand}</li>
              <li>Price: ${props.price}</li>
              <li>Remaining Pints: {pintCount}</li>
            </ul>
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
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenKegClicked: PropTypes.func
};

export default Keg;