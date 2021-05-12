import { Link, withRouter } from 'react-router-dom'
import './style/Login.css'
import logo from '../images/logo-infobeans-white.svg'

function Navbar(props) {
  return (
    <>
       <nav class="navbar fixed-top navbar-expand" style={{height:"70px"}}>
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                src={{logo}}
                alt="logo"
                width=""
                height="40px"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <span>Intranet Portal</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default withRouter(Navbar)
