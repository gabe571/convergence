import React from 'react'
import StarRating from './StarRating'


class Review extends React.Component {

    
render() {
    console.log(this.props)
    return (
<div className="review-container">
        <div className="review-card"> 
        <img src='../avatar.png' className="avatar" width="50" height="50" alt='avatar'/>
         <div className="review-username">{this.props.review.user_username}</div>
            <div className="review-content">Review: {this.props.review.reviewed_game}</div>
            < StarRating />
                <div className="review-rating">{this.props.review.rating}</div>
            </div>
         </div>
        )
    }
}


export default Review;














// import React from 'react'


// const Reviews = (props) => {

//     const { review } = props
//     console.log(props)

//     return (
//  <div className="review-container">
//      <div className="review-card">
//      <img src='../avatar.png' className="avatar" width="50" height="50" alt='avatar'/>
//       <div className="review-username">{review.user_username}</div>
//          <div className="review-content">{review.reviewed_game}</div>
//             <div className="review-rating">{review.rating}<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span></div>
//          </div>
//     </div>
//  )
// }

// export default Reviews;