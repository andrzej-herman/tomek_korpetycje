import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Jumbotron className="jumbo">
      <h1>Wyszukiwarka</h1>
      <p>
        To jest prosta wyszukiwarka filmów zrealizowana w technologii React z
        wykorzystaniem biblioteki react-bootstrap.
      </p>
      <p>
        <Link to="/details">
          <Button variant="primary">Dowiedz się więcej</Button>
        </Link>
      </p>
    </Jumbotron>
  );
};

export default Header;
