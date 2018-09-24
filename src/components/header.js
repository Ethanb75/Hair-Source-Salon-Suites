import React from 'react'
import Link from 'gatsby-link'

import './header.css';

import logo from '../assets/white-logo.png';


function scroller(elem) {
  elem.scrollIntoView({
    behavior: 'smooth'
  })
}

const Header = ({ siteTitle }) => (
  <nav className="nav">
    <div>
      <h1 className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </h1>
    </div>
    <div>
      <ul className="menu">
        <li>
          <button onClick={() => scroller(document.querySelector('form'))}>Contact</button>
        </li>
        <li>
          <button onClick={() => scroller(document.querySelector('.featured'))}>Solutions</button>
        </li>
        <li>
          <button onClick={() => scroller(document.querySelector('.suiteExamples'))}>Examples</button>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
