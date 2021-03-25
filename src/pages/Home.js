import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Catalog from "../components/Catalog";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [keyWord, setKeyWord] = useState(null);
  const keywordExists = (data) => {
    setKeyWord(data);
  };

  return (
    <Container>
      <Header />
      <SearchBar onSearch={keywordExists} />
      <Catalog word={keyWord} />
    </Container>
  );
};

export default Home;
