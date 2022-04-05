import React from 'react';
import useReviews from '../../Hooks/UserReview/userRevier';
import SeeReview from '../SeeReview/SeeReview';
import './Reviews.css'

const Reviews = () => {
    
    const [reviews,setReviews]=useReviews();
    return (
        <div className='review_container'>
          {
              reviews.map(review=><SeeReview
                key={review.id}
                review={review} 
              ></SeeReview>)
          }
               
        
          
        </div>
    );
};

export default Reviews;