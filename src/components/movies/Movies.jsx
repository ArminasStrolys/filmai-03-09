import React, { useState, useEffect } from "react";
import Search from "../search/Search";
import Movie from "../movie/Movie";
import { Spinner } from "react-bootstrap";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (term) => {
    setSearch(term);
  };
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=e4db3ced`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, [search]);

  // console.log(search);
  console.log(movies);
  return (
    <div className="container mt-4">
      <Search onSearch={handleSearch} />
      <h2>Info</h2>
      <div className="row">

        {movies.length ? (
        movies.map((mov) => (
            <Movie
          title={mov.title}
          year={mov.year}
          />
          ))
 ) : (
   <Spinner animation="border" role="status">
     <span className="visually-hidden">Loading...</span>
   </Spinner>
 )}
      </div>
    </div>
  );
}