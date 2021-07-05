import React from 'react';

const Points = (props) => {
    return(
        <button>Pay 10 points to change {props.addend} to {props.addend + 1}</button>
    )
}

export default Points;