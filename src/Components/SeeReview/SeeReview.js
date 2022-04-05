import React from 'react';

const SeeReview = (props) => {
    const {name,review ,rattings}=props.review;
    return (
        <div className='single-review'>
            <p>comment:{review}</p>
            <h3>Name:{name}</h3>
            <h5><small>Ratings:{rattings}</small></h5>
        </div>
    );
};

export default SeeReview;