import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [Movies, setMovie] = useState("");

  const onChange = (q) => {
    setMovie(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Movies"
          value={Movies}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
