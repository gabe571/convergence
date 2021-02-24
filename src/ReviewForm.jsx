import React, { Component } from 'react'
import StarRating from './StarRating'



class ReviewForm extends React.Component {
 
    state = {
        reviewed_game: '',
        rating: '',
        user_username: '',
    }
    
handleReviewedGame = (event) => {
    this.setState ({
        reviewed_game: event.target.value
     })
}


handleRating = (event) => {
    this.setState ({
        rating: event.target.value
     })
}

handleUser = (event) => {
    this.setState ({
        user_username: event.target.value
    })
}

handleForm = (e) => {
    e.preventDefault()
    // console.log(e)
    const review = {
    reviewed_game: this.state.reviewed_game,
    rating: this.state.rating,
    }
    
   this.props.addReview(review)
    }
render() {
    return (
    <div className="form-container">
            <form onSubmit={(e) => {this.handleForm(e)}}>
                <div>
                    <label>Review</label>
                    <br></br>
                    <textarea type="text" placeholder="Drop Your Review" rows={10} cols={50} value={this.state.reviewed_game} onChange={this.handleReviewedGame}  className="form"/>
                    <div>
                    <label>Stars</label>
                    <br></br>
                    {/* <StarRating  /> */}
                    {/* <input type="number"  max="5" min="0" value={this.state.rating} onChange={this.handleRating} /> */}
                    </div>
                </div>
                <button type="submit" className="sub-review">Create Review!</button>
            </form> 
        
    </div>
        )
    }
}
export default ReviewForm;

































// import React from "react";

// export default function ReviewForm(props) {
//   const [review, setReview] = React.useState("");
//   const [rating, setRating] = React.useState("");
//   const [submitting, setSubmitting] = React.useState(false);


//   const handleSubmit = event => {
//     event.preventDefault();
//     setSubmitting(true);

//     setTimeout(() => {
//       setSubmitting(false);
//     }, 3000)
//   }


//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Create Review</h1>
//       {submitting &&
//         <div>Submtting Form...</div>
//       }
//       <label>
//         <textarea className="form"
//           name="review"
//           type="textarea" rows={10} cols={70}
//           value={review}
//           onChange={e => setReview(e.target.value)}
//           required />
//       </label>
//       <br />
//       <label>
//         <input 
//           name="rating"
//           type="number" min='0' max='5'
//           value={rating}
//           onChange={e => setRating(e.target.value)}
//           required />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
