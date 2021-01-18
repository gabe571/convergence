import React, { useState, useEffect } from 'react'


const Reviews = () => {

    const [reviews, setReviews] = useState("review")
    const [items, setItems] = useState("items")

     useEffect(() => {
         fetch(`https://api.rawg.io/api/games/3498`)
         .then(resp => resp.json())
         .then(console.log)
     },[])

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