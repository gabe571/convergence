import React, { useState } from 'react';
import Results from './Results';

const Search = () => {

  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let slug = search.split(' ').join('-').toLowerCase()

    setResults([])
    fetch(`https://rawg.io/api/games?search=${slug}`)
    .then(resp => resp.json())
    .then(({results}) => {
      results === undefined ? alert('no games found') : setResults(results)
    })
    setSearch()
  }
  
  return (
    <div className="game-search">
      <h1>Game Search</h1>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="type title here.."value={search} onChange={handleChange}/>
          <br></br>
          <input type="submit"/>
        </form>
        <Results gameResults={results} />
    </div>
  );
}

export default Search;
