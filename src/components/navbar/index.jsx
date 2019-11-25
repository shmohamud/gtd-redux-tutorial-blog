import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <button>
        <Link to="/projects">Projects</Link>
      </button>
      <button>
        <Link to="/braindumps">Braindumps</Link>
      </button>
      <button>
        <Link to="/actions">Actions</Link>
      </button>
    </nav>
  );
};

export default NavBar;
