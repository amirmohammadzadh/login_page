import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
// import {  } from "react-icons/fa";

export default function Login() {
  return (
    <div className="container">
      <h1 className="form__title">Login</h1>
      <div className="form__input">
        <div className="form__wallpaper">
          <input
            className="form__input_sub"
            type="text"
            placeholder="Username"
          />
          <FaUser className="form__Icon" />
        </div>
        <div className="form__wallpaper">
          <input
            className="form__input_sub"
            type="password"
            placeholder="Password"
          />
          <FaLock className="form__Icon" />
        </div>
        <button className="form__btn">Login</button>
      </div>
      <Link to={"/registration"} className="form__paragraph">
        do not have an account? <span className="form__Link">Register</span>
      </Link>
    </div>
  );
}
