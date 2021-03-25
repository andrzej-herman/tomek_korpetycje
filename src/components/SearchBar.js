import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const changeKeyword = (e) => {
    onSearch(e.target.value);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Wpisz tytuł filmu lub nazwisko reżysera"
        onChange={changeKeyword}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">Szukaj</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBar;
