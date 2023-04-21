import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

function KegDetails(props) {
    const { keg, onClickingDelete } = props;

    return (
        <React.Fragment>
            <h1>Keg Details</h1>
            <h3>Keg Name: {keg.name}</h3>
            <h3>Brand: {keg.brand}</h3>
            <h3>Price: ${keg.price}</h3>
            {/* <h3>Remaining Pints: {keg.pintCount}</h3> */}
            <Button variant="primary" onClick={props.onClickingEdit} style={{margin: '10px'}}>Update Keg Details</Button>{' '}
            <Button variant="danger" onClick={() => onClickingDelete(keg.id)} style={{margin: '10px'}}>Delete Keg</Button>
            <hr />
        </React.Fragment>
    );
}

KegDetails.propTypes = {
    keg: PropTypes.object,
    onClickingDelete: PropTypes.func ,
    onClickingEdit: PropTypes.func
};

export default KegDetails;