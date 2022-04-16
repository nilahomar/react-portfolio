/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {FaLaptopCode} from 'react-icons/fa'
import {MdContactMail} from 'react-icons/md'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
     <a href='#'onClick={ ()=> setActiveNav('#')} className= {activeNav === '#'? 'active': ''}><AiOutlineHome/></a>
     <a href='#about' onClick={ ()=> setActiveNav('#about')} className= {activeNav === '#about'? 'active': ''}><AiOutlineUser/></a>
     <a href='#skills'onClick={ ()=> setActiveNav('#skills')} className= {activeNav === '#skills'? 'active': ''}><GiSkills/></a>
     <a href='#projects'onClick={ ()=> setActiveNav('#projects')} className= {activeNav === '#projects'? 'active': ''}><FaLaptopCode/></a>
     <a href='#contact'onClick={ ()=> setActiveNav('#contact')} className= {activeNav === '#contact'? 'active': ''}><MdContactMail/></a>
   </nav>
  )
}

export default Nav