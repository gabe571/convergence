import React, { useState, useEffect } from 'react'

export default function App() {

  const [races, setRaces] = useState('races')
  const [items, setItems] = useState([])
  
  useEffect(() => {
  fetch(`https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-us&locale=en_US&access_token=US02EuGg12ws0BgdyhjHJsnTRMWXsZNHIw`)
  .then(response => response.races.json())
  .then(console.log())
  },[races]) 
 

  return (
    <div>
    {items.map(item => {
   <li key={item.id}>
    Race: {item.name}
  </li>
  })}
     </div> 
     )
    }

// client id 4d7685154d8e4ae7911f4506f179d45f
// secret ND43xZowRLxrgOLWzQBPVeH26S6F2iFE