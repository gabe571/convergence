import React, { useState, useEffect } from 'react'


const Reviews = () => {

    const [reviews, setReviews] = useState("review")
    const [items, setItems] = useState("items")

     useEffect(() => {
         fetch(`https://rawg.io/api/reviews?`)
         .then(resp => resp.json())
         .then(({results}) => setItems(results))
     },[reviews])

     return (
      <div>
    {/* {items.map(item => {
        return <li key={item.id}>
            review: {item.game}
        </li>
    })} */}
    </div>
     )
}
export default Reviews;