/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import HeaderSocial from '../header/HeaderSocial'

function Footer() {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_social">
        <HeaderSocial/>
      </div>
      <div className="footer_copyright">
        <small>&copy; Developed by Nila Homar</small>
      </div>
    </footer>
  )
}

export default Footer