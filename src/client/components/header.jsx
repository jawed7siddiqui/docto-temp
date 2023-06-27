import React, { useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icon

import { faHospital } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/images/logo1.png";
import IMG01 from "../assets/images/doctors/doctor-thumb-02.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";
import config from "config";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = (props) => {

//Aos

useEffect(() => {
  AOS.init({duration: 1200,
    once: true});  
  
}, []);

//mobile menu  
const [isSideMenu, setSideMenu] = useState("")
const [isSideMenuone,setSideMenuone] =useState("")
const [isSideMenutwo,setSideMenutwo] =useState("")
const toggleSidebar = (value) => {
console.log (value);
setSideMenu(value)

}
const toggleSidebarone = (value) => {
console.log (value);
setSideMenuone(value)

}
const toggleSidebartwo = (value) => {
console.log (value);
setSideMenutwo(value)

}
  console.log("Working", isSideMenu)


  let pathnames = window.location.pathname

  const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  

  return ( 
    <>
     {  (pathnames.includes("homeslider1")) &&
        <div className="header-top">
          <div className="left-top ">
            <ul>
              <li><i className="fas fa-map-marker-alt top-icon" />3WS4B,West Tower, Mani Casadona, New Town, West Bengal Kolkata- 700 156, India</li>
              <li><i className="fas fa-phone-volume top-icon" />+ 91 33 40016243</li>
              <li><i className="fas fa-envelope top-icon" />mail@yourdomain.com</li>
            </ul>
          </div>
          <div className="right-top ">
            <ul>
              <li><i className="fab fa-facebook-f top-icons" />
              </li>
              <li><i className="fab fa-instagram top-icons" />
              </li>
              <li><i className="fab fa-linkedin-in top-icons" />
              </li>
              <li><i className="fab fa-twitter top-icons" />
              </li>
            </ul>
          </div>
        </div>
    }
    { (!pathnames.includes("home1") && !pathnames.includes("home4") && !pathnames.includes("home6") && !pathnames.includes("home7") && !pathnames.includes("home8")) && 
          <header className="header">
          <nav className={`navbar navbar-expand-lg header-nav ${pathnames.includes("home1") ? "nav-transparent" : "" }`}>
            <div className="navbar-header">
              <a href="#0" id="mobile_btn" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <a href="#" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a href="#" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </a>
                <a
                  href="#0"
                  id="menu_close"
                  className="menu-close"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#ourbranch">Our Branches</a>
                </li>
                <li>
                  <a href="#ourdoctors">Our Doctors</a>
                </li>

                <li>
                  <a href="#">Testimonials</a>
                </li>
                
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item contact-item">
                <div className="header-contact-img">
                  <i className="far fa-hospital" />							
                </div>
                <div className="header-contact-detail">
                  <p className="contact-header">Contact</p>
                  <p className="contact-info-header">+ 91 33 40016243</p>
                </div>
              </li>
    
              {(props.location.pathname) === ("/pages/voice-call") || (props.location.pathname) === ("/pages/video-call") ? (
                <>
                  <Dropdown className="user-drop nav-item dropdown has-arrow logged-item">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <img
                        className="rounded-circle"
                        src={IMG01}
                        width="31"
                        alt="Darren Elder"
                      />
                    </Dropdown.Toggle>
    
                    <Dropdown.Menu>
                      <div className="user-header">
                        <div className="avatar avatar-sm">
                          <img
                            src={IMG01}
                            alt="User"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                        <div className="user-text">
                          <h6>Darren Elder</h6>
                          <p className="text-muted mb-0">Doctor</p>
                        </div>
                      </div>
                      <Dropdown.Item href={`${config.publicPath}doctor/doctor-dashboard`}>
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item href={`${config.publicPath}doctor/profile-setting`}>
                    Profile Settings
                  </Dropdown.Item>
                  <Dropdown.Item href={`${config.publicPath}login`}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link header-login">
                      login / Signup{" "}
                    </Link>
                  </li>{" "}
                </>
              )}
            </ul>
          </nav>
        </header>
    }
          
    </>
  );
};

export default Header;
