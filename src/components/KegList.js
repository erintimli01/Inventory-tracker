import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KegList(props) {
  const { kegList } = props;

  return (
    <React.Fragment>
   <Row>
      <h2>Pierre's Brews</h2>
      {kegList.map((keg) => (
   <Col md={4} className="mb-4">
        <Keg
        whenKegClicked = { props.onKegSelection }
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
      
        id={keg.id}
        // pintCount={keg.pintCount} //add pint count
        key={keg.id} />
        </Col>
      ))}
      </Row>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      // price: PropTypes.number.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      id: PropTypes.string.isRequired,
      // pintCount: propTypes.number.isRequired, //Add pintCount 
      onKegSelection: PropTypes.func
    })
  ),
};

export default KegList;