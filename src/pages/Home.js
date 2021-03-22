import React from "react";
import { Container } from "react-bootstrap";
import Catalog from "../components/Catalog";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <Catalog />
    </Container>
  );
};

export default Home;
