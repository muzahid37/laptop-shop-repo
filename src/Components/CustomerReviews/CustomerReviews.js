import React from 'react';
import { Link } from 'react-router-dom';
import CustomReview from '../../customReview/CustomReview';
import useReviews from '../../Hooks/UserReview/userRevier';
import "./CustomerReviews.css"

const CustomerReviews = () => {
    const [reviews,setReviews]=useReviews();
    return (
        <div className='CustomerReviews-container'>
            <h2 className='CustomerReviews-header'>Customer Review</h2>
            <div className="coustomer_revies">
                {
                    reviews.slice(0,3).map(review=><CustomReview 
                        key={review.id}
                        review={review}
                    ></CustomReview>)
                }
            </div>
            <button className='CustomerReviews-button'><Link to="/reviews">See all review</Link></button>
        </div>
    );
};

export default CustomerReviews;