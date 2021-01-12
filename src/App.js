import React, { useState, useEffect } from 'react'


export default function App() {

  const [races, setRaces] = useState('races')
  const [items, setItems] = useState([])
  const [classes, setClasses] = useState('classes')
  const [className, setClassNames] = useState([])
  const [specializations, setSpecializations] = useState('specializations')
  const [specs, setSpecs] = useState([])
 

  useEffect(() => {
  fetch(`https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-us&locale=en_US&access_token=US02EuGg12ws0BgdyhjHJsnTRMWXsZNHIw`)
  .then(response => response.json())
  .then(json => setItems(json.races))
  },[races]) 

   useEffect(() => {
      fetch(`https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-us&locale=en_US&access_token=US02EuGg12ws0BgdyhjHJsnTRMWXsZNHIw`)
      .then(response => response.json())
      .then(json => setClassNames(json.classes))
      },[classes]) 

  useEffect(() => {
    fetch(`https://us.api.blizzard.com/data/wow/playable-specialization/index?namespace=static-us&locale=en_US&access_token=US02EuGg12ws0BgdyhjHJsnTRMWXsZNHIw`)
    .then(response => response.json())
    .then(json => setSpecs(json.character_specializations))
    },[specializations])
    
  return (
  <div>
   <div>
  {items.map(item => {
 return <pre key={item.id}>
  Race: {item.name}
</pre>
})}
 </div>
 <div>
  {className.map(cl => {
 return <pre key={cl.id}>
  Class: {cl.name}
</pre>
})}
 </div>
<div>
  {specs.map(spec => {
 return <pre key={spec.id}>
  Specialization: {spec.name}
</pre>
})}
</div>
   </div> 
   )
  }
