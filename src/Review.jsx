import React from 'react'


const Reviews = (props) => {

    const { review } = props
    return (
 <div className="review-container">
     <div className="review-card">
      <div className="review-username">{review.user_username}</div>
         <div className="review-content">{review.reviewed_game}</div>
            <div className="review-rating">{review.rating}<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
         </div>
    </div>
 )
}

export default Reviews;