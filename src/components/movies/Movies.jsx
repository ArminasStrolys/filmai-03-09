import React, {useState, useEffect} from 'react'
import Search from '../search/Search'

export default function Movies() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    const handleSearch = (term) => {
setSearch(term)
    }
    useEffect( () => {
        fetch(`https://www.omdbapi.com/?t=${search}&apikey=e4db3ced`)
        .then(response => response.json())
        .then(data => setMovies(data))
    }, [search])

console.log(search);
console.log(movies);
  return (
    <div className='container mt-4'>
    <Search onSearch ={handleSearch}/>
    <h2>Info</h2>
    <div className='row'>
        {movies.map()}
    </div>
    </div>
  )
}
