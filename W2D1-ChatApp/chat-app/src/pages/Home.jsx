import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to the chat app</h1>
      <div>
        <Link to="/signup">Create new account</Link>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
