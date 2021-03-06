import { Link, withRouter } from 'react-router-dom'
import logo from '../images/logo-infobeans-white.svg'
import {Redirect} from 'react-router-dom'
import './style/Navbar.css'
import {CgMenuGridR} from 'react-icons/all';
import { IconContext } from "react-icons";

function Navbar(props) {
  const LogOut = (e)=>{
   localStorage.removeItem("token");
   <Redirect to="/"/>
  }
  return (
    <>
    <div class="header">
        <nav class="navbar fixed-top  navbar-expand-md">
            <div class="container-fluid">
              <a class="navbar-brand text-white" href="#">
                <img
                  src={logo}
                  alt=""
                  width="128"
                  height="40"
                  class="d-inline-block align-text-down"
                />
               <span> Intranet Portal</span>
              </a>
              <ul class="nav justify-content-end collapse navbar-collapse" id="collapsibleNavbar">
                <li class="nav-item">
               <a class="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Message Board</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tides</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Applauds</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Gallery</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Jobs</a>
                  </li>
                  <li class="nav-item" >
                    <a class="nav-link" href="/login" onClick={LogOut}>Logout</a>
                  </li>
                  <li class="nav-item text-white">
                    <IconContext.Provider value={{size:"2rem", className: "global-class-name" }}>
            <CgMenuGridR />
            </IconContext.Provider>
                  </li>
              </ul>
            </div>
         
          </nav>
    </div>
      
    
    </>
  )
}

export default withRouter(Navbar)