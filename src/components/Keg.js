import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Toast from 'react-bootstrap/Toast';


function Keg({ name, brand, price, kegId }) {
  const [pintCount, setPintCount] = useState(124);

  const bottomsUp = () => {
    if (pintCount > 0) {
      setPintCount(pintCount - 1);
    }
  };

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Brand: {brand}</li>
        <li>Price: ${price}</li>
        <li>Remaining Pints: {pintCount}</li>
      </ul>
      <button onClick={bottomsUp} disabled={pintCount === 0}>
        Bottoms up!
      </button>
    </div>
  );
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  kegId: PropTypes.string.isRequired,
};

export default Keg;