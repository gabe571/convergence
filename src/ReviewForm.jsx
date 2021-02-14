import React from 'react';


function ReviewForm(props) {
    const nameEl = React.useRef(null);
  
    const handleSubmit = e => {
      e.preventDefault();
      alert(nameEl.current.value);
    };
  
    return (
       <form onSubmit={handleSubmit}>
         <label >Review:
             <br></br>
           <textarea rows={10} cols={70} ref={nameEl} className="form" />
         </label>
         <br />
         <label>Stars:
           <input type='number' max='5' min='0' ref={nameEl} />
         </label>
         <input type="submit" name="Submit" />
       </form>
     );
  }

export default ReviewForm;