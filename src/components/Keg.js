import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toast from 'react-bootstrap/Toast';

function Keg(props){
// function Keg({ name, brand, price, id }) {
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
        <li>Remaining Pints: {props.pintCount}</li>
      </ul>
      </div>
      </Toast.Header>
            {/* <Toast.Body>{props.desc}</Toast.Body> */}
        </Toast>
      {/* <button onClick={bottomsUp} disabled={pintCount === 0}>
        Bottoms up!
      </button>  */}

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