import React from 'react';
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <Link to="/"><span className="navbar-brand mb-0 h1">Currency Exchange Rates</span></Link>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div className="mb-2">
        <h6><span class="badge bg-secondary"><a className="mr-3 " href="https://github.com/Altcademy/alt-currency-exchange" target="_blank" rel="noopener noreferrer">GitHub</a></span></h6>
        </div>
        <div>
          <span className="mr-3 text-secondary">Built by <a href="https://www.altcademy.com" target="_blank" rel="noopener noreferrer">CodewithCoop </a>in collaboration with  <a href="https://www.altcademy.com" target="_blank" rel="noopener noreferrer">Altcademy </a>and a lot of ☕</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;