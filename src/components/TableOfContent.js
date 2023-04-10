import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./TableOfContent.css";


function TableOfContent() {
  return (
    <div>
      <nav className="TOCNav">
        <ul>
        <li>
            <Link to="/cs4474-report" className="link">
              Introduction
            </Link>
          </li>
          <li>
            <Link to="/Executive-Level-Description" className="link">
              Executive-Level Description
            </Link>
          </li>
          <li>
            <Link to="/Navigational-Map" className="link">Navigational Map</Link>
          </li>
          <li>
            <Link to="/Design-Principles" className="link">Design Principles</Link>
          </li>
          <li>
            <Link to="/Evaluation" className="link">
              Final Heuristic Evaluation of the system
            </Link>
          </li>
          <li>
            <Link to="/Recommendations" className="link">Recommendations</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default TableOfContent;
