import React from 'react';

const Points = (props) => {
    return(
        <button>Pay 10 points to change {props.counter} to {props.counter + 1}</button>
    )
}

export default Points;