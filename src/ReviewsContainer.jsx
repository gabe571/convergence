import React, { Component } from 'react'
import Review from './Review'
import ReviewForm from './ReviewForm'

export default class ReviewsContainer extends Component {

  state = {
    reviews: [],
}

componentDidMount(){
fetch('http://localhost:3000/reviews')
.then(res => res.json())
.then(reviews => this.setState({ reviews }))
}
            
  addReview = (review) => {
      fetch('http://localhost:3000/reviews',{
          method: "POST",
          headers: {
              "Content-Type" : "application/json",
              Accept: "application/json",
              Authorization: `bearer ${localStorage.token}`
          },
          body: JSON.stringify({ review: review }
          ),
      })
      .then(res => res.json())
      .then(( json => {
          this.setState(prevState => ({
              reviews: [...prevState.reviews, json ]
             }))
      }))
  }

//   handleShowForm = () => {
//     this.setState({edit: false})
// }


  render() {
    return (
      <div className="review-grid">
               <ReviewForm addReview={this.addReview} review={this.handleSubmit} />
        <h1 className="review-content">REVIEWS!</h1>
         <ul className="review-cards">
      {
        this.state.reviews.map(review => <Review key={review.id} review={review}/>)
      }  
    </ul>
      </div>
    )
  }
}

