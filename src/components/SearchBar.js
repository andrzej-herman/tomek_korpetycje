import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <InputGroup className="mb-3">
      <FormControl placeholder="Wpisz tytuł filmu lub nazwisko reżysera" />
      <InputGroup.Append>
        <Button variant="outline-secondary">Szukaj</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBar;
