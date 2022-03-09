import React, { useState } from "react";

export default function Search(props) {
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const submitHandler = (e) => {    //IMPORTANT SUBMIT
      e.preventDefault()
      props.onSearch(term)
  }
  console.log(term);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <input
              className="form-control"
              onChange={handleChange}
              value={term}
              type="text"
              placeholder="Movie title"
            />
            <button type="submit" className="btn btn-primary mt-4">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}
