import React from "react";

export default function ReviewForm() {
  const [review, setReview] = React.useState("");
  const [stars, setStars] = React.useState("");


  const handleSubmit = (event) => {
    console.log(`
      Review: ${review}
      Stars: ${stars}
    `);

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Review</h1>

      <label>
        <textarea className="form"
          name="review"
          type="textarea" rows={10} cols={70}
          value={review}
          onChange={e => setReview(e.target.value)}
          required />
      </label>
      <br />
      <label>
        <input 
          name="stars"
          type="number" min='0' max='5'
          value={stars}
          onChange={e => setStars(e.target.value)}
          required />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
