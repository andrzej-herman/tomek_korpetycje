import React, { useState, useEffect } from "react";
import { movies } from "../data";
import MovieCard from "./MovieCard";
import { searchMovies } from "../filter";

const Catalog = ({ word }) => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    setFilms(movies);
  }, []);

  const moviesToDisplay = word ? searchMovies(films, word) : films;

  return (
    <div className="catalog">
      {films
        ? moviesToDisplay.map((element) => (
            <MovieCard
              key={element.id}
              title={element.title}
              director={element.director}
              descr={element.descr}
            />
          ))
        : null}
    </div>
  );
};

export default Catalog;
