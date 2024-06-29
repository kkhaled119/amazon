import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/login-logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import "./Signin.css";
import { useAuth } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signin-page">
      <header className="signin-header">
        <Link to="/">
          <img src={Logo} className="signin-header-logo" alt="Logo" />
        </Link>
      </header>
      <div className="signin">
        <div className="signin-container">
          <h1>Sign in</h1>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="signin-signInBtn"
            type="submit"
            onClick={handelSignIn}
          >
            Sign in
          </button>
          <p>
            By signing in, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button className="signin-registerBtn" onClick={register}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
