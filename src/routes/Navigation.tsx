import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={"nav-active"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={"nav-active"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={"nav-active"}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};
