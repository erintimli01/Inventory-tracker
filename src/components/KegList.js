import React from "react";
import Keg from "./Keg";
import propTypes from 'prop-types';

function KegList(props) {
  const { kegList } = props;

  return (
    <div>
      <h2>Pierre's Brews</h2>
      {kegList.map((keg) => (
        <Keg
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        kegId={keg.id}
        // pintCount={keg.pintCount} //add pint count
        key={keg.id}
        />
      ))}
    </div>
  );
}

KegList.propTypes = {
  kegList: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      brand: propTypes.string.isRequired,
      price: propTypes.number.isRequired,
      id: propTypes.string.isRequired,
      // pintCount: propTypes.number.isRequired, //Add pintCount 
    })
  ),
};

export default KegList;