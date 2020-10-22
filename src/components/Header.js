import React, { useState } from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Streamy
        </Link>
        <button
          onClick={() => setExpanded(!expanded)}
          className="navbar-toggler collapsed"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                All Streams
              </Link>
            </li>
            <li className="nav-item">
              <GoogleAuth />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
