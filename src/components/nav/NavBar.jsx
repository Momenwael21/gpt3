import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "./navBar.css";

export const NavBar = () => {
  const [activeNav, setActiveNav] = useState("notActive");
  window.addEventListener("scroll", () => {
    window.scrollY > 50 ? setActiveNav("active") : setActiveNav("notActive");
  });
  return (
    <nav className={`navbar ${activeNav} navbar-expand-lg bg-light`}>
      <div className="container">
        <a className="navbar-brand" href="/#">
          GPT 3
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FiMenu fontSize={30} color={"white"} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#whatGPT">
                What is GPT?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#openAI">
                Open AI
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#openAI">
                Case Studies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#openAI">
                Library
              </a>
            </li>
          </ul>
          <div className="sign-btns flex-1 justify-content-end">
            <button className="btn sign-in">Sign in</button>
            <button className="btn sign-up">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
