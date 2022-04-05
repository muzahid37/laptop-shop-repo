import React from 'react';
import './CoustomReview.css'

const CustomReview = (props) => {
    const {name,review ,rattings}=props.review;
    return (
        <div className='single-review'>
            <p>comment:{review}</p>
            <h4>Name:{name}</h4>
            <h5><small>Ratings:{rattings}</small></h5>
        </div>
    );
};

export default CustomReview;
