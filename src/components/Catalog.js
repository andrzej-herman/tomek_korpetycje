import React from "react";
import { movies } from "../data";
import MovieCard from "./MovieCard";

const Catalog = () => {
  return (
    <div className="catalog">
      {movies.map((element) => (
        <MovieCard
          key={element.id}
          title={element.title}
          director={element.director}
          descr={element.descr}
        />
      ))}
    </div>
  );
};

export default Catalog;
