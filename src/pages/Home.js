import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1 className="text-center m-auto">My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
}

export default HomePage;
