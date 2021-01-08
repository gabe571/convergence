import React, { useState } from 'react'

export default function App() {
  const [resourceType, SetResourceType] = useState('posts')

  return (
    <div>
      <button onClick={() => SetResourceType('posts')}>Posts</button>
      <button onClick={() => SetResourceType('users')}>Users</button>
      <button onClick={() => SetResourceType('Comments')}>Comments</button>
      <h1>{resourceType}</h1>
    </div>
  )
}