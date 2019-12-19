import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <Link to="/auth/github">
        <button>Import your repos from GitHub</button>
      </Link>
      <br />
      <Link to="/auth/portfolio">
        <button>Edit your repos</button>
      </Link>
    </div>
  );
};
export default Projects;
