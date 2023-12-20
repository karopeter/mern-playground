import React from 'react';
import logo from '../../assets/images/salelogo.png';
import { Link } from 'react-router-dom';
import './header-styles.css';


const Header = () => {
    return (
      <>
        <nav>
          <div className="heading">
            <img src={logo} alt="#" className="logo-image" />
          </div>
          <ul className="nav-links">
            <li className="nav-list">
              <Link to="/home" className="nav-active">
                Home
              </Link>
            </li>
            <li className="nav-list">
              <Link to="/products" className="nav-active">
                Our Product
              </Link>
            </li>
            <li className="nav-list">
              <Link to="" className="nav-active">
                Contact Us
              </Link>
            </li>
            <li className="nav-list">
              <Link to="" className="nav-active">
                About Us
              </Link>
            </li>
            <li className="nav-list">
              <Link to="" className="nav-active">
                Advertisment
              </Link>
            </li>
            <li className="nav-list">
              <Link to="/walmart" className="nav-active">
                Walmart
              </Link>
            </li>
            <li className="nav-list">
              <Link to="/" className="nav-active">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Header;