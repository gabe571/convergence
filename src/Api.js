import React, { useState, useEffect } from 'react'

export default function App() {

  const [classes, setClasses] = useState('classes')
  const [className, setClassNames] = useState([])

   useEffect(() => {
      fetch(`https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-us&locale=en_US&access_token=US02EuGg12ws0BgdyhjHJsnTRMWXsZNHIw`)
      .then(response => response.json())
      .then(json => setClassNames(json.classes))
      },[classes]) 

  return (
  <div>
 
 <div>
  {classes.map(cl => {
 return <pre key={cl.id}>
  Class: {cl.name}
</pre>
})}
 </div>

   </div> 
   )
  }

// client id 4d7685154d8e4ae7911f4506f179d45f
// secret ND43xZowRLxrgOLWzQBPVeH26S6F2iFE

