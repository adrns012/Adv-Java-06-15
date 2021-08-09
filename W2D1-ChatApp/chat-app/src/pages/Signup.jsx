import React, { useState } from "react";
import { Link } from "react-router-dom";
import {signup } from "../helpers/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("email", email);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("password", password);
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError({ error: "" });
    try {
     await signup(email, password);
    } catch (error) {
      setError(error.message);
      // this.setState({error:error.mess})
    }
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <h1>
          Sign up to
          <Link to="/home">The Chat App</Link>
        </h1>
        <p>Fill out the form to use the app</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          {error ? <p>error</p> : null}
          <button type="submit">Sign up</button>
        </div>
       
        <hr></hr>
        <p>
          If you have a account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
    </>
  );
}

export default Signup;
