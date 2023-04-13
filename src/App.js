import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import MemberForm from "./Pages/MemberForm";
import MemberForm1 from "./Pages/MemberForm1";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand mx-3" href="#">
          <i className="fa fa-book" aria-hidden="true"></i>Library Management
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
               Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Members
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Borrowed Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Returned Books
                </a>
              </li>
            </ul>
          </div>
        </nav>
      <div className="container">
        
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col col-lg-2">
              <nav className="dashboard-menu">
                <ul className="menu-list">
                  <li><i className="fa fa-book" aria-hidden="true"></i>Books</li>
                  <li>
                <Link to="memberform1"><i className="fa fa-users" aria-hidden="true"></i>Members</Link>
                  </li>
                  <li><i className="fa fa-book" aria-hidden="true"></i>Borrowed Books</li>
                  <li><i className="fa fa-book" aria-hidden="true"></i>Returned Books</li>
                </ul>
                
              </nav>
            </div>

            <div className="col col-lg-10">
            <Routes>
                  <Route path="/memberform1" element={<MemberForm1 />} />
                </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
