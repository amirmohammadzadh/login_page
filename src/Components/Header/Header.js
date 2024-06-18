import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="containers">
      <div className="profile">
        <div className="profile-img">
          <img src="./img/programmer.jpg" alt="programmer" />
          <div className="profile-name">
            <h2>Amir</h2>
            <h3> Mohammad Zadeh</h3>
          </div>
        </div>
      </div>
      <h1 className="logo">Login Page</h1>
    </div>
  );
}
